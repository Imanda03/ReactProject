import { useState } from "react";
import "./App.css";
import List from "./List";
import data from "./data";

function App() {
  const [people, setPeople] = useState(data);
  // console.log(people);

  const handleClick = () => {
    setPeople([]);
  };
  return (
    <div className="App">
      <section className="allBorder">
        <h4 className="h4">{people.length} People Have Birthday Today</h4>
        <List people={people} />
        <button className="btn" onClick={() => handleClick()}>
          Clear All
        </button>
      </section>
    </div>
  );
}

export default App;
