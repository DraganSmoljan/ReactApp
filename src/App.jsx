import { useEffect, useState } from 'react';
import getWeather from "./adapters/openweathermap.adapter"
import City from './components/City';
import Layout from './components/Layout';
import { Main, Wrapper } from './style/weatherApp.style';



function App() {
  
  const [ weatherData, setWeatherData] = useState({loaded:false});

  useEffect(() => {
    getWeather().then(data => setWeatherData({
      loaded:true,
      weather:data.weather[0],
      main:data.main,
      name:data.name,
      wind:data.wind
    }));
  },[]);

  console.log("data", weatherData);
  
  return (
      <Wrapper>
        <Layout>
          {weatherData.loaded && (<City {...weatherData}/>)}
        </Layout>
      </Wrapper>
  );
}

export default App;
