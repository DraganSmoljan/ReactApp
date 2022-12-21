import axios from "axios";

const getWeather = async () => {
  const data = await axios.get(`${process.env.REACT_APP_HOST}?q=${process.env.REACT_APP_CITY}&appid=${process.env.REACT_APP_API_KEY}`);
  const resposeData = data.data;
  
  return resposeData;
}


export default getWeather;