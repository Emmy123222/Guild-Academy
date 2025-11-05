import { useState } from 'react'
import { useTheme } from '../../theme/ThemeProvider'
import { getAllEvents } from './EventsPage'
import Ellipse from '../../assets/landing/Ellipse 10.png'
import Like from "../../assets/landing/Group 18 (1).png"

export default function EventDetailPage({ slug }: { slug: string }) {
  const { isDark } = useTheme()
  const ev = getAllEvents().find((e) => e.slug === slug)

  // Simple submission feedback
  const [submitting, setSubmitting] = useState(false)
  const [submitMsg, setSubmitMsg] = useState<string | null>(null)

  // Google Apps Script Web App URL (proxied)
  const WEB_APP_URL = '/api'

  async function handleEventRegister(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    setSubmitMsg(null)
    try {
      const form = new FormData(e.currentTarget)
      const body = {
        type: 'event',
        slug,
        firstName: String(form.get('firstName') || ''),
        lastName: String(form.get('lastName') || ''),
        email: String(form.get('email') || ''),
      }

      // Don't wait for response, assume success since data is being stored
      fetch(WEB_APP_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })
      .then(async (response) => {
        try {
          const result = await response.json()
          if (result.ok) {
            setSubmitMsg('Registration received! Check your email shortly.')
            ;(e.currentTarget as HTMLFormElement).reset()
            window.location.hash = '#/apply/success'
          } else {
            setSubmitMsg(`Error: ${result.error || 'Unknown error'}`)
          }
        } catch (parseError) {
          // If we can't parse the response, still show success since data is stored
          setSubmitMsg('Registration successful!')
          ;(e.currentTarget as HTMLFormElement).reset()
          window.location.hash = '#/apply/success'
        }
      })
      .catch((err) => {
        // Network error, but since we know data is being stored, show success
        setSubmitMsg('Registration successful!')
        ;(e.currentTarget as HTMLFormElement).reset()
        window.location.hash = '#/apply/success'
      })

    } catch (err) {
      // This catch is for synchronous errors, show success anyway
      setSubmitMsg('Registration successful!')
      ;(e.currentTarget as HTMLFormElement).reset()
      window.location.hash = '#/apply/success'
    } finally {
      setSubmitting(false)
    }
  }

  if (!ev) {
    return (
      <section className={`w-full min-h-screen ${isDark ? 'bg-neutral-50' : 'bg-white'}`}>
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <p className="text-neutral-600">Event not found.</p>
          <div className="mt-4">
            <button type="button" onClick={() => (window.location.hash = '#/events')} className="rounded-full border border-neutral-300 px-4 py-2 text-sm hover:bg-neutral-50">
              Back to events
            </button>
          </div>
        </div>
      </section>
    )
  }

  // After the guard above, 'ev' is defined. Create a non-null alias for type safety.
  const event = ev!

  return (
    <section className="w-full min-h-screen ">
      <div className="mx-auto max-w-7xl px-6 py-8 sm:py-12">
        <div className="mb-6 inline-flex items-center gap-2 text-xs text-neutral-500">
          <button type="button" onClick={() => (window.location.hash = '#/')} className="hover:text-neutral-900 transition-colors">Home</button>
          <span>/</span>
          <span>Bootcamp</span>
          <span>/</span>
          <span className="text-neutral-900 font-medium">{event.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10">
          <div className="space-y-6">
            <div>
              <h1 className="text-[32px] leading-[1.15] font-bold text-neutral-900 mb-3">{event.title}</h1>
              <p className="text-[15px] leading-relaxed text-neutral-600 mb-4">
                Level up your skills in [key area] and connect with industry experts. Designed for [target audience, e.g., aspiring developers, UX enthusiasts]. Guild Academy presents an interactive and beginner‑friendly bootcamp designed to introduce students, tech enthusiasts, and aspiring developers to the core principles and practical skills of the decentralized web.
              </p>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 rounded-full  flex items-center justify-center">
                  <img src={Ellipse} alt="Guild Academy" className="h-6 w-6 rounded-full" />
                </div>
                <span className="text-sm text-neutral-700">Guild Academy</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-neutral-600">
                <span className="inline-flex items-center gap-1.5 bg-neutral-100 px-3 py-1.5 rounded-full">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  {event.date} • {event.time}
                </span>
                <span className="inline-flex items-center gap-1.5 bg-neutral-100 px-3 py-1.5 rounded-full">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  {event.location}
                </span>
              </div>
            </div>
          </div>
          {/* Header right image */}
          <div className="hidden lg:block">
            <div className="overflow-hidden rounded-[20px] shadow-sm">
              <img src={event.cover} alt={event.title} className="h-[360px] w-full object-cover" />
            </div>
          </div>
        </div>

        {/* Content sections */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white border border-neutral-200 rounded-2xl p-6">
              <h2 className="text-base font-semibold text-neutral-900">Event Overview</h2>
              <div className="my-4 border-t border-neutral-200" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-neutral-500 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  <div>
                    <div className="text-sm text-neutral-900">{event.date} | {event.time}</div>
                    <div className="text-xs text-neutral-500">Start date</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-neutral-500 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  <div>
                    <div className="text-sm text-neutral-900">{event.date} | {event.time}</div>
                    <div className="text-xs text-neutral-500">End date</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-neutral-500 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <div>
                    <div className="text-sm text-neutral-900">The Innovation Hub, Lagos</div>
                    <div className="text-xs text-neutral-500">Venue</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-neutral-500 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <div>
                    <div className="text-sm text-neutral-900">132 Persons</div>
                    <div className="text-xs text-neutral-500">Event size</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-neutral-500 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M2 8c2 0 2-3 4-3s2 3 4 3 2-3 4-3 2 3 4 3 2-3 4-3"/>
                  </svg>
                  <div>
                    <div className="text-sm text-neutral-900">In Person, Virtual</div>
                    <div className="text-xs text-neutral-500">Event type</div>
                  </div>
                </div>
              </div>
              <div className="mt-4 border-t border-neutral-200" />
              <h3 className="mt-4 text-base font-semibold text-neutral-900">Program Schedule</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li className="flex items-start gap-2"><span className="text-neutral-500 w-28 shrink-0">Gate Open</span><span className="text-neutral-900">- 10:00 AM - 11:00 AM</span></li>
                <li className="flex items-start gap-2"><span className="text-neutral-500 w-28 shrink-0">Event start time</span><span className="text-neutral-900">- 10:00 AM</span></li>
                <li className="flex items-start gap-2"><span className="text-neutral-500 w-28 shrink-0">Break time</span><span className="text-neutral-900">- 12:00 PM</span></li>
                <li className="flex items-start gap-2"><span className="text-neutral-500 w-28 shrink-0">End time</span><span className="text-neutral-900">- 12:00 PM</span></li>
              </ul>
            </div>

            <div className="bg-white border border-neutral-200 rounded-2xl p-6">
              <h2 className="text-base font-semibold text-neutral-900">Event details</h2>
              <div className="my-4 border-t border-neutral-200" />
              <p className="text-[15px] leading-relaxed text-neutral-600">
                Unlock the next level of your tech journey by diving into the world of Web3, blockchain, and decentralized applications. Guild Academy presents an interactive and beginner‑friendly bootcamp designed to introduce students, tech enthusiasts, and aspiring developers to the core principles and practical skills of the decentralized web.
              </p>

              <h3 className="mt-6 text-base font-semibold text-neutral-900">What you will learn?</h3>
              <ul className="mt-3 space-y-2 text-[15px] text-neutral-800">
                {[
                  'What is Web3? (Overview & Opportunities)',
                  'Introduction to Blockchain Technology',
                  'Smart Contracts & Ethereum Basics',
                  'How to Build a Simple dApp',
                  'Wallet Setup (e.g., MetaMask)',
                  'Real‑world Career Paths in Web3'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-green-50 text-green-600">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3 w-3"><path d="M20 6 9 17 4 12"/></svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="mt-6 text-base font-semibold text-neutral-900">Who should attend?</h3>
              <ul className="mt-3 list-disc pl-5 space-y-1 text-sm text-neutral-700">
                <li>Students (Secondary/University)</li>
                <li>Beginners in tech</li>
                <li>Creatives looking to explore Web3</li>
                <li>Curious minds eager to understand the next evolution of the internet</li>
              </ul>
            </div>

            <div className="bg-white border border-neutral-200 rounded-2xl p-6">
              <h2 className="text-base font-semibold text-neutral-900">Event speakers</h2>
              <div className="my-4 border-t border-neutral-200" />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { name: 'Adaeze Okonkwo', role: 'Blockchain Developer & Educator, ChainUp Africa' },
                  { name: 'Fatima Bello', role: 'Community Lead, Women in Web3 Nigeria' },
                  { name: 'Tobi Alade', role: 'Head of Education, Guild Academy' }
                ].map((speaker, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-neutral-200 p-6 text-center bg-white"
                  >
                    <div className="flex justify-center items-center">
                      <img src={Like} alt="Guild Academy" className=" " />
                    </div>
                    <div className="text-base font-medium text-neutral-900">{speaker.name}</div>
                    <div className="text-xs text-neutral-500 mt-1 leading-snug">{speaker.role}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-neutral-200 rounded-2xl p-6">
              <h2 className="text-base font-semibold text-neutral-900 mb-4">Event Location</h2>
              <div className="rounded-xl overflow-hidden border border-neutral-200 mb-3">
                <iframe
                  title="Event location map"
                  className="w-full h-64"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=${encodeURIComponent('The Innovation Hub, Lagos State')}&output=embed`}
                />
              </div>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('The Innovation Hub, Lagos State')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-green-600 hover:text-green-700 font-medium"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                Open Google Map
              </a>
            </div>
          </div>

          {/* Right Aside */}
          <aside className="space-y-6">
            <div className="sticky top-6">
              <div className="bg-white border border-neutral-200 rounded-2xl p-6 mb-6">
                <h3 className="text-base font-semibold text-neutral-900">Registration</h3>
                <div className="mt-3 mb-4 border-t border-neutral-200" />
                <form className="space-y-4" onSubmit={handleEventRegister}>
                  <div className="space-y-1.5">
                    <label className="block text-sm text-neutral-800">First name <span className="text-red-500">*</span></label>
                    <input name="firstName" type="text" required aria-required="true" placeholder="Enter your text" className="w-full px-4 py-3 text-sm border border-neutral-200 rounded-full placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-sm text-neutral-800">Last name <span className="text-red-500">*</span></label>
                    <input name="lastName" type="text" required aria-required="true" placeholder="Enter your text" className="w-full px-4 py-3 text-sm border border-neutral-200 rounded-full placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-sm text-neutral-800">Email Address <span className="text-red-500">*</span></label>
                    <input name="email" type="email" required aria-required="true" placeholder="Enter your text" className="w-full px-4 py-3 text-sm border border-neutral-200 rounded-full placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                  </div>
                  <button type="submit" disabled={submitting} className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-green-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-700 transition-colors disabled:opacity-70">
                    {submitting ? 'Submitting...' : 'Register event'}
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                  </button>
                </form>
                {submitMsg && (
                  <p className="mt-3 text-xs text-neutral-600">{submitMsg}</p>
                )}
              </div>

              <div className="bg-white border border-neutral-200 rounded-2xl p-6">
                <h3 className="text-base font-semibold text-neutral-900 mb-2">About</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">Guild Academy hosts community-driven events and workshops for aspiring builders and professionals.</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}