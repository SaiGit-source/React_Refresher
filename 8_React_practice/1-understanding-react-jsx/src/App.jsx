import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

// 1.functional component that returns a heading element with a welcome message
function WelcomeMessage() { // functional component that returns a heading element with a welcome message
  const appName = "React JSX Practice";
  return <h2>Welcome to {appName}!</h2>
}

// 2.example of props
function UserName({ name }) { // functional component that returns a heading element with a user name
  return <h3>{name}</h3>
}

//3. example of useState()
function AppleCounter(){
  const [apples, setApples] = useState(0);
  return (
    <div>
      <p>You have {apples} apples</p>
      <button onClick={() => setApples(apples + 1)}>
        Add Apple
      </button>
    </div>
  );
}

function App() { // main component also a functional component that renders the WelcomeMessage component inside a div element

  return (
    <div>
      <WelcomeMessage />
      <UserName name="John Doe" />
      Props Example:
      <UserName name="Jane Smith" />
      Use State Example:
      <AppleCounter />
    </div>
  )
}

export default App
