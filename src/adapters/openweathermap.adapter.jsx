 import axios from "axios";

 const getWeather = async () => {
  const fetchedData = await axios.get(`${process.env.REACT_APP_HOST}?q=${process.env.REACT_APP_CITY}&appid=${process.env.REACT_APP_API_KEY}`).then(response=> response.data);
  
  return fetchedData;
} 


export default getWeather; 