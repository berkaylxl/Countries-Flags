import { useEffect, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min'
import './App.css';
function App() {

  const [countries, setState] = useState([])

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(response => setState(response));
  }, [])

  console.log(countries)
  return (


    <div class="container">
      <div class="row">
        {countries.map(country => {
          return (
            <div class="card" style={{ width: "18rem", marginTop: "1em", marginLeft: "1em" }} >
              <img src={country.flag} style={{ height: "10rem", width: "15rem" }}></img>
              <div class="card-body">
                <h5 class="card-title">{country.name}</h5>
                <p class="card-text">{country.capital}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
