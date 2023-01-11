import { useEffect, useState } from 'react';
import getWeather, { getForecast } from "./adapters/openweathermap.adapter"
import  Layout from './components/Layout';
import  City from './components/City';
import  FutureWeathers from './components/FutureWeathers';
import { Wrapper, Main, FormStyle, Forecast } from './style/weatherApp.style';
import fortawesome from '@fortawesome/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus, faSquareMinus } from '@fortawesome/free-solid-svg-icons';
import { FaSearch } from "react-icons/fa"



function App() {

  const [weatherData, setWeatherData] = useState([{}]);
  const [input, setInput] = useState("");

  fortawesome.library.add(faSquarePlus, faSquareMinus);

  
  const handleSubmit = (e) => {
    e.preventDefault();
    getWeather(input).then(dataWeather=>setWeatherData([{loaded:true, dataWeather, toggleForecast: false}])); 
  }

  const test = () => {
    console.log("click");
  }
  console.log("data from forecast2", weatherData[0]);
 
  return (
    <Wrapper>
      <Layout>
        <Main>
        <FormStyle onSubmit={handleSubmit}> 
          <div>
              <FaSearch/>
              <input onChange={(e)=> setInput(e.target.value)} type="text" value={input} />
          </div>
        </FormStyle>
        {weatherData[0].loaded && (
          <>
            <City {...weatherData[0].dataWeather}/>
            <FontAwesomeIcon onClick={()=>{ weatherData[0].toggleForecast = true; console.log("ulaz", this.weatherData[0].toggleForecast );}} icon={ weatherData[0].toggleForecast === false || undefined ? faSquarePlus : faSquareMinus} />
          </>
        )}
        {weatherData[0].toggleForecast && (
          <>
          <Forecast>
              <FutureWeathers { ...weatherData[0].dataForecast }/>
          </Forecast>
          </>
        )}       
        </Main>
      </Layout>
    </Wrapper>
  );
}

export default App;
