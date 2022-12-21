import { useEffect, useState } from 'react';
import getWeather from "./adapters/openweathermap.adapter"
import City from './components/City';
import Layout from './components/Layout';
import { Wrapper } from './style/weatherApp.style';



function App() {
  
  const [ weatherData, setWeatherData] = useState({});

  useEffect(() => {
    getWeather().then(data => setWeatherData(data));
  },[]);
  console.log("data",weatherData)
  return (
      <Wrapper>
       <City name = {weatherData.name}
            // weather = {weatherData.weather[0].description}
            // icon = {weatherData.weather[0].icon}
             
        /> 
        <City/>
        <Layout/>
      </Wrapper>
  );
}

export default App;
