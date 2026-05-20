import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import Contact from './components/sections/Contact'
import Hero from './components/sections/Hero'
import Projects from './components/sections/Projects'
import Services from './components/sections/Services'
import WhyHireMe from './components/sections/WhyHireMe'
import { navigation, siteData } from './data/siteData'

function App() {
  return (
    <div className="min-h-screen bg-transparent text-slate-100">
      <Navbar brand={siteData.brand} links={navigation} resumeUrl={siteData.contact.resumeUrl} />

      <main>
        <Hero hero={siteData.hero} />
        <Services services={siteData.services} />
        <Projects projects={siteData.projects} />
        <WhyHireMe points={siteData.whyHireMe} proofStrip={siteData.proofStrip} />
        <Contact contact={siteData.contact} />
      </main>

      <Footer
        brand={siteData.brand}
        links={navigation}
        footerMessage={siteData.footerMessage}
        socialLinks={siteData.contact}
      />
    </div>
  )
}

export default App
