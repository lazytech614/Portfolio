import Header from '../components/global/header'
import Hero from '../components/global/hero'
import About from '../components/global/about'
import Projects from '../components/global/projects'
import Contact from '../components/global/contact'
import Footer from '../components/global/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
