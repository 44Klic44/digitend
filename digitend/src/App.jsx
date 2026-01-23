import { useState } from 'react'

import './App.css'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import Clients from './components/Clients/Clients'
import Methodology from './components/Methodology/Methodology'
import Services from './components/Services/Services'
import Pricing from './components/Pricing/Pricing'
import Portfolio from './components/Portfolio/Portfolio'
import ContactForm from './components/ContactForm/ContactForm'
import { Footer } from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="hero-bg">
        <Header />

        <section id="home">
          <Hero />
        </section>
      </div>

      <section id="clients">
        <Clients />
      </section>

      <section id="about">
        <Methodology />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="pricing">
        <Pricing />
      </section>
      
        <Portfolio />
        
      <section id="contact">
        <ContactForm />
      </section>

      <Footer />
    </>
  )
}

export default App
