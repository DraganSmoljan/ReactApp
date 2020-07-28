import * as settings from '../config/openweathermap.json';
import axios from "axios";

export default async function getWeather () {
   const weather = await axios.get(`${settings.host}?q=${settings.city}&appid=${settings.key}`)
   .then(response => 
    ({
        "weather": response.data.weather,
        "main" : response.data.main,
        "wind" : response.data.wind
    })
    );
   
   return weather;
}