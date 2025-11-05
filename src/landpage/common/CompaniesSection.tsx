import { useTheme } from '../../theme/ThemeProvider'

export type CompanyLogo = { src: string; alt: string }

export default function CompaniesSection({
  title = 'Companies our student work for',
  subtitle = "At Guild Academy, learning is not just about watching videos or memorizing slides — it’s a journey that’s structured, supportive, and full of momentum.",
  logos,
}: {
  title?: string
  subtitle?: string
  logos: CompanyLogo[]
}) {
  const { isDark } = useTheme()

  return (
    <section className={`${isDark ? 'bg-[#07150F]' : 'bg-[#F4FBF7]'} py-10 sm:py-14`}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className={`font-syne text-2xl sm:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{title}</h2>
          <p className={`mt-2 max-w-3xl mx-auto ${isDark ? 'text-neutral-300' : 'text-neutral-600'} text-sm sm:text-base`}>{subtitle}</p>
        </div>

        {/* Two rows of logos */}
        <div className="mt-8 space-y-4">
          {[0, 1].map((row) => (
            <div key={row} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
              {logos.map((logo, i) => (
                <div key={`${row}-${i}`} className={`${isDark ? 'bg-black border-neutral-800' : 'bg-white border-neutral-200'} rounded-xl border p-4 flex items-center justify-center`}>
                  <img src={logo.src} alt={logo.alt} className="max-h-8 sm:max-h-10 w-auto opacity-90" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
