 import { useState } from "react";

 function Technology({ name, category, hours, image }) {

    function showTechnology(){
      console.log("Nazwa: " + name);
      console.log("Kategoria: " + category);
      console.log("Liczba godzin: " + hours);
    }

    function toggleDetails() {
      setVisible(!visible);
    }

    function showName(technologyName) {
      console.log(technologyName);
    }
  
    const [likes, setLikes] = useState(0);
    const [isLearning, setIsLearning] = useState(false);
    const [visible, setVisible] = useState(false);

    return (
      <section>
        {/* <br/>
        <h2 className="naglowek2">Nazwa: {name} </h2>
        <p className="akapit">Kategoria: {category}</p>
        <p className="akapit">Liczba godzin: {hours}</p>
        <button className="przycisk" onClick={showTechnology}>
          Pokaż informacje
        </button> */}

        <img
        src={`${import.meta.env.BASE_URL}images/${image}`}
        alt={`Logo technologii ${name}`}
        />

        <h3>{name}</h3>

        <button onClick={toggleDetails} aria-expanded={visible}>
          {visible ? "Ukryj szczegóły" : "Pokaż szczegóły"}
        </button>

        {visible && (
          <div className="technology-details">
            <span className="technology-badge">{category}</span>
            <p>Czas nauki: {hours} godz.</p>
          </div>
        )}

        <p>Polubienia: {likes}</p>
        <button onClick={() => setLikes(likes + 1)}>
          Lubię
        </button>

        <button onClick={() => setLikes(0)}>
          Reset
        </button>

        <button onClick={() => setIsLearning(!isLearning)}>
          Zmień status nauki
        </button>
        <p>Status: {isLearning ? "Uczę się" : "Jeszcze nie uczę się"}</p>

        <button onClick={showTechnology}>Pokaż informacje w konsoli</button>
        <button onClick={() => showName(name)}>Wypisz nazwę</button>

        <br />
        <hr/>
      </section>
    )
  }

  export default Technology;