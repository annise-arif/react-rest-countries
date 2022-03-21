import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Countries from './components/Countries/Countries';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
        <Header></Header>
       <Countries></Countries>
       <Footer></Footer>

    </div>
  );
}

// function LoadCountries(){
//   const [countries, setCountries] = useState([]);
//   useEffect( () => {
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res => res.json())
//     .then(res => setCountries(res))
//   }, [])
//   return (
//     <div>
//       <h1>Visiting Every country of the world!!!</h1>
//       <h3>available countries: {countries.length}</h3>
//       {
//         countries.map(country => <Country name ={country.name} population ={country.population}></Country>)
//       }
//     </div>
//   )
// }

// function Country(props){
//   return(
//     <div>
//       <h2>Name: {props.name.common}</h2>
//       <h4>Population: {props.population}</h4>
//     </div>
//   )
// }
export default App;
