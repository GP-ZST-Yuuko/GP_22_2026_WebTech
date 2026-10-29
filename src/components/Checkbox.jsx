import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function Checkbox(){
  const [showDescription, setShowDescription] = useState(false);

  return(
    <div>
        <h1>Kurs React</h1>
      
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="show-description"
          checked={showDescription}
          onChange={(event) => setShowDescription(event.target.checked)}
        />
      <label htmlFor='show-description' className="form-check-label">Pokaż opis</label>

      <p>Opis: {showDescription ? "włączony" : "wyłączony"} </p>

      {showDescription && <p>Na kursie poznajemy tworzenie aplikacji React.</p>}
    </div>
  );

}

export default Checkbox;