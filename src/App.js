import './App.css';
import React, { useState, useEffect} from 'react';
import axios from 'axios'
import { Link, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>hello world</h1>
       <img src='https://picsum.photos/seed/picsum/200/100' alt=''/>
       <img src='https://picsum.photos/seed/picsum/600/600' alt=''/>
       <img src='https://picsum.photos/seed/picsum/600/600' alt=''/>
      </header>
    </div>
  );
}

export default App;
