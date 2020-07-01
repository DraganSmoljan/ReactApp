export function getWeather () {
    return axios.get("api.openweathermap.org/data/2.5/weather?q={city name}&appid={key}");
}