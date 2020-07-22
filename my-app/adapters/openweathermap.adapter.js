import settings from "../config/openweathermap.json";

export default function getWeather () {
    return axios.get(`api.openweathermap.org/data/2.5/weather?q=${settings.name}&appid=${settings.key}`);
}