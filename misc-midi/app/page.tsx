import { Navbar } from '../components/navbar'
import { Hero } from '../components/hero'
import { Features } from '../components/features'
import { Pricing } from '../components/pricing'
import { About } from '../components/about'
import Contact from '../components/contact'
import { Footer } from '../components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

