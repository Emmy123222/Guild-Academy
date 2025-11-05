import { useTheme } from '../../theme/ThemeProvider'
import heroImg from '../../assets/landing/hand3.png'
import Check from '../../assets/landing/check-badge_svgrepo.com.png'
import Airwallex from '../../assets/landing/Bootcamp/Airwallex_idPN8uDYVY_0.png'
import Envestnet from '../../assets/landing/Bootcamp/Envestnet_idBO7XcT7C_0 (1).png'
import Finanzfluss from '../../assets/landing/Bootcamp/Finanzfluss_idCpINJUTA_0 (1).png'
import MoneyLion from '../../assets/landing/Bootcamp/MoneyLion_idltrgzkfr_0 (1).png'
import Stocktwits from '../../assets/landing/Bootcamp/Stocktwits_Logo_0 (1).png'
import CMC from '../../assets/landing/Bootcamp/CMC Markets_id_-hhGj54_0 (1).png'
import Rect47 from '../../assets/landing/Bootcamp/Rectangle 47.png'
import Rect47b from '../../assets/landing/Bootcamp/Rectangle 47 (1).png'
import Rect48 from '../../assets/landing/Bootcamp/Rectangle 48.png'
import Rect49 from '../../assets/landing/Bootcamp/Rectangle 49.png'
import Rect49b from '../../assets/landing/Bootcamp/Rectangle 49 (1).png'
import CompaniesSection from '../common/CompaniesSection'
import PartnerCompanies from '../PartnerCompanies'

export default function BlockchainSecurity() {
  const { isDark } = useTheme()
  const logos: { src: string; alt: string }[] = [
    { src: Stocktwits, alt: 'Stocktwits' },
    { src: Envestnet, alt: 'Envestnet' },
    { src: Finanzfluss, alt: 'Finanzfluss' },
    { src: Airwallex, alt: 'Airwallex' },
    { src: MoneyLion, alt: 'MoneyLion' },
    { src: CMC, alt: 'CMC Markets' }
  ]
  return (
    <section className={`w-full ${isDark ? 'bg-black text-white' : 'bg-white text-gray-900'}`}>
      {/* Hero */}
      <div className="mx-auto max-w-7xl px-6 py-10 sm:py-14">
        <nav aria-label="Breadcrumb" className="mb-6 text-xs sm:text-sm">
          <a href="#/" className={`${isDark ? 'text-neutral-400 hover:text-neutral-200' : 'text-neutral-500 hover:text-gray-700'} underline-offset-2 hover:underline`}>Home</a>
          <span className={`${isDark ? 'text-neutral-600' : 'text-neutral-400'} mx-2`}>/</span>
          <a href="#/bootcamps" className={`${isDark ? 'text-neutral-400 hover:text-neutral-200' : 'text-neutral-500 hover:text-gray-700'} underline-offset-2 hover:underline`}>Bootcamp</a>
          <span className={`${isDark ? 'text-neutral-600' : 'text-neutral-400'} mx-2`}>/</span>
          <span className={`${isDark ? 'text-white' : 'text-black'}`}>Blockchain Security</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="font-syne text-3xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Blockchain
              <br />Security
            </h1>
            <p className={`${isDark ? 'text-neutral-300' : 'text-neutral-600'} mt-4 text-base sm:text-lg max-w-2xl`}>
              Master secure smart contract patterns, threat modeling, audits, and incident response to build and protect
              blockchain applications with confidence.
            </p>

            {/* Features pill box */}
            <div className={`mt-6 rounded-2xl px-4 py-4 sm:px-6 sm:py-5 border ${isDark ? 'bg-black border-neutral-800' : 'bg-neutral-50 border-neutral-200'}`}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
                {[
                  '12 Weeks security training',
                  '100% fully paid Scholarship',
                  'Onsite Bootcamp Location',
                  'Required Tools (Laptop)',
                  'Certificate of Completion',
                  'Free WIFI onsite class'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="inline-flex h-5 w-5 items-center justify-center">
                      <img src={Check} alt="Check" className="h-4 w-4" />
                    </span>
                    <span className={`font-medium ${isDark ? 'text-neutral-200' : 'text-gray-900'}`}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <button
                type="button"
                onClick={() => (window.location.hash = '#/apply')}
                className="inline-flex items-center gap-2 rounded-full bg-green-600 text-white px-6 py-2.5 text-sm font-semibold shadow-sm hover:bg-green-700"
              >
                Enroll on Program
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 1 1-1.414-1.414L13.586 11H4a1 1 0 1 1 0-2h9.586l-3.293-3.293a1 1 0 0 1 0-1.414Z" clipRule="evenodd"/></svg>
              </button>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="rounded-[40px] overflow-hidden max-w-md ml-auto">
              <img src={heroImg} alt="Blockchain Security" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>

      {/* Who should join */}
      <div className={`${isDark ? 'bg-[#07150F]' : 'bg-[#F4FBF7]'} py-10 sm:py-14`}>
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className={`${isDark ? 'bg-[#0F2A1F]' : 'bg-[#0E241B] text-white'} rounded-2xl p-6 sm:p-8`}>
            <h2 className="font-syne text-2xl sm:text-3xl font-bold">Who Should Join This Program</h2>
            <p className="mt-2 text-sm sm:text-base text-neutral-300">This rigorous program is designed for ambitious individuals ready to commit to intensive learning.</p>
            <div className="mt-5 space-y-4">
              {['Smart Contract Developers', 'Security Engineers', 'Auditors'].map((label) => (
                <div key={label} className="flex items-center gap-3 rounded-xl bg-white text-gray-900 px-4 py-3">
                  <img src={Check} alt="Check" className="h-4 w-4" />
                  <span className="font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <img src={heroImg} alt="Program" className="w-full h-auto" />
          </div>
        </div>
      </div>

      {/* Scholarship */}
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
        <h2 className="font-syne text-3xl sm:text-4xl font-bold max-w-3xl">Fully Paid Scholarship: Your Investment in Excellence</h2>
        <p className={`${isDark ? 'text-neutral-300' : 'text-neutral-600'} mt-3 max-w-3xl`}>
          We believe financial constraints shouldn't stop talent. The Guild is offering a Fully Paid Scholarship to select
          candidates who demonstrate exceptional promise and commitment.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={`rounded-2xl border p-6 ${isDark ? 'bg-black border-green-900' : 'bg-green-50 border-green-100'}`}>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center">
                <span className="text-green-700">🎓</span>
              </div>
              <div>
                <h3 className="font-syne font-bold">₦500,000 Training Value</h3>
                <p className={`${isDark ? 'text-neutral-300' : 'text-neutral-600'} text-sm mt-1`}>This scholarship covers the entire tuition fee for the bootcamp, saving you [Insert Value, e.g., $5,000 - $10,000]</p>
              </div>
            </div>
          </div>
          <div className={`rounded-2xl border p-6 ${isDark ? 'bg-black border-green-900' : 'bg-green-50 border-green-100'}`}>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center">
                <span className="text-green-700">🎓</span>
              </div>
              <div>
                <h3 className="font-syne font-bold">Over 500+ Graduate</h3>
                <p className={`${isDark ? 'text-neutral-300' : 'text-neutral-600'} text-sm mt-1`}>We empower you to focus completely on your learning and rapidly accelerate your career transition into the high-demand ecosystem.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Alumni Gallery */}
      <div className={`${isDark ? 'bg-black' : 'bg-white'} pb-6 sm:pb-10`}>
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <div className="text-green-600 text-xs font-semibold tracking-wide">• PAST ALUMNI'S GALLERY</div>
            <h2 className="font-syne text-3xl sm:text-4xl font-bold mt-2">See the Future. Meet Our Alumni.</h2>
            <p className={`${isDark ? 'text-neutral-300' : 'text-neutral-600'} mt-2 max-w-2xl mx-auto`}>Our graduates are building the next generation of decentralized applications. Get inspired by the talent, innovation, and success stories emerging from the Guild community.</p>
          </div>
          {/* Top row */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            <div className="rounded-xl overflow-hidden aspect-[4/3]"><img src={Rect47} alt="Alumni 1" className="w-full h-full object-cover" /></div>
            <div className="rounded-xl overflow-hidden aspect-[4/3]"><img src={Rect48} alt="Alumni 2" className="w-full h-full object-cover" /></div>
            <div className="rounded-xl overflow-hidden aspect-[4/3] hidden md:block"><img src={Rect49} alt="Alumni 3" className="w-full h-full object-cover" /></div>
          </div>
          {/* Bottom row: two equal cards same width/height */}
          <div className="mt-3 grid grid-cols-2 gap-3 sm:gap-4">
            <div className="rounded-xl overflow-hidden h-48 sm:h-56 md:h-64"><img src={Rect47b} alt="Alumni 4" className="w-full h-full object-cover" /></div>
            <div className="rounded-xl overflow-hidden h-48 sm:h-56 md:h-64"><img src={Rect49b} alt="Alumni 5" className="w-full h-full object-cover" /></div>
          </div>
        </div>
      </div>

      {/* Companies section (dark uses PartnerCompanies) */}
      {isDark ? <PartnerCompanies /> : <CompaniesSection logos={logos} />}
    </section>
  )
}
