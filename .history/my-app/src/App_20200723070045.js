import React , { useEffect } from 'react';
import './App.css';
import getWeather from "./adapters/openweathermap.adapter";

function App() {
  useEffect(() => {getWeather()}, []);
 
  
  return (
    <>
    hello world
    </>
  );
}

export default App;
