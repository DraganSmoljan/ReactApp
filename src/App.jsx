import { useEffect, useState } from 'react';
import './App.css';

import getWeather from "./adapters/openweathermap.adapter"
import City from './components/City';
import { Wrapper } from './style/weatherApp.style';
import Layout from './components/Layout';


function App() {
  
  const [ weatherData, setWeatherData] = useState({});

  useEffect(() => {
    setWeatherData(getWeather);
  },[]);
  
  console.log("data", weatherData);

  return (
      <Wrapper>
      {/*   <City name={weatherData.name} 
              weather={weatherData[0].description} 
              icon={weatherData.weather[0].icon}
        /> */}
        <City/>
        <Layout/>
      </Wrapper>
  );
}

export default App;
