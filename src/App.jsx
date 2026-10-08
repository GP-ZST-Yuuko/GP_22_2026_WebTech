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

  // const technologie = [
  //   'React', 'JavaScript', 'CSS'
  // ]

  // function wyswietl(name){
  //   console.log("Kliknięto technologie:" + name)
  // }

  const technologies = [
  { id: 1, name: "React", category: "Frontend", hours: 30, image: "react.webp" },
  { id: 2, name: "Node.js", category: "Backend", hours: 40, image: "nodejs.webp" },
  { id: 3, name: "MySQL", category: "Baza danych", hours: 20, image: "mysql.webp" },
  { id: 4, name: "Express", category: "Backend", hours: 25, image: "express.webp" },
  { id: 5, name: "MongoDB", category: "Baza danych", hours: 30, image: "mongodb.webp" },
  { id: 6, name: "Bootstrap", category: "Frontend", hours: 15, image: "bootstrap.webp" },
  { id: 7, name: "CSS", category: "Frontend", hours: 20, image: "css.webp" },
  { id: 8, name: "HTML", category: "Frontend", hours: 10, image: "html.webp" },
  { id: 9, name: "PHP", category: "Backend", hours: 35, image: "php.webp" }
  ];

  function Technologies({name, category, hours, image}){
    return(
      <>
        
      </>
    );
  }


  return (
     <>
        {
        /* {
          technologie.map((technologie, index) => {
            return(
              <InfoBox key={index} name={technologie} onClick={()=>wyswietl(technologie)}/>
                  
            );
          })
        } */

        technologies.map((technologie,index) => {
          return(
            <Technologies key={index}/>
          );
        })
        
        
        
        }

        
    </>
  )
}

export default App
