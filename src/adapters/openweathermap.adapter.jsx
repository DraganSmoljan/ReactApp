import axios from "axios";

const getWeather = async () => {
 const weatherData = await axios.get(`${process.env.REACT_APP_HOST}?q=${process.env.REACT_APP_CITY}&appid=${process.env.REACT_APP_API_KEY}`).then(response => response.data).catch((error)=> console.log("Error:", error));

 return weatherData;
}


export default getWeather; 