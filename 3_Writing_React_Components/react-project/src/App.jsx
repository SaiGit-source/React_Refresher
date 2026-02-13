import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import chef from "./images/chef.jpg";

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

const items = [
  "Macoroni and cheese",
  "Salmon with potatoes",
  "Tofu with rice and vegetables"
];

const dishObjects = items.map((dish, index) => 
  ({
    id: index,
    title: dish
  }
  ));

console.log(dishObjects);

function Main({dishes}){
  return (
    <>
    <div>
      <h2>Welcome to this beautiful restaurant.</h2>
    </div>
    <main>
      <img src="https://github.com/eveporcello.png" height={200} alt="A photo of a chef in the kitchen" ></img>

      {/* <img src={chef} height={200} alt="A photo of a chef in the kitchen" ></img> */}
    <ul>
      {dishes.map((dish) => (
        <li key={dish.id} style={{listStyleType:"none"}}>
          {dish.title}
        </li>
      ))}
    </ul>
    </main>
    </>
  )
}


/*
function Main({dishes}){
  return (
    <ul>
      {dishes.map((dish, index) => (
        <li key={index} style={{listStyleType:"none"}}>{dish}</li>
      ))}
    </ul>
  )
}
*/

function App() {

  return (
    //<h1>Hello React!</h1>
    //<h1>Hello {language.toUpperCase()} {moon}!!!</h1>
    <div>
      <Header name="Alex" year={new Date().getFullYear()} />
    <main>
      <h2>We serve the most delicious food around</h2>
    </main>
    {/* <Main dishes={items} /> */}
    <Main dishes={dishObjects} />
    </div>
  );
}

export default App
