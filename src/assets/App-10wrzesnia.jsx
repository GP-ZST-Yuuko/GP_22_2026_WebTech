import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  const app = {
    name: "WebTech",
    version: "1.0",
    author: "Twoje Gabriela Ptak",
    technologiesCount: 3
  };

  const technology = {
    name: "React",
    category: "Frontend",
    hours: 30,
    active: true
  };

  const student = {
    name: "Gabriela",
    surname: "Ptak",
    className: "4P",
    specialization: "technik programista"
  };

  const course = {
    name: "Zaawansowane Aplikacje Webowe",
    teacher: "Rafał Taraszka",
    hours: 4,
    completed: true
  };

  function ukonczono(x){
    if(x == true){
      return "Ukończono"
    }
    else{
      return "Nie ukończono"
    }
  }

  return (
     <div>

      <h1>{app.name}</h1>

      <p>Wersja: {app.version}</p>

      <p>Autor: {app.author}</p>

      <p>
        Liczba technologii: {app.technologiesCount}
      </p>

      <h1>{technology.name}</h1>

      <p>Kategoria: {technology.categoryn}</p>

      <p>Liczba godzin: {technology.hours}</p>

      <br></br>

      <p>Uczeń: {student.name + " " + student.surname}</p>

      <p>Klasa: {student.className}</p>

      <p>Kierunek: {student.specialization}</p>

      <br></br>

      <section className='zajecia'>

        <h2>{course.name}</h2>

        <p>Nauczyciel: {course.teacher}</p>

        <p>Liczba godzin: {course.hours}</p>

        <p>Czy ukończono kurs: {ukonczono(course.completed)}</p>

      </section>

    </div>
  )
}

export default App
