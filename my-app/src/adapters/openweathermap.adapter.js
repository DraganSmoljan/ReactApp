import * as settings from '../config/openweathermap.json';
import axios from "axios";

export default function getWeather () {
    console.log("ulaz");
    return axios.get(`api.openweathermap.org/data/2.5/weather?q=${settings.city}&appid=${settings.key}`);
}