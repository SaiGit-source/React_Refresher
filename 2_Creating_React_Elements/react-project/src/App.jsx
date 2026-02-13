import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let language = "Javascript";
let moon = "🌙";
/*
function Header(props){
  //console.log(props);
  const name = props.name;
  return (
    <header>
      <h1>{name}'s kitchen</h1>
      <p>Copyright {props.year}</p>
    </header>
  );
}
*/

function Header({name, year}){ //destructuring props
  //console.log(props);
  //const name = name;
  return (
    <header>
      <h1>{name}'s kitchen</h1>
      <p>Copyright {year}</p>
    </header>
  );
}



function App() {

  return (
    //<h1>Hello React!</h1>
    //<h1>Hello {language.toUpperCase()} {moon}!!!</h1>
    <div>
      <Header name="Alex" year={new Date().getFullYear()} />
    <main>
      <h2>We serve the most delicious food around</h2>
    </main>
    </div>
  );
}

export default App
