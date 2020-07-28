import React , { useEffect } from 'react';
import './App.css';
import getWeather from "./adapters/openweathermap.adapter";

function App() {
  
  useEffect(() => {
   let weather = getWeather();
   console.log(weather);
  }, []);

  return (
    <>
    hello world
    </>
  );
}

export default App;
