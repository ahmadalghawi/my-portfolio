import Image from 'next/image'
import HeroSections from './components/HeroSections'
import Navbar from './components/Navbar'
import AboutSections from './components/AboutSections'
import ProjectsSection from './components/ProjectsSection'
import EmailSection from './components/EmailSection'
import Footer from './components/Footer'
import AchievementsSection from './components/AchievementsSection'



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-bgLight dark:bg-[#222222] dark:text-bgLight">
      <Navbar />
      
      <div className='container mx-auto px-12 py-6 mt-24'>
      <HeroSections />
      <AboutSections />
      <ProjectsSection />
      <AchievementsSection />
      <EmailSection />
      </div>
      <Footer />
    </main>
  )
}
