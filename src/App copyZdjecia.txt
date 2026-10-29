import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Student from './components/Student'
import InfoBox from './components/InfoBox'
import Navigation from './components/Navigation'
import CourseCard from './components/CourseCard'
import Tablica from './components/Tablica'
import StudentCard from './components/StudentCard'
import Counter from './components/Counter'
import Active from './components/Active'
import Technology from './components/Technology'
import 'bootstrap/dist/css/bootstrap.min.css';
import Checkbox from './components/Checkbox'

function App() {

  const [showFlowers, setShowFlowers] = useState(true);
  const [showAnimals, setShowAnimals] = useState(true);
  const [showCars, setShowCars] = useState(true);

  const photos = [
    { id: 10, alt: "Mak", filename: "obraz1.jpg", category: 1, downloads: 35 },
    { id: 10, alt: "Mak", filename: "obraz1.jpg", category: 1, downloads: 35 },
    { id: 10, alt: "Mak", filename: "obraz1.jpg", category: 1, downloads: 35 }
  ]

  const filteredPhotos = photos.filter((photo) => {
    return (
      (photo.category === 1 && showFlowers) ||
      (photo.category === 2 && showAnimals) ||
      (photo.category === 3 && showCars)
    );
  });

  return (
      <div>
          <Checkbox/>
          <div className="form-check form-switch form-check-inline">
    <input
      className="form-check-input"
      type="checkbox"
      role="switch"
      id="flowers"
      checked={showFlowers}
      onChange={(event) => setShowFlowers(event.target.checked)}
    />
    <label className="form-check-label" htmlFor="flowers">
      Kwiaty
    </label>
  </div>

  <div className="form-check form-switch form-check-inline">
    <input
      className="form-check-input"
      type="checkbox"
      role="switch"
      id="animals"
      checked={showAnimals}
      onChange={(event) => setShowAnimals(event.target.checked)}
    />
    <label className="form-check-label" htmlFor="animals">
      Zwierzęta
    </label>
  </div>

  <div className="form-check form-switch form-check-inline">
    <input
      className="form-check-input"
      type="checkbox"
      role="switch"
      id="cars"
      checked={showCars}
      onChange={(event) => setShowCars(event.target.checked)}
    />
    <label className="form-check-label" htmlFor="cars">
      Samochody
    </label>
  </div>
  <div>
    {filteredPhotos.map((photo) => (
      <div key={photo.id} className="d-inline-block">
        <img
          src={"/assets/" + photo.filename}
          alt={photo.alt}
          className="rounded"
          style={{ margin: "5px" }}
        />
        <h4>Pobrań: {photo.downloads}</h4>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => download(photo.id)}
        >
          Pobierz
        </button>
      </div>
    ))}
  </div>
  
    </div>

  );
}

export default App
