import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function WelcomeMessage() { // functional component that returns a heading element with a welcome message
  const appName = "React JSX Practice";
  return <h2>Welcome to {appName}!</h2>
}

function App() { // main component also a functional component that renders the WelcomeMessage component inside a div element

  return (
    <div>
      <WelcomeMessage />
    </div>
  )
}

export default App
