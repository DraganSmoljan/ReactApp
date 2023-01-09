function City(props) {
  const d2d = require('degrees-to-direction');
  const windDirection = d2d(props.wind.deg);
  const iconSrc = `http://openweathermap.org/img/wn/${props.weather.icon}.png`;
 
  return (
    <>
      <div className="city-info">
        <p> {props.name}, {props.weather.description}</p>
        <img src={iconSrc} width="50px" height="50px" alt=""></img>
        </div>
        <div className="weather-info">
          <h2>
            {(props.main.temp - 273.15).toFixed(2)}<span>&#xb0;</span>
          </h2>
          <ul>
            <li>Feels like: {(props.main.feels_like - 273.15).toFixed(2)} <span>&#8451;</span></li>
            <li>Pressure: {props.main.pressure} hPa</li>
            <li>Humidity: {props.main.humidity}%</li>
            <li>Wind: {props.wind.speed} km/h, {windDirection} </li>
          </ul>
          </div>
    </>
  )
}

export default City