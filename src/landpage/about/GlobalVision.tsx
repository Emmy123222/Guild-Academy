import { useTheme } from '../../theme/ThemeProvider'

export default function GlobalVision() {
  const { isDark } = useTheme()

  return (
    <section aria-labelledby="global-vision" className={`${isDark ? 'bg-green-800' : 'bg-green-600'} relative`}> 
      <div className="mx-auto max-w-7xl px-6 py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] items-center gap-8 md:gap-12">
          {/* Left copy */}
          <div className="space-y-3">
            <h2 id="global-vision" className="font-syne text-white text-3xl sm:text-4xl font-extrabold">Our Global Vision</h2>
            <p className={`${isDark ? 'text-white/85' : 'text-white/90'} max-w-xl text-sm sm:text-base`}>
              At Guild Academy, learning is not just about watching videos or memorizing slides — it’s a journey that’s
              structured, supportive, and full of momentum.
            </p>
          </div>

          {/* Right stat cards */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { value: '2 million', label: 'Web3 Devs Trained' },
              { value: '2 million', label: 'Developers Hired' },
              { value: '$15 billion', label: 'Industry Opportunity' },
            ].map((s, i) => (
              <div key={i} className={`${isDark ? 'bg-white' : 'bg-white'} rounded-xl p-4 text-center shadow-sm`}>
                <p className="text-green-700 font-bold text-sm sm:text-base">{s.value}</p>
                <p className="text-gray-600 text-xs sm:text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
