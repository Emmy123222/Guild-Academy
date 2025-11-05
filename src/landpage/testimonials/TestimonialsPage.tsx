import { useTheme } from '../../theme/ThemeProvider'
import Testimonials from '../Testimonials'
import FAQ from '../FAQ'

export default function TestimonialsPage() {
  const { isDark } = useTheme()

  return (
    <section className={`w-full ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className="mx-auto max-w-7xl px-6 py-10 sm:py-14">
        {/* Header */}
        <div className="text-center">
          {/* Breadcrumb */}
          <div className={`mb-2 inline-flex items-center gap-2 text-xs`}>
            <span className={`${isDark ? 'text-neutral-400' : 'text-neutral-500'}`} aria-hidden>🏠</span>
            <button
              type="button"
              onClick={() => (window.location.hash = '#/')}
              className={`${isDark ? 'text-neutral-400' : 'text-neutral-500'} underline-offset-2 hover:underline`}
            >
              Home
            </button>
            <span className={`${isDark ? 'text-neutral-400' : 'text-neutral-500'}`} aria-hidden>/</span>
            <span className={`${isDark ? 'text-white' : 'text-black'} font-medium`}>Testimonial</span>
          </div>

          <h1 className={`font-syne font-bold tracking-tight text-3xl sm:text-4xl md:text-5xl ${isDark ? 'text-white' : 'text-neutral-900'}`}>
            Student success stories
          </h1>
          <p className={`mx-auto mt-3 max-w-2xl text-sm sm:text-base ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
            Hear directly from our students as they share their personal experiences, growth, and success stories. These
            testimonials reflect the real impact of our programs and the value they've gained from their journey with us.
          </p>
        </div>

        {/* Testimonials list (reuse component) */}
        <div className="mt-8 sm:mt-10">
          <Testimonials />
        </div>

        {/* FAQ inline to match design */}
        <div className="mt-12 sm:mt-16">
          <FAQ />
        </div>
      </div>
    </section>
  )
}
