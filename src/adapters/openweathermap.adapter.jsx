import axios from "axios";

const getWeather = async (city) => {
    const weatherData = await axios.get(`${process.env.REACT_APP_HOST}?q=${city}&appid=${process.env.REACT_APP_API_KEY}`).then(response => response.data).catch((error)=> console.log("Error:", error));
    return weatherData;
}

const getForecast = async () => {
    const forecast = await axios.get(`${process.env.REACT_APP_FORECAST_HOST}?q=${process.env.REACT_APP_CITY}&appid=${process.env.REACT_APP_API_KEY}`).then(response => response.data).catch((error)=> console.log("Error:", error));

    return forecast;
}


export default getWeather;
export { getForecast }; 