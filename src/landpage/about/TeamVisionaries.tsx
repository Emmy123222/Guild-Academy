import { useTheme } from '../../theme/ThemeProvider'
import man1 from '../../assets/landing/Rectangle 23 (5).png'
import man2 from '../../assets/landing/Rectangle 23 (6).png'
import man3 from '../../assets/landing/Rectangle 23 (7).png'
import man4 from '../../assets/landing/Rectangle 23 (8).png'

export default function TeamVisionaries() {
  const { isDark } = useTheme()
  const heading = isDark ? 'text-white' : 'text-gray-900'
  const muted = isDark ? 'text-neutral-300' : 'text-neutral-600'
  const cardBg = isDark ? 'bg-neutral-900' : 'bg-neutral-50'

  const team = [
    { img: man1, name: 'David David', role: 'Founder & CEO' },
    { img: man2, name: 'Oluwaseun Tosin', role: 'CTO' },
    { img: man3, name: 'Alima Salimat', role: 'Product Manager' },
    { img: man4, name: 'David David', role: 'Team Lead' },
  ]

  return (
    <section aria-labelledby="team-visionaries" className="py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wide text-green-700 dark:text-green-400">
            <span className="inline-flex h-2.5 w-2.5 rotate-45 rounded-[2px] bg-green-600" />
            <span className="uppercase">Team members</span>
          </div>
          <h2 id="team-visionaries" className={`mt-2 font-syne ${heading} text-3xl sm:text-4xl font-extrabold`}>Meet our visionaries</h2>
          <p className={`mt-2 ${muted} max-w-2xl mx-auto text-sm sm:text-base`}>
            At Guild Academy, learning is not just about watching videos or memorizing slides — it’s a journey that’s
            structured, supportive, and full of momentum.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((m, i) => (
            <div key={i} className={`rounded-2xl ${cardBg} p-3`}> 
              <div className="rounded-xl overflow-hidden">
                <img src={m.img} alt="team member" className="w-full" />
              </div>
              <div className="mt-3">
                <p className={`${heading} text-sm font-semibold`}>{m.name}</p>
                <p className={`${muted} text-xs`}>{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
