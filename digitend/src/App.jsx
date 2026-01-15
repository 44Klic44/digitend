import { useState } from 'react'

import './App.css'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Hero/>
    </>
  )
}

export default App
