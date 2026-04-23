import type { Lang } from './i18n'
import { postMetaAr } from './postLocales.ar'

export type PostMeta = {
  slug: string
  title: string
  subtitle: string
  category: string
  author: string
  date: string
  readTime: string
  coverEmoji: string
}

export const postsMeta: PostMeta[] = [
  {
    slug: 'local-seo-bible-2026',
    title: 'The Local SEO Bible',
    subtitle: 'A Smart, Funny, Honest Guide to Actually Ranking in 2026',
    category: 'SEO',
    author: 'Jayed Studio',
    date: 'April 2026',
    readTime: '~45 min read',
    coverEmoji: '📍',
  },
  {
    slug: 'ai-model-avalanche-march-2026',
    title: 'The AI Model Avalanche Is Real - And Nobody Is Ready',
    subtitle:
      "Twelve major model releases in seven days. This isn't a product cycle anymore. It's a war.",
    category: 'AI',
    author: 'Jayed Studio',
    date: 'March 2026',
    readTime: '5 min read',
    coverEmoji: '🤖',
  },
  {
    slug: 'ai-race-infrastructure-not-models',
    title: "The Real AI Race Isn't About Models Anymore",
    subtitle:
      "SoftBank just lined up $40 billion for OpenAI. France's Mistral raised $830M for chips and data centers. The battlefield has moved from benchmarks to infrastructure.",
    category: 'AI',
    author: 'Jayed Studio',
    date: 'March 2026',
    readTime: '5 min read',
    coverEmoji: '🖥️',
  },
  {
    slug: 'agent-era-quietly-arrived',
    title: 'The Agent Era Has Quietly Arrived - Most Companies Missed the Memo',
    subtitle:
      'We spent years arguing about whether AI was "just autocomplete." Meanwhile, agentic AI moved from demos into production.',
    category: 'AI',
    author: 'Jayed Studio',
    date: 'March 2026',
    readTime: '6 min read',
    coverEmoji: '🧠',
  },
  {
    slug: 'apple-google-siri-gemini',
    title: 'Apple and Google Just Did Something Nobody Expected',
    subtitle:
      "The new Siri will run on Google's Gemini model. Privately, on Apple's cloud. This is either the strangest partnership in tech history, or the most inevitable.",
    category: 'Tech',
    author: 'Jayed Studio',
    date: 'March 2026',
    readTime: '5 min read',
    coverEmoji: '📱',
  },
  {
    slug: 'ai-politics-problem',
    title: "AI Has a Politics Problem - And It's Just Getting Started",
    subtitle:
      '$100 million in midterm lobbying. A cyberattack on the EU. Meta liability verdicts. The industry that spent a decade avoiding accountability is running out of runway.',
    category: 'Policy',
    author: 'Jayed Studio',
    date: 'March 2026',
    readTime: '6 min read',
    coverEmoji: '🏛️',
  },
  {
    slug: 'saudi-arabia-year-of-ai-2026',
    title: "Saudi Arabia Just Declared 2026 the Year of AI - Here's What That Actually Means",
    subtitle:
      "It's not a marketing slogan. The Kingdom has built the world's largest government data center, trained over 11,000 AI specialists, and committed $20 billion to infrastructure.",
    category: 'Gulf',
    author: 'Jayed Studio',
    date: 'March 2026',
    readTime: '6 min read',
    coverEmoji: '🏜️',
  },
  {
    slug: 'gulf-compute-diplomacy-data-centers',
    title:
      "The Gulf Just Turned Its Energy Surplus Into a Geopolitical Weapon - And It's Called Compute",
    subtitle:
      "Stargate UAE. Saudi Arabia's 6GW data center pipeline. Abu Dhabi's orbital data center pilot. The Gulf isn't just building AI infrastructure. It's rewriting how influence works.",
    category: 'Gulf',
    author: 'Jayed Studio',
    date: 'March 2026',
    readTime: '6 min read',
    coverEmoji: '🌐',
  },
  {
    slug: 'gulf-government-is-the-market',
    title: 'In the Gulf, the Government Is the Market',
    subtitle:
      "Public sector entities in Saudi Arabia and the UAE aren't just setting digital policy - they're the biggest buyers of technology in the region.",
    category: 'Gulf',
    author: 'Jayed Studio',
    date: 'March 2026',
    readTime: '5 min read',
    coverEmoji: '🏢',
  },
  {
    slug: 'gulf-data-sovereignty-hyperscalers',
    title: 'The Gulf Wants Its Own Stack - And Global Tech Giants Are Competing to Help Build It',
    subtitle:
      'Microsoft is in UAE and Kuwait. Google is in Qatar and Saudi. Oracle is in Abu Dhabi. AWS is in Bahrain. Every hyperscaler is racing to plant a flag.',
    category: 'Gulf',
    author: 'Jayed Studio',
    date: 'March 2026',
    readTime: '5 min read',
    coverEmoji: '🔒',
  },
  {
    slug: 'gulf-digital-transformation-business-opportunity',
    title:
      "The Gulf's Digital Transformation Isn't a Government Project Anymore - It's a Business Opportunity",
    subtitle:
      "Abu Dhabi's Hub71. Riyadh's Digital City. Dubai's tech zones. The infrastructure is built. The capital is committed. Now the region needs products, builders, and operators.",
    category: 'Gulf',
    author: 'Jayed Studio',
    date: 'March 2026',
    readTime: '6 min read',
    coverEmoji: '🚀',
  },
  {
    slug: 'seo-dying-ai-overviews-data',
    title: 'SEO Is Dying (Again) - This Time, The Numbers Back It Up',
    subtitle:
      "Google's AI Mode just hit 75 million daily users. Organic click-through rates have collapsed. The traffic you built your strategy around is no longer guaranteed.",
    category: 'SEO',
    author: 'Jayed Studio',
    date: 'March 2026',
    readTime: '6 min read',
    coverEmoji: '🔭',
  },
  {
    slug: 'google-ads-losing-manual-control',
    title: "Google Just Took Control of Your Paid Campaigns - And Most Advertisers Haven't Noticed",
    subtitle:
      'Paused keywords reactivating. Performance Max eating manual control. The era of granular campaign management is being replaced by an era of input quality.',
    category: 'Media Buying',
    author: 'Jayed Studio',
    date: 'March 2026',
    readTime: '5 min read',
    coverEmoji: '📈',
  },
  {
    slug: 'verification-converts-not-visibility',
    title: 'Visibility No Longer Converts. Verification Does.',
    subtitle:
      "Third-party proof signals - media mentions, authority backlinks, certifications - are now directly influencing conversion rates. If you can't be verified, you can't be trusted.",
    category: 'Marketing',
    author: 'Jayed Studio',
    date: 'March 2026',
    readTime: '5 min read',
    coverEmoji: '✅',
  },
  {
    slug: 'linkedin-seo-channel-2026',
    title: 'LinkedIn Has Accidentally Become One of the Most Powerful SEO Channels of 2026',
    subtitle:
      "AI systems are mining LinkedIn for credible, current answers - especially in B2B. If your team isn't publishing there, you're invisible in the conversations your buyers are having.",
    category: 'SEO',
    author: 'Jayed Studio',
    date: 'March 2026',
    readTime: '5 min read',
    coverEmoji: '💼',
  },
  {
    slug: 'ctv-streaming-performance-channels-2026',
    title: 'Streaming and CTV Are Now Performance Channels. Your Media Plan Needs to Catch Up.',
    subtitle:
      'The 2026 NewFronts moved to March for a reason. Video and streaming inventory is now bought and measured like performance media.',
    category: 'Media Buying',
    author: 'Jayed Studio',
    date: 'March 2026',
    readTime: '5 min read',
    coverEmoji: '📺',
  },
  {
    slug: 'why-we-dont-do-discovery-calls',
    title: "Why we don't do discovery calls",
    subtitle: 'Most agencies use discovery calls to qualify you. We just send a quote.',
    category: 'Studio',
    author: 'Jayed Studio',
    date: 'February 2026',
    readTime: '4 min read',
    coverEmoji: '⚡',
  },
  {
    slug: 'building-for-the-gulf',
    title: 'Building for the Gulf: what Western agencies get wrong',
    subtitle: "A market that moves fast, buys on trust, and won't wait for your sprint cycle.",
    category: 'Markets',
    author: 'Jayed Studio',
    date: 'January 2026',
    readTime: '5 min read',
    coverEmoji: '🌍',
  },
  {
    slug: 'the-stack-we-use-and-why',
    title: 'The stack we use and why',
    subtitle: "TanStack Start, React, TypeScript. Not because it's trendy - because it ships.",
    category: 'Engineering',
    author: 'Jayed Studio',
    date: 'December 2025',
    readTime: '6 min read',
    coverEmoji: '⚙️',
  },
]

export function getPostMeta(slug: string): PostMeta | undefined {
  return postsMeta.find((p) => p.slug === slug)
}

/** Card / hero metadata (title, subtitle, category, readTime) for the current UI language. */
export function getPostMetaForLang(
  post: PostMeta,
  lang: Lang
): Pick<PostMeta, 'title' | 'subtitle' | 'category' | 'readTime'> {
  if (lang !== 'ar') {
    return {
      title: post.title,
      subtitle: post.subtitle,
      category: post.category,
      readTime: post.readTime,
    }
  }
  const ar = postMetaAr[post.slug]
  if (!ar) {
    return {
      title: post.title,
      subtitle: post.subtitle,
      category: post.category,
      readTime: post.readTime,
    }
  }
  return { ...ar }
}

/** True when Arabic card copy exists for this post (skip LtrIsolate on cards). */
export function hasArPostMeta(slug: string): boolean {
  return Boolean(postMetaAr[slug])
}

