import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Main from './components/Main';
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  // roster array
  // id
  // name
  // birth year
  // homeworld

  const [ roster, setRoster ] = useState( [] );
  const [ id, setId ] = useState( null );

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
  axios.get('https://swapi.dev/api/people')
    .then(res => {
      console.log(res.data);
      setRoster(res.data);
    })}, [])

  return (
    <div className="App">
      <Main roster = { roster } />
    </div>
  );
}

export default App;
