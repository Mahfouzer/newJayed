import { test, expect } from '@playwright/test'

/**
 * With Arabic UI, English blocks must use dir=ltr so periods and alignment stay correct.
 * Requires dev server and localStorage seed for 'lang' = 'ar' (set in page before goto).
 */
test.describe('LTR isolate for English copy (Arabic UI)', () => {
  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
      localStorage.setItem('lang', 'ar')
    })
  })

  test('work case study main has dir=ltr', async ({ page }) => {
    await page.goto('/work/quran-tutors', { waitUntil: 'networkidle' })
    const main = page.locator('main[dir="ltr"][lang="en"]')
    await expect(main).toBeVisible()
  })

  test('blog post prose has dir=ltr', async ({ page }) => {
    await page.goto('/blog/ai-model-avalanche-march-2026', { waitUntil: 'networkidle' })
    const prose = page.locator('.prose[dir="ltr"][lang="en"]')
    await expect(prose.first()).toBeVisible()
  })

  test('html document is rtl in Arabic', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' })
    await expect(page.locator('html')).toHaveAttribute('dir', 'rtl')
  })
})
