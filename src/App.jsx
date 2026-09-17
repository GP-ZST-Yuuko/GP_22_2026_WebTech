import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

    function Header(){
      return(
        <>
          <div>
            <h1>Nagłówek WebTech</h1>
          </div>
        </>
      )
    }

    function Techonology(){
      return(
        <>
          <p>Technologia</p>
        </>
      )
    }

    function Footer(){
      return(
        <>
          <footer>Stopka</footer>
        </>
      )
    }

  return (
     <>
      <Header />
      <Techonology />
      <Footer />
    </>
  )
}

export default App
