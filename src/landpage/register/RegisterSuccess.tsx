import { useTheme } from '../../theme/ThemeProvider'
import logo from '../../assets/landing/Logo.png'

export default function RegisterSuccess() {
  const { isDark } = useTheme()

  const cardBg = isDark ? 'bg-[#0e0e0e] border-neutral-800' : 'bg-white border-neutral-200'
  const subText = isDark ? 'text-neutral-300' : 'text-neutral-600'

  return (
    <section className={`w-full ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className="mx-auto max-w-3xl px-6 py-14 sm:py-20 text-center">
        {/* Top brand (since Navbar is global, this is optional, but shown in design) */}
        <div className="mb-8 flex items-center justify-center gap-2">
          <img src={logo} alt="Guild Academy" className="h-6 w-auto" />
          <span className={`font-outfit text-lg font-semibold ${isDark ? 'text-white' : 'text-black'}`}>Guild Academy</span>
        </div>

        {/* Card */}
        <div className={`mx-auto w-full rounded-2xl border ${cardBg} p-8 sm:p-10 shadow-sm`}> 
          {/* Badge */}
          <div className="mx-auto -mt-14 mb-6 h-16 w-16 rounded-full bg-green-600 text-white shadow-sm flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-8 w-8">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>

          <h1 className={`font-syne text-2xl sm:text-3xl font-bold ${isDark ? 'text-white' : 'text-neutral-900'}`}>
            Congratulations! 🎉 You’ve
            <br />
            successfully registered for our
            <br />
            bootcamp.
          </h1>
          <p className={`mt-4 text-sm sm:text-base ${subText}`}>
            Check your email for the Telegram group link to stay updated on
            announcements, resources, and the official bootcamp start date.
            We’re excited to have you join the journey!
          </p>
        </div>

        {/* Actions */}
        <div className="mx-auto mt-6 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => (window.location.hash = '#/')}
            className="inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-green-500"
          >
            Back to Homepage
            <span aria-hidden>➜</span>
          </button>
          <button
            type="button"
            onClick={() => (window.location.hash = '#/bootcamps')}
            className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold shadow-sm ${
              isDark
                ? 'bg-[#141414] text-white border border-neutral-800 hover:bg-[#171717]'
                : 'bg-white text-neutral-700 border border-neutral-200 hover:bg-neutral-50'
            }`}
          >
            Back to Bootcamp
            <span aria-hidden>➜</span>
          </button>
        </div>
      </div>
    </section>
  )
}
