import { useTheme } from '../theme/ThemeProvider'
import { useState } from 'react'
import { getStoredPrograms } from './admin/storage'
import type { StoredProgram } from './admin/storage'
import hand from '../assets/landing/hand.png'
import comingSoon from '../assets/landing/Coming Soon.png'
import hand1 from '../assets/landing/hand1.png'
import hand2 from '../assets/landing/hand2.png'
import hand3 from '../assets/landing/hand3.png'
import Check from '../assets/landing/check-badge_svgrepo.com.png'

export type Program = {
  title: string
  blurb: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  mode: 'Hybrid' | 'Onsite' | 'Remote'
  duration: string
  lessons: number
  starts: string
  image: string
  category: 'Web2' | 'Web3'
  slug: string
}

export const programsStatic: Program[] = [
  {
    title: 'Product Design Bootcamp',
    blurb:
      'Master the art of writing efficient, secure, and scalable smart contracts. Dive into Solidity, auditing methods, gas optimization, and real-world case studies to prevent exploits and safeguard users.',
    level: 'Beginner',
    mode: 'Hybrid',
    duration: '12 weeks',
    lessons: 36,
    starts: 'Nov 4, 2025',
    image: hand,
    category: 'Web2',
    slug: 'product-design'
  },
  {
    title: 'Smart Contract Development & Auditing',
    blurb:
      'Master the art of writing efficient, secure, and scalable smart contracts. Dive into Solidity, auditing methods, gas optimization, and real-world case studies to prevent exploits and safeguard users.',
    level: 'Intermediate',
    mode: 'Hybrid',
    duration: '14 weeks',
    lessons: 40,
    starts: 'Nov 18, 2025',
    image: hand1,
    category: 'Web3',
    slug: 'smart-contract-auditing'
  },
  {
    title: 'Web3 Protocol Engineering',
    blurb:
      'Master the art of writing efficient, secure, and scalable smart contracts. Dive into Solidity, auditing methods, gas optimization, and real-world case studies to prevent exploits and safeguard users.',
    level: 'Advanced',
    mode: 'Hybrid',
    duration: '16 weeks',
    lessons: 48,
    starts: 'Dec 2, 2025',
    image: hand2,
    category: 'Web3',
    slug: 'web3-protocol-engineering'
  },
  {
    title: 'Blockchain Security',
    blurb:
      'Master the art of writing efficient, secure, and scalable smart contracts. Dive into Solidity, auditing methods, gas optimization, and real-world case studies to prevent exploits and safeguard users.',
    level: 'Advanced',
    mode: 'Hybrid',
    duration: '12 weeks',
    lessons: 36,
    starts: 'Jan 6, 2026',
    image: hand3,
    category: 'Web3',
    slug: 'blockchain-security'
  }
]

export function getAllPrograms(): Program[] {
  const stored: StoredProgram[] = getStoredPrograms()
  return [...stored, ...programsStatic]
}

// Removed Badge helper (unused after redesign)

export default function Bootcamps() {
  const { isDark } = useTheme()
  const [filter, setFilter] = useState<'All' | 'Web2' | 'Web3'>('All')

  const filteredPrograms = getAllPrograms().filter((p) => filter === 'All' || p.category === filter)

  return (
    <section id="bootcamps" className={`w-full ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
        {/* Breadcrumb + Header */}
        <div className="text-center space-y-3">
          <nav aria-label="Breadcrumb" className={`mx-auto mb-1 flex items-center justify-center gap-2 text-xs`}>
            <a
              href="#/"
              className={`${isDark ? 'text-neutral-400 hover:text-neutral-200' : 'text-neutral-500 hover:text-gray-700'} underline-offset-2 hover:underline`}
            >
              Home
            </a>
            <span className={`${isDark ? 'text-neutral-600' : 'text-neutral-400'}`}>/</span>
            <a
              href="#/bootcamps"
              aria-current="page"
              className={`${isDark ? 'text-white' : 'text-black'} underline-offset-2 hover:underline`}
            >
              Bootcamp
            </a>
          </nav>
          <h1 className={`font-syne font-bold tracking-tight ${isDark ? 'text-white' : 'text-gray-900'} text-3xl sm:text-4xl md:text-5xl`}>
            Bootcamp program
          </h1>
          <p className={`${isDark ? 'text-neutral-300' : 'text-neutral-600'} text-sm sm:text-base max-w-2xl mx-auto`}>
            Learn about the vital skills you'll master during our bootcamps. Our tailored programs move from basics
            through to advanced techniques.
          </p>
        </div>

        {/* Filters (pill group) */}
        <div className="mt-6 flex justify-start">
          <div className={`flex items-center gap-2 rounded-full border px-2 py-1.5 shadow-sm ${isDark ? 'border-neutral-800 bg-black' : 'border-neutral-200 bg-white'}`}>
            <button
              type="button"
              onClick={() => setFilter('All')}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold shadow-sm ${
                filter === 'All'
                  ? 'bg-green-600 text-white'
                  : `${isDark ? 'text-neutral-300 hover:text-white border border-neutral-700' : 'text-gray-600 hover:text-gray-800 border border-neutral-200'} bg-transparent`
              }`}
            >
              All Programs
            </button>
            <button
              type="button"
              onClick={() => setFilter('Web2')}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                filter === 'Web2'
                  ? 'bg-green-600 text-white'
                  : `${isDark ? 'text-neutral-300 hover:text-white border border-neutral-700' : 'text-gray-600 hover:text-gray-800 border border-neutral-200'} bg-transparent`
              }`}
            >
              Web2
            </button>
            <button
              type="button"
              onClick={() => setFilter('Web3')}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                filter === 'Web3'
                  ? 'bg-green-600 text-white'
                  : `${isDark ? 'text-neutral-300 hover:text-white border border-neutral-700' : 'text-gray-600 hover:text-gray-800 border border-neutral-200'} bg-transparent`
              }`}
            >
              Web3
            </button>
          </div>
        </div>

        <div className="mt-8 space-y-6">
          {filteredPrograms.map((p, idx) => (
            <div
              key={idx}
              className={`relative grid grid-cols-1 md:grid-cols-[1fr_300px] items-stretch gap-10 md:gap-20 lg:gap-24 rounded-3xl border transition-shadow ${
                isDark ? 'border-neutral-800 bg-transparent hover:shadow-[0_8px_24px_rgba(0,0,0,0.25)]' : 'border-neutral-200 bg-white hover:shadow-lg/10'
              } p-4 sm:p-6 shadow-sm`}
            >
              {idx === 0 && (
                <div className="absolute -top-3 left-4 z-[1]">
                  <img src={comingSoon} alt="Coming Soon" className="h-8 w-auto rounded-md shadow-sm" />
                </div>
              )}
              <div className="space-y-3 pr-0 md:pr-10 lg:pr-14">
                <div className="h-2" />
                <h3 className={`font-syne text-xl sm:text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {p.title}
                </h3>
               
                <p className={`${isDark ? 'text-neutral-300' : 'text-neutral-600'} text-sm sm:text-base`}>{p.blurb}</p>

                <div className="mt-4">
                <div className="">
                      <span className="inline-flex items-center font-syne gap-1 rounded-t-lg bg-black md:bg-green-600 px-3 py-1 text-xs font-semibold text-white shadow-sm h-[35px]">
                        Benefit & Features
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 1 1-1.414-1.414L13.586 11H4a1 1 0 1 1 0-2h9.586l-3.293-3.293a1 1 0 0 1 0-1.414Z" clipRule="evenodd"/></svg>
                      </span>
                    </div>
                    <div
  className={`relative rounded-2xl p-4 pt-7
    ${isDark 
      ? 'border border-neutral-700 bg-transparent'   // Dark mode → only gray border, no bg
      : 'border border-black bg-black md:border-green-100 md:bg-green-50' // Light mode → your original style
    }`}
>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-syne font-bold">
    <ul
      className={`space-y-2 text-sm text-white ${
        isDark ? 'md:text-neutral-200' : 'md:text-gray-800'
      }`}
    >
      <li className="flex items-center gap-2">
        <span className="inline-flex h-5 w-5 items-center justify-center">
          <img src={Check} alt="Check" />
        </span>
        {p.lessons} lessons
      </li>
      <li className="flex items-center gap-2">
        <span className="inline-flex h-5 w-5 items-center justify-center">
          <img src={Check} alt="Check" />
        </span>
        Certification on completion
      </li>
      <li className="flex items-center gap-2">
        <span className="inline-flex h-5 w-5 items-center justify-center">
          <img src={Check} alt="Check" />
        </span>
        Hands-on projects
      </li>
      <li className="flex items-center gap-2">
        <span className="inline-flex h-5 w-5 items-center justify-center">
          <img src={Check} alt="Check" />
        </span>
        Community sessions
      </li>
    </ul>

    <ul
      className={`space-y-2 text-sm text-white ${
        isDark ? 'md:text-neutral-200' : 'md:text-gray-800'
      }`}
    >
      <li className="flex items-center gap-2">
        <span className="inline-flex h-5 w-5 items-center justify-center">
          <img src={Check} alt="Check" />
        </span>
        Industry mentorship
      </li>
      <li className="flex items-center gap-2">
        <span className="inline-flex h-5 w-5 items-center justify-center">
          <img src={Check} alt="Check" />
        </span>
        Next cohort: {p.starts}
      </li>
    </ul>
  </div>
</div>

                </div>

                <div className={`mt-2 border-t ${isDark ? 'border-neutral-800' : 'border-neutral-100'} pt-3`}>
                  <button
                    type="button"
                    onClick={() => (window.location.hash = `#/bootcamps/${p.slug}`)}
                    className={`inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold shadow-sm transition-colors ${
                      isDark
                        ? 'bg-white text-green-700 hover:bg-green-50 border border-green-200'
                        : 'bg-white text-gray-700 hover:bg-gray-50 border border-neutral-200'
                    }`}
                  >
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 1 1-1.414-1.414L13.586 11H4a1 1 0 1 1 0-2h9.586l-3.293-3.293a1 1 0 0 1 0-1.414Z" clipRule="evenodd"/></svg>
                  </button>
                </div>
              </div>

              {/* Right image */}
              <div className="hidden md:flex items-center justify-end">
                  <div className="overflow-hidden rounded-[32px] w-full aspect-square max-w-[300px]">
                    <img src={p.image} alt={p.title} className="" />
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
