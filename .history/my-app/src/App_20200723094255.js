import React , { useEffect } from 'react';
import './App.css';
import getWeather from "./adapters/openweathermap.adapter";

function App() {
  let obj;
  useEffect(() => {
    let obj = getWeather();
    let weatherObject ={
      weather: obj.weather,
      main: obj.main,
      wind: obj.wind
    }
  }, []);
 


  console.log(weatherObject.main)
  return (
    <>
    hello world
    </>
  );
}

export default App;
