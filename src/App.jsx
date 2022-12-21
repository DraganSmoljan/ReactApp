import { useEffect, useState } from 'react';
import './App.css';

import getWeather from "./adapters/openweathermap.adapter"

function App() {
  
  const [ weatherData, setWeatherData] = useState({});

  useEffect(() => {
   setWeatherData(getWeather()) ;
  }, []);
console.log("weather", weatherData);

  return (
    <div>
      <p>hello world</p>
    </div>
  );
}

export default App;
