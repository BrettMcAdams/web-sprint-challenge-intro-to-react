import React, { useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import Character from './components/Character'
import Details from './components/Details'

const App = () => {
  const [ characters, setCharacters ] = useState([])
  const [ currentId, setCurrentId ] = useState(null)

  const openDetails = id => {
    setCurrentId(id)
  }

  const closeDetails = () => {
    setCurrentId(null)
  }

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        setCharacters(res.data.results)
      })
      .catch(err => {
        debugger
      })
  }, [])

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  // console.log(characters);
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {
        characters.map(fr => {
          return <Character key={fr.id} character={fr} open={openDetails} />
        })
      }
      {
        currentId && <Details info={characters} id={currentId} close={closeDetails} />
      }
    </div>
  );
}

export default App;
