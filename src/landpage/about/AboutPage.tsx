import { useTheme } from '../../theme/ThemeProvider'
import GlobalVision from './GlobalVision'
import TeamVisionaries from './TeamVisionaries'
import CompaniesSection from '../common/CompaniesSection'
import PartnerCompanies from '../PartnerCompanies'
import Stocktwits from '../../assets/landing/Bootcamp/Stocktwits_Logo_0 (1).png'
import Envestnet from '../../assets/landing/Bootcamp/Envestnet_idBO7XcT7C_0 (1).png'
import Finanzfluss from '../../assets/landing/Bootcamp/Finanzfluss_idCpINJUTA_0 (1).png'
import Airwallex from '../../assets/landing/Bootcamp/Airwallex_idPN8uDYVY_0.png'
import MoneyLion from '../../assets/landing/Bootcamp/MoneyLion_idltrgzkfr_0 (1).png'
import CMC from '../../assets/landing/Bootcamp/CMC Markets_id_-hhGj54_0 (1).png'
import man1 from '../../assets/landing/Rectangle 10 (1).png'
import man2 from '../../assets/landing/Rectangle 20 (1).png'
import man3 from '../../assets/landing/Rectangle 21 (1).png'
import man4 from '../../assets/landing/Rectangle 23 (3).png'
import man5 from '../../assets/landing/Rectangle 23 (4).png'
import MissionVision from '../MissionVision'
import Testimonials from '../Testimonials'
export default function AboutPage() {
  const { isDark } = useTheme()

  const textMuted = isDark ? 'text-neutral-300' : 'text-neutral-600'
  const heading = isDark ? 'text-white' : 'text-gray-900'
  const sectionBg = isDark ? 'bg-black' : 'bg-white'

  const logos = [
    { src: Stocktwits, alt: 'Stocktwits' },
    { src: Envestnet, alt: 'Envestnet' },
    { src: Finanzfluss, alt: 'Finanzfluss' },
    { src: Airwallex, alt: 'Airwallex' },
    { src: MoneyLion, alt: 'MoneyLion' },
    { src: CMC, alt: 'CMC Markets' },
  ]

  return (
    <section id="about" className={`${sectionBg}`}>
      {/* Hero / Header */}
      <div className="mx-auto max-w-7xl px-6 py-10 sm:py-14">
        <div className="text-center space-y-3">
          <div className={`mx-auto mb-1 flex items-center justify-center gap-2 text-xs ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
            <span>GS Team</span>
            <span>•</span>
            <span>About</span>
          </div>
          <h1 className={`font-syne font-bold tracking-tight ${heading} text-3xl sm:text-4xl md:text-5xl`}>About us</h1>
          <p className={`${textMuted} max-w-3xl mx-auto text-sm sm:text-base`}>
          Learn about the vital skills you'll master during our bootcamps. Our tailored programs move you from basic concepts to advanced technique          </p>
        </div>
      </div>

      {/* Who we are */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-8 md:gap-12">
          {/* Left copy */}
          <div className="space-y-5">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-green-700 dark:text-green-400">
              <span className="inline-flex h-2.5 w-2.5 rotate-45 rounded-[2px] bg-green-600" />
              <span className="uppercase">Our story</span>
            </div>
            <h2 className={`font-syne font-bold leading-tight ${heading} text-3xl sm:text-4xl md:text-5xl`}>Who we are?</h2>
            <p className={`${textMuted} max-w-xl leading-relaxed`}>
              Guild Academy is a technology education initiative dedicated to training the next generation of developers, security researchers, and protocol engineers — across both Web2 and Web3 ecosystems.

            </p>
            <p className={`${textMuted} max-w-2xl leading-relaxed`}>
              We provide structured learning programs, immersive bootcamps,<br/> and hands‑on workshops that cover
              everything from web<br/> development fundamentals and JavaScript to advanced smart<br/> contract auditing,
              blockchain security, and cryptographic<br/> systems. Whether you're starting your journey in traditional <br/>
              software development or diving into decentralized technologies,<br/> our curriculum equips you with real‑world,
              job‑<br/>ready skills.
            </p>
          </div>
          {/* Right image collage */}
          <div className="grid grid-cols-2 gap-4">
            <img src={man1} className="rounded-2xl" alt="about one" />
            <img src={man2} className="rounded-2xl" alt="about two" />
            <img src={man3} className="rounded-2xl" alt="about three" />
            <img src={man4} className="rounded-2xl" alt="about four" />
          </div>
        </div>
      </div>

      {/* Founding story */}
      <div className="mx-auto max-w-7xl px-6 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-[1.05fr_1fr] items-center gap-8 md:gap-12">
          <div className="space-y-5 order-2 md:order-1">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-green-700 dark:text-green-400">
              <span className="inline-flex h-2.5 w-2.5 rotate-45 rounded-[2px] bg-green-600" />
              <span className="uppercase">History</span>
            </div>
            <h2 className={`font-syne font-bold leading-tight ${heading} text-3xl sm:text-4xl`}>Our Founding Story</h2>
            <div className={`space-y-4 ${textMuted} leading-relaxed`}>
              <p>
                Guild Academy is on a mission to empower young people globally with in‑demand digital skills and
                access to practical software security engineering, mentorship from globally recognized experts,
                scholarship opportunities, job pathways, and a lifelong community from Africa.
              </p>
              <p>
                We are a Pan‑African social impact organization unlocking Africa's Web3 potential by training
                1 million Web3 developers in blockchain and security — changing lives, one cohort at a time.
              </p>
              <p>
                With a physical training hub in Lagos, we have concluded 4 cohorts and are in our 5th. Our facility
                is expanding from a 20‑student capacity to support 50+ per cohort, providing free internet,
                accommodation, feeding, and training for every admitted student.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img src={man5} className="rounded-3xl" alt="founding" />
          </div>
        </div>

        {/* Soft tiles */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-green-100 bg-green-50 p-5">
            <div className="flex  flex-col items-start gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-green-600 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path d="M10 2a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm1 11H9v-1h2Zm0-3H9V5h2Z"/></svg>
              </span>
              <div>
                <p className={`font-semibold ${heading}`}>5 Cohorts</p>
                <p className={`${textMuted} text-sm`}>Over 5000 applicants with 200 graduates equipped with in‑demand skills.</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-green-100 bg-green-50 p-5">
            <div className="flex flex-col items-start gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-green-600 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path d="M10 2 2 6l8 4 8-4-8-4Zm8 6-8 4v6l8-4V8Zm-18 0v6l8 4v-6L0 8Z"/></svg>
              </span>
              <div>
                <p className={`font-semibold ${heading}`}>Global Partners</p>
                <p className={`${textMuted} text-sm`}>Partnerships with corporations and governments across regions.</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-green-100 bg-green-50 p-5">
            <div className="flex flex-col items-start gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-green-600 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fill-rule="evenodd" d="M10 2a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8ZM7 9a3 3 0 1 0 3 3 3 3 0 0 0-3-3Zm6.5 5.5a4.5 4.5 0 0 0-2.27-3.93 5 5 0 1 1-4.46 0A4.5 4.5 0 0 0 13.5 14.5Z" clip-rule="evenodd"/></svg>
              </span>
              <div>
                <p className={`font-semibold ${heading}`}>Community</p>
                <p className={`${textMuted} text-sm`}>5000+ growing community connecting learners to earning and careers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

                   <MissionVision />
            
      {/* Global Vision banner */}
      <GlobalVision />

      {/* Team Visionaries */}
      <TeamVisionaries />

      {/* Companies section (dark uses PartnerCompanies) */}
      {isDark ? <PartnerCompanies /> : <CompaniesSection logos={logos} />}
                  <Testimonials />
      
      
    </section>
  )
}
