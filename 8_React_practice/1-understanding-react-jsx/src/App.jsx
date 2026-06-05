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

//4.example of forms
function NameForm() {
  const [name, setName] = useState(''); // value always matches the state and it is called as a controlled input
  const [submittedNames, setSubmittedNames] = useState([]); // state to store the submitted names

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent the default form submission behavior
    if (name) {
      setSubmittedNames([...submittedNames, name]); // add the current name to the list of submitted names, ...longList spreaded into separate values
      setName(''); // clear the input field after submission
    }
  };

  return (
    <div>
      <h3>Enter your name:</h3>
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Your typed: {name}</p>
      <button onClick={handleSubmit}>Submit</button>

      {
        submittedNames.length > 0 && (
          <div>
            <h4>Submitted Names:</h4>
            <ul>
              {submittedNames.map((submittedName, index) => (
                <li key={index}>{submittedName}</li>
              ))}      
            </ul>
          </div>
        )
  }
    </div>
  );
}


//5.example of Event Handling
function SecretMessage() {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible); // toggle the visibility of the secret message
  };

  return (
    <div>
      <h3>Click to reveal secret message</h3>
      <button onClick={handleClick}>Reveal Message</button>
      {isVisible && <p>This is a secret message!</p>}
    </div>
  );
}


//6.example of rendering
function MovieList() {
  const movies = [
    {id:1, title: "Forrest Gump", year: 1994},
    {id:2, title: "Kung Fu Panda", year: 2008},
    {id:3, title: "The Lion King", year: 1994},
  ];

  return (
    <div>
      <h2>Movie Collection</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            {movie.title} ({movie.year})
          </li>
        ))}
      </ul>
    </div>
  )
}



//7.example of styled components
// npm install styled-components
import styled from 'styled-components'; 
const PrimaryButton = styled.button`
  background-color: ${props => props.$active ? '#0056b3' : '#007bff'};
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: green;
  }
`;


function App() { // main component also a functional component that renders the WelcomeMessage component inside a div element

  return (
    <div>
      <WelcomeMessage />
      <UserName name="John Doe" />
      Props Example:
      <UserName name="Jane Smith" />
      Use State Example:
      <AppleCounter />
      Form Example:
      <NameForm />
      Event Handling Example:
      <SecretMessage />
      Rendering Example:
      <MovieList />
      Styled Components Example:
      <PrimaryButton  $active={true}>Watch now</PrimaryButton>
    </div>
  )
}

export default App
