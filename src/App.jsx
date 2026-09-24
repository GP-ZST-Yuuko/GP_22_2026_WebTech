import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from './components/Header'
import Techonology from './components/Technology'
import Footer from './components/Footer'
import Student from './components/Student'
import InfoBox from './components/InfoBox'
import Navigation from './components/Navigation'
import CourseCard from './components/CourseCard'
import Tablica from './components/Tablica'
import StudentCard from './components/StudentCard'

function App() {

  const specyfication = {
    language:"JavaScript",
    type: "Frontend"
  }

  const features = [
    "Komponenty", "JSX", "Props"
  ]

  const studentOne = {
    firstName: "Jan",
    lastName: "Kowalski",
    className: "4P",
    specialization: "technik programista",
    gradesAverage: 4.75,
    isActive: true
  }

  return (
     <>
        <Techonology name="React" category="Frontend" hours={150} specyfikacja={specyfication} features={features}/>
        <Techonology name="PHP" category="Backend" hours={70} specyfikacja={specyfication} features={features}/>
        <Techonology name="JavaScript" category="Frontend" hours={50} specyfikacja={specyfication} features={features}/>
        <Techonology name="Angular" category="Frontend" hours={100} specyfikacja={specyfication} features={features}/>
        <Techonology name="MySQL" category="Backend" hours={80} specyfikacja={specyfication} features={features}/>

          {/* <StudentCard student={studentOne}/> */}

    </>
  )
}

export default App
