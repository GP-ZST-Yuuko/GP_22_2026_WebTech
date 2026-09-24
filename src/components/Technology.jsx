    function Techonology(props){
      return(
        <>
          <h3>Technologie {props.name}</h3>
          <p>Kategoria {props.category}</p>
          <p>Liczba godzin {props.hours}</p>
          <p>Specyfikacja {props.specyfikacja.language}</p>
          <p>Features {props.features[0]}</p>
        </>
      )
    }

export default Techonology;