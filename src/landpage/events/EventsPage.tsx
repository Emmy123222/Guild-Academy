import { useTheme } from '../../theme/ThemeProvider'
import FAQ from '../FAQ'
import Q from '../../assets/landing/Bootcamp/Q.png'
import Q1 from '../../assets/landing/Rectangle 16 (1).png'
import Q2 from '../../assets/landing/Rectangle 16 (2).png'
import { getStoredEvents } from '../admin/storage'
import type { StoredEvent } from '../admin/storage'
import Ellipse from '../../assets/landing/Ellipse 10.png'

export type EventItem = {
  slug: string
  title: string
  date: string
  time: string
  location: string
  badge?: string
  cover: string
  excerpt: string
}

// Simple mock data; replace with real data source later
export const eventsStatic: EventItem[] = [
  {
    slug: 'web3-javascript-dev',
    title: 'Mastering Solidity for Beginner 3 days workshop event',
    date: 'Sat, Nov 16, 2025',
    time: '10:00am WAT',
    location: 'Online · Zoom',
    badge: 'Upcoming',
    cover: Q,
    excerpt:
      'Level up your skills in [key area] and connect with industry experts. Designed for [target audience, e.g., aspiring developers, UX enthusiasts].Guild Academy presents an interactive and beginner-friendly bootcamp designed to introduce students, tech enthusiasts, and aspiring developers to the core principles and practical skills of the decentralized web.'
  },
  {
    slug: 'solidity-beginner-workshop',
    title: 'Mastering Solidity for Beginners · 3 days workshop event',
    date: 'Fri–Sun, Dec 5–7, 2025',
    time: '12:00pm WAT',
    location: 'Hybrid · Lagos + Online',
    badge: 'Featured',
    cover: Q1,
    excerpt:
      'Dive into the fundamentals of Solidity, testing, and security practices with mini-projects and mentor support.'
  },
  {
    slug: 'blockchain-security-intro',
    title: 'Introduction to Blockchain Security',
    date: 'Thu, Nov 28, 2025',
    time: '4:00pm WAT',
    location: 'Online · Google Meet',
    badge: 'Free',
    cover: Q2,
    excerpt:
      'Threat models, common vulnerabilities, and audits—learn the mindset behind building secure protocols.'
  }
]

export function getAllEvents(): EventItem[] {
  // Stored events first, then defaults
  const stored: StoredEvent[] = getStoredEvents()
  return [...stored, ...eventsStatic]
}

export default function EventsPage() {
  const { isDark } = useTheme()

  return (
    <section className={`w-full ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className="mx-auto max-w-7xl px-6 py-10 sm:py-14">
        {/* Header */}
        <div className="text-center">
          <div className={`mb-2 inline-flex items-center gap-2 text-xs`}>
            <span className={`${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>🏠</span>
            <button type="button" onClick={() => (window.location.hash = '#/')} className={`${isDark ? 'text-neutral-400' : 'text-neutral-500'} underline-offset-2 hover:underline`}>
              Home
            </button>
            <span className={`${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>/</span>
            <span className={`${isDark ? 'text-white' : 'text-black'} font-medium`}>Events</span>
          </div>
          {/* Section pill */}
          <h1 className={`font-syne font-bold tracking-tight text-3xl sm:text-4xl md:text-5xl ${isDark ? 'text-white' : 'text-neutral-900'}`}>
            Event showcase
          </h1>
          <p className={`mx-auto mt-3 max-w-2xl text-sm sm:text-base ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
            Join workshops and community sessions hosted by Guild Academy. Learn, connect, and grow with fellow builders.
          </p>
        </div>
        {/* Accent divider */}
        <div className="mx-auto mt-6 h-1 w-12 rounded-full bg-green-600/80" />

        {/* Events list */}
        <div className="mt-8 grid grid-cols-1 gap-4">
          {getAllEvents().map((ev) => (
            <article
              key={ev.slug}
              className={`rounded-2xl border p-4 sm:p-5 ${isDark ? 'border-neutral-800 bg-black' : 'border-neutral-200 bg-white'} flex gap-4 shadow-sm hover:shadow transition-shadow`}
            >
              <div className="">
                <img src={ev.cover} alt={ev.title} className="w-[200px] h-[200px]" />
              </div>
              <div className="min-w-0 flex-1">
                {/* Top meta row */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-wide text-green-600">
                    {ev.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className={`mt-1 font-syne text-lg sm:text-xl font-bold ${isDark ? 'text-white' : 'text-neutral-900'}`}>{ev.title}</h3>

                {/* Excerpt */}
                <p className={`mt-1 text-xs sm:text-sm ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>{ev.excerpt}</p>

                {/* Location chip */}
                <div className="mt-2">
                  <span className={`inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-[11px] ${isDark ? 'bg-neutral-900 text-neutral-300 border border-neutral-800' : 'bg-neutral-100 text-neutral-700 border border-neutral-200'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5"><path d="M12 21s-6-5.373-6-10a6 6 0 1 1 12 0c0 4.627-6 10-6 10Z"/><circle cx="12" cy="11" r="2.5"/></svg>
                    {ev.location}
                  </span>
                </div>

                {/* Footer row: organizer + button */}
                <div className="mt-5 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <img src={Ellipse} alt="Guild Academy" className="h-6 w-6 rounded-full" />
                    <span className={`${isDark ? 'text-neutral-300' : 'text-neutral-700'} text-xs`}>Guild Academy</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => (window.location.hash = `#/events/${ev.slug}`)}
                    className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold shadow-sm ${
                      isDark ? 'bg-[#101010] border border-neutral-800 text-white hover:bg-[#141414]' : 'bg-white border border-neutral-200 text-neutral-800 hover:bg-neutral-50'
                    }`}
                  >
                    Event detail
                    <span aria-hidden>➜</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 sm:mt-16">
          <FAQ />
        </div>
      </div>
    </section>
  )
}
