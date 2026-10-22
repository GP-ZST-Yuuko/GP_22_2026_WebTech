import { useState } from "react";

function Active() {

  const [active, setActive] = useState(false);

  return (
    <div>
      <button onClick={() => setActive(!active)}>
        Zmień
      </button>

      <p>Stan: {active ? "Aktywny" : "Nieaktywny"}</p>
    </div>
  );
}

export default Active;