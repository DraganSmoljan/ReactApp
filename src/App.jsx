import { useEffect, useState } from 'react';
import getWeather, { getForecast } from "./adapters/openweathermap.adapter"
import City from './components/City';
import FutureWeathers from './components/FutureWeathers';
import Layout from './components/Layout';
import Search from './components/Search';
import { Wrapper, Main, WeatherCard, Forecast } from './style/weatherApp.style';
import fortawesome from '@fortawesome/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus, faSquareMinus } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter, Router } from 'react-router-dom';



function App() {
  
  const [ weatherData, setWeatherData] = useState({loaded:false});
  const [toggle, setToggle] = useState(false);
  const [ forecastData, setForecastData] = useState({loaded:false});

  fortawesome.library.add(faSquarePlus, faSquareMinus);

  useEffect(() => {
    getWeather().then(data => setWeatherData({
      loaded:true,
      weather:data.weather[0],
      main:data.main,
      name:data.name,
      wind:data.wind
    }));
  },[]);

  useEffect(() => {
    
    if (toggle === true) 
      getForecast().then(data => setForecastData({ loaded:true, ...data}));
  },[toggle]);
  
  return (
      <Wrapper>
        <Layout>
          <Main>
            <Search></Search>
            {weatherData.loaded && (<City {...weatherData}/>)}
            <FontAwesomeIcon onClick={() => setToggle(!toggle)}  icon={ toggle === false || null ? faSquarePlus : faSquareMinus }/>
            {forecastData.loaded && (<WeatherCard>
            <Forecast className={toggle === false ? "hidden" : "show"}>
              <FutureWeathers className={"weather"}{ ...forecastData }/>
            </Forecast>
          </WeatherCard>)}
          </Main>
        </Layout>
      </Wrapper>
  );
}

export default App;
