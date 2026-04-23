import { useReducer, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { submitQuote, type QuoteData } from '../../lib/email'
import { useI18n } from '../../lib/i18n'

/** Stored & sent to email in English regardless of UI language */
const PROJECT_TYPE_VALUES = [
  'Website',
  'Mobile App',
  'E-commerce',
  'Dashboard / SaaS',
  'Something else',
] as const
const DESIGN_VALUES = [
  'I have a complete design',
  'I have a rough idea / wireframes',
  'I need design + development',
  'Redesign an existing product',
] as const
const BUDGET_VALUES = [
  'Under $5,000',
  '$5,000 – $15,000',
  '$15,000 – $40,000',
  '$40,000+',
  "I don't know yet",
] as const
const TIMELINE_VALUES = [
  'As soon as possible',
  'Within 1 month',
  'Within 3 months',
  'Still planning',
] as const

// ─── State ─────────────────────────────────────────────────────────────────────

type State = {
  step: number
  projectType: string
  hasDesign: string
  budget: string
  timeline: string
  name: string
  email: string
  company: string
  phone: string
  notes: string
}

type Action =
  | { type: 'SET'; field: keyof Omit<State, 'step'>; value: string }
  | { type: 'NEXT' }
  | { type: 'BACK' }

const initial: State = {
  step: 0,
  projectType: '',
  hasDesign: '',
  budget: '',
  timeline: '',
  name: '',
  email: '',
  company: '',
  phone: '',
  notes: '',
}

function reducer(state: State, action: Action): State {
  if (action.type === 'SET') return { ...state, [action.field]: action.value }
  if (action.type === 'NEXT') return { ...state, step: state.step + 1 }
  if (action.type === 'BACK') return { ...state, step: Math.max(0, state.step - 1) }
  return state
}

// ─── Option chip ───────────────────────────────────────────────────────────────

function Chip({
  label,
  sub,
  selected,
  onClick,
}: {
  label: string
  sub?: string
  selected: boolean
  onClick: () => void
}) {
  const { lang } = useI18n()
  return (
    <button
      type="button"
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
      onClick={onClick}
      className={`relative w-full text-start px-5 py-4 rounded-xl border transition-all duration-150 ${
        selected
          ? 'border-[#F55E00] bg-gradient-to-br from-[#F55E00]/15 to-[#E8003D]/8 text-[var(--c-hi)]'
          : 'border-[var(--c-raised)] bg-[var(--c-bg)] text-[var(--c-body)] hover:border-[var(--c-border)] hover:text-[var(--c-hi)]'
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <div>
          <span className="text-sm font-semibold">{label}</span>
          {sub && <p className="text-xs mt-0.5 text-[var(--c-muted)]">{sub}</p>}
        </div>
        <div
          className={`w-4 h-4 rounded-full border shrink-0 flex items-center justify-center transition-all ${
            selected ? 'border-[#F55E00] bg-[#F55E00]' : 'border-[var(--c-border)]'
          }`}
        >
          {selected && (
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
              <path
                d="M1.5 4l2 2 3-3"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
      </div>
    </button>
  )
}

// ─── Text input ────────────────────────────────────────────────────────────────

function Field({
  label,
  required,
  children,
}: {
  label: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-widest mb-2 text-[var(--c-muted)]">
        {label}
        {required && <span className="text-[#F55E00] ml-1">*</span>}
      </label>
      {children}
    </div>
  )
}

const inputCls =
  'w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-150 bg-[var(--c-bg)] border-[var(--c-raised)] text-[var(--c-hi)] placeholder:text-[var(--c-border)] focus:border-[#F55E00] focus:bg-[var(--c-bg)]'

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 48 : -48, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -48 : 48, opacity: 0 }),
}

// ─── Main form ─────────────────────────────────────────────────────────────────

export function QuoteForm() {
  const { t } = useI18n()
  const qf = t.quoteForm
  const [state, dispatch] = useReducer(reducer, initial)
  const [direction, setDirection] = useState(1)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const reduced = useReducedMotion()

  const set = (field: keyof Omit<State, 'step'>, value: string) =>
    dispatch({ type: 'SET', field, value })

  const next = () => {
    setDirection(1)
    dispatch({ type: 'NEXT' })
  }
  const back = () => {
    setDirection(-1)
    dispatch({ type: 'BACK' })
  }

  const canNext = [
    state.projectType !== '',
    state.hasDesign !== '',
    state.budget !== '',
    state.timeline !== '',
    state.name !== '' && state.email !== '',
  ][state.step] ?? true

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!state.name || !state.email) return
    setSubmitting(true)
    setError('')
    try {
      await submitQuote({
        data: {
          projectType: state.projectType,
          hasDesign: state.hasDesign,
          budget: state.budget,
          timeline: state.timeline,
          name: state.name,
          email: state.email,
          company: state.company || undefined,
          phone: state.phone || undefined,
          notes: state.notes || undefined,
        } as QuoteData,
      })
      setSubmitted(true)
    } catch {
      setError(qf.submitError)
    } finally {
      setSubmitting(false)
    }
  }

  const firstName = state.name.split(' ')[0] || state.name

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="py-16 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
          className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center bg-gradient-to-br from-[#F55E00]/20 to-[#E8003D]/10 border border-[#F55E00]/30"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <motion.path
              d="M5 13l4 4L19 7"
              stroke="#F55E00"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
          </svg>
        </motion.div>
        <h3 className="text-2xl font-bold text-[var(--c-hi)] mb-2">
          {qf.successTitle.replace('{firstName}', firstName)}
        </h3>
        <p className="text-[var(--c-muted)] text-sm max-w-sm mx-auto leading-relaxed">{qf.successSub}</p>
      </motion.div>
    )
  }

  return (
    <div>
      <div className="flex items-center justify-center sm:justify-start gap-2 mb-10">
        {qf.steps.map((s, i) => (
          <div key={s.label} className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <div
                className={`w-6 h-6 rounded-full text-[10px] font-bold flex items-center justify-center transition-all duration-200 ${
                  i < state.step
                    ? 'bg-[#F55E00] text-white'
                    : i === state.step
                      ? 'bg-[#F55E00]/20 border-2 border-[#F55E00] text-[#F55E00]'
                      : 'bg-transparent border border-[var(--c-muted)] text-[var(--c-muted)]'
                }`}
              >
                {i < state.step ? (
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <path
                      d="M1.5 4l2 2 3-3"
                      stroke="#fff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  i + 1
                )}
              </div>
              <span
                className={`text-[11px] font-semibold hidden sm:block transition-colors duration-200 ${
                  i === state.step
                    ? 'text-[var(--c-hi)]'
                    : i < state.step
                      ? 'text-[#F55E00]'
                      : 'text-[var(--c-muted)]'
                }`}
              >
                {s.label}
              </span>
            </div>
            {i < qf.steps.length - 1 && (
              <div
                className={`h-px w-5 transition-colors duration-300 ${i < state.step ? 'bg-[#F55E00]/60' : 'bg-[var(--c-border)]'}`}
              />
            )}
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={state.step}
          custom={direction}
          variants={reduced ? {} : slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-2xl font-bold text-[var(--c-hi)] tracking-tight mb-6">
            {qf.steps[state.step].question}
          </p>

          {state.step === 0 && (
            <div className="space-y-2.5">
              {qf.projectTypes.map((opt, i) => (
                <Chip
                  key={PROJECT_TYPE_VALUES[i]}
                  label={opt.label}
                  sub={opt.sub}
                  selected={state.projectType === PROJECT_TYPE_VALUES[i]}
                  onClick={() => set('projectType', PROJECT_TYPE_VALUES[i])}
                />
              ))}
            </div>
          )}

          {state.step === 1 && (
            <div className="space-y-2.5">
              {qf.designStatus.map((opt, i) => (
                <Chip
                  key={DESIGN_VALUES[i]}
                  label={opt.label}
                  sub={opt.sub}
                  selected={state.hasDesign === DESIGN_VALUES[i]}
                  onClick={() => set('hasDesign', DESIGN_VALUES[i])}
                />
              ))}
            </div>
          )}

          {state.step === 2 && (
            <div className="space-y-2.5">
              {qf.budgets.map((opt, i) => (
                <Chip
                  key={BUDGET_VALUES[i]}
                  label={opt.label}
                  sub={opt.sub}
                  selected={state.budget === BUDGET_VALUES[i]}
                  onClick={() => set('budget', BUDGET_VALUES[i])}
                />
              ))}
            </div>
          )}

          {state.step === 3 && (
            <div className="space-y-2.5">
              {qf.timelines.map((opt, i) => (
                <Chip
                  key={TIMELINE_VALUES[i]}
                  label={opt.label}
                  sub={opt.sub}
                  selected={state.timeline === TIMELINE_VALUES[i]}
                  onClick={() => set('timeline', TIMELINE_VALUES[i])}
                />
              ))}
            </div>
          )}

          {state.step === 4 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label={qf.fields.name} required>
                  <input
                    type="text"
                    required
                    value={state.name}
                    onChange={(e) => set('name', e.target.value)}
                    placeholder={qf.placeholders.name}
                    className={inputCls}
                  />
                </Field>
                <Field label={qf.fields.company}>
                  <input
                    type="text"
                    value={state.company}
                    onChange={(e) => set('company', e.target.value)}
                    placeholder={qf.placeholders.company}
                    className={inputCls}
                  />
                </Field>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label={qf.fields.email} required>
                  <input
                    type="email"
                    required
                    value={state.email}
                    onChange={(e) => set('email', e.target.value)}
                    placeholder={qf.placeholders.email}
                    className={inputCls}
                  />
                </Field>
                <Field label={qf.fields.phone}>
                  <input
                    type="tel"
                    value={state.phone}
                    onChange={(e) => set('phone', e.target.value)}
                    placeholder={qf.placeholders.phone}
                    className={inputCls}
                  />
                </Field>
              </div>
              <Field label={qf.fields.notes}>
                <textarea
                  rows={4}
                  value={state.notes}
                  onChange={(e) => set('notes', e.target.value)}
                  placeholder={qf.placeholders.notes}
                  className={`${inputCls} resize-none`}
                />
              </Field>

              {error && <p className="text-sm text-[#E8003D]">{error}</p>}

              <motion.button
                type="submit"
                disabled={submitting || !state.name || !state.email}
                whileHover={submitting ? {} : { scale: 1.01, boxShadow: '0 8px 40px rgba(245,94,0,0.35)' }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 px-6 text-white font-bold rounded-xl bg-gradient-to-br from-[#F55E00] to-[#E8003D] disabled:opacity-40 disabled:cursor-not-allowed text-sm tracking-wide"
              >
                {submitting ? qf.buttons.submitting : qf.buttons.submit}
              </motion.button>
              <p className="text-[11px] text-center text-[var(--c-border)]">{qf.footerNote}</p>
            </form>
          )}
        </motion.div>
      </AnimatePresence>

      {state.step < 4 && (
        <div className="mt-5 pt-5 border-t border-[var(--c-surface)] space-y-3 sm:space-y-0 sm:flex sm:items-center sm:justify-between">
          <motion.button
            type="button"
            onClick={next}
            disabled={!canNext}
            whileHover={canNext ? { scale: 1.02, boxShadow: '0 8px 32px rgba(245,94,0,0.45)' } : {}}
            whileTap={{ scale: 0.97 }}
            className={`w-full sm:w-auto px-7 py-3.5 text-sm font-bold rounded-xl transition-all duration-200 ${
              canNext
                ? 'text-white bg-gradient-to-br from-[#F55E00] to-[#E8003D] cursor-pointer'
                : 'text-[var(--c-muted)] bg-[var(--c-raised)] border border-[var(--c-border)] cursor-not-allowed'
            }`}
          >
            {qf.buttons.continue}
          </motion.button>
          <button
            type="button"
            onClick={back}
            disabled={state.step === 0}
            className="w-full sm:w-auto text-center text-sm font-medium text-[var(--c-muted)] hover:text-[var(--c-body)] transition-colors disabled:opacity-0"
          >
            {qf.buttons.back}
          </button>
        </div>
      )}
      {state.step === 4 && (
        <button
          type="button"
          onClick={back}
          className="mt-3 text-sm font-medium text-[var(--c-muted)] hover:text-[var(--c-body)] transition-colors"
        >
          {qf.buttons.back}
        </button>
      )}
    </div>
  )
}
