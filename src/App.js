import React from 'react';
import logo from './logo.svg';
import './App.css';

import Lyrics from './components/lyrics';
import NextDate from './components/next-date';

function App() {
  return (
    <div className="app">
      <Lyrics />
      <NextDate />
    </div>
  );
}

export default App;
