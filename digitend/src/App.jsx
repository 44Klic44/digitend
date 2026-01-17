import { useState } from 'react'

import './App.css'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import Clients from './components/Clients/Clients'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="hero-bg">
      <Header />
      <Hero />
      
    </div>
    <Clients/>
   
       
    </>
  )
}

export default App
