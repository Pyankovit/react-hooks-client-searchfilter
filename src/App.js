import React, { useState, useEffect }  from 'react';
import './App.css';


function App() {
  const [term, setterm] = useState('');
  const [cars, setcars] = useState([
  {
    id:1,
    brand: "honda",
    model: "civic",
    year: "1996"
  },
  {
    id:2,
    brand: "dodge",
    model: "charger",
    year: "1968"
  },
  {
    id:3,
    brand: "toyota",
    model: "supra",
    year: "1995"
  }
  ]);

  const handleSearchInputChanges = (e) => {
    setterm(e.target.value);
  }
  const searchingFor=term=>x=>x.brand.includes(term)||x.model.includes(term)||!term;
 
  const mappedCars=cars.filter(searchingFor(term)).map(car=>
  <div className="car-card" key={car.id}>
    <h1>{car.brand}</h1>
    <h1>{car.model}</h1>
    <h3>{car.year}</h3>
  </div>);





  return (
    <div className="App">
      <form>
        <input 
        type="text"
        onChange={handleSearchInputChanges}
        value={term}
        placeholder="carname..."
        />
      </form>
      {mappedCars}
    </div>
  );
}

export default App;
