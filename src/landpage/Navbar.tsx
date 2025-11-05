import { useTheme } from '../theme/ThemeProvider'
import { useState } from 'react'
import logo from '../assets/landing/Logo.png'
import Facebook from '../assets/landing/Facebook.png'
import Instagram from '../assets/landing/insta.png'
import LinkedIn from '../assets/landing/Linkdin.png'

const Logo = () => (
  <div className="flex items-center gap-2">
    <img src={logo} alt="Logo" />
    <span className="text-2xl font-bold text-black dark:text-white font-outfit">Guild Academy</span>
  </div>
)

const ThemeButton = ({ isDark, onToggle }: { isDark: boolean; onToggle: () => void }) => {
  return (
    <button
      type="button"
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      onClick={onToggle}
      className={
        `inline-flex h-10 w-10 items-center justify-center rounded-full border shadow-sm transition-colors ` +
        (isDark
          ? 'border-gray-800 bg-black text-white hover:bg-neutral-900'
          : 'border-gray-300 bg-white text-black hover:bg-gray-50')
      }
    >
      {isDark ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-5 w-5" aria-hidden>
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-5 w-5" aria-hidden>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      )}
    </button>
  )
}

const NavPill = ({ label, href = '#/' }: { label: string; href?: string }) => {
  const { isDark } = useTheme()
  const lightClasses =
    'rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 shadow-sm hover:text-gray-800'
  const darkClasses =
    'px-3 py-2 text-sm font-medium text-gray-300 hover:text-white'
  const handleClick = () => {
    const target = href.startsWith('#') ? href : `#${href}`
    window.location.hash = target
  }
  return (
    <button
      type="button"
      role="link"
      aria-label={label}
      onClick={handleClick}
      className={isDark ? darkClasses : lightClasses}
    >
      {label}
    </button>
  )
}

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const headerBg = isDark ? 'bg-black border-gray-800' : 'bg-white border-gray-100'
  return (
    <header className={`sticky inset-x-0 top-0 z-50 w-full border-b shadow-sm ${headerBg}`}>
      <div className="flex w-full items-center justify-between gap-4 px-6 py-4">
        <Logo />

        <nav className="hidden gap-2 md:flex">
          <NavPill label="Home" href="#/" />
          <NavPill label="Bootcamps" href="#/bootcamps" />
          <NavPill label="Testimonial" href="#/testimonials" />
          <NavPill label="Events" href="#/events" />
          <NavPill label="About us" href="#/about" />
        </nav>

        <div className="flex items-center gap-2">
          <ThemeButton isDark={isDark} onToggle={toggleTheme} />
          {/* Desktop CTA */}
          {isDark ? (
            <button
              type="button"
              onClick={() => (window.location.hash = '#/bootcamps')}
              className="hidden md:inline-flex items-center justify-center rounded-full border border-green-600 bg-white px-5 py-2 text-sm font-semibold text-green-600 shadow-sm transition-colors hover:bg-green-50"
            >
              Join Bootcamp
            </button>
          ) : (
            <button
              type="button"
              onClick={() => (window.location.hash = '#/bootcamps')}
              className="hidden md:inline-flex items-center justify-center rounded-full bg-green-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-green-500"
            >
             Join Bootcamp
            </button>
          )}

          {/* Mobile hamburger */}
          <button
            type="button"
            className={`md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border shadow-sm ${isDark ? 'border-neutral-800 text-white' : 'border-neutral-200 text-black'}`}
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            {/* Hamburger icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>
      </div>

      {/* Mobile overlay menu */}
      {open && (
        <div className={`fixed inset-0 z-50 ${isDark ? 'bg-black' : 'bg-white'} px-6 pb-6`}> 
          {/* Top bar */}
          <div className="flex items-center justify-between py-4">
            <Logo />
            <div className="flex items-center gap-2">
              <ThemeButton isDark={isDark} onToggle={toggleTheme} />
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className={`inline-flex h-10 w-10 items-center justify-center rounded-full border shadow-sm ${isDark ? 'border-neutral-800 text-white' : 'border-neutral-200 text-black'}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><path d="M6 6l12 12M18 6l-12 12"/></svg>
              </button>
            </div>
          </div>
          {/* Links */}
          <nav className="mt-4 space-y-6 text-lg">
            <button onClick={() => { window.location.hash = '#/'; setOpen(false) }} className={`block text-left ${isDark ? 'text-white' : 'text-black'} font-semibold`}>Home</button>
            <button onClick={() => { window.location.hash = '#/bootcamps'; setOpen(false) }} className={`block text-left ${isDark ? 'text-neutral-300' : 'text-neutral-800'}`}>Bootcamps</button>
            <button onClick={() => { window.location.hash = '#/testimonials'; setOpen(false) }} className={`block text-left ${isDark ? 'text-neutral-300' : 'text-neutral-800'}`}>Testimonial</button>
            <button onClick={() => { window.location.hash = '#/events'; setOpen(false) }} className={`block text-left ${isDark ? 'text-neutral-300' : 'text-neutral-800'}`}>Events</button>
            <button onClick={() => { window.location.hash = '#/about'; setOpen(false) }} className={`block text-left ${isDark ? 'text-neutral-300' : 'text-neutral-800'}`}>About us</button>
          </nav>

          {/* Bottom CTA and socials */}
          <div className="mt-[22vh] flex flex-col items-center gap-6">
            <button
              type="button"
              onClick={() => { window.location.hash = '#/bootcamps'; setOpen(false) }}
              className="inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-green-500"
            >
              Join Bootcamp
            </button>
            <div className="flex items-center gap-4">
              <button type="button" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-white">
                {/* mail icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><path d="M4 4h16v16H4z"/><path d="M22 6l-10 7L2 6"/></svg>
              </button>
              <img src={Facebook} alt="Facebook" className={`h-10 w-10 rounded-full ${isDark ? 'bg-neutral-800' : 'bg-neutral-100'} p-2`} />
              <img src={Instagram} alt="Instagram" className={`h-10 w-10 rounded-full ${isDark ? 'bg-neutral-800' : 'bg-neutral-100'} p-2`} />
              <img src={LinkedIn} alt="LinkedIn" className={`h-10 w-10 rounded-full ${isDark ? 'bg-neutral-800' : 'bg-neutral-100'} p-2`} />
            </div>
            <p className={`text-xs ${isDark ? 'text-neutral-500' : 'text-neutral-400'}`}>©{new Date().getFullYear()} Guild Academy. All right reserved</p>
          </div>
        </div>
      )}
    </header>
  )
}
