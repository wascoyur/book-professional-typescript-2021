import React from 'react';
import './App.css';
import { Companion, getNextDay } from './functions/Pattern-Companion';

function App() {
  Companion();
  return (
    <div className='App'>
      <h1>Companion</h1>
      Companion{Companion()}
      <br />
      {getNextDay('Mon')}
    </div>
  );
}

export default App;
