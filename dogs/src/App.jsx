import { useState } from 'react'
import './App.css'
import DogImage from './components/DogImage';


const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;

function App() {
  return (
    <div>     
      <h1>Discover &hearts; for Dogs!</h1>
      <DogImage />
    </div>
  );
  

}

export default App;
