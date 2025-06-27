'use client'
import './globals.css'   
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import MyEducation from '@/components/MyEducation'
import Speaker from '@/components/Speaker'

export default function Home() {
  return (
    <>
      <Header />
      <main >
        <Hero />
        <About />
        <Skills />
        <MyEducation />
        <Projects />
        <Speaker />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
