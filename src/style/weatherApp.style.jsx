import styled from "styled-components";

const Wrapper = styled.div `
    display: flex;
    flex-direction: column;
    margin: 5% auto;
    padding: 2%;
    border: 2px solid white;
    width: 27rem;
    height: 30rem;
    border-radius: 2rem;
    background: transparent;
    color: white;
`;

const Forecast = styled.div `
    border: 2px solid white;
    border-radius: 1rem;
`;

const FormStyle = styled.form`

  div {
    position: relative;
  }

  input {
    border: none;
    font-size: 1.5rem;
    color: #09095b;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: #09095b;
  }
`;

const WeatherCard = styled.div `
    display: flex;
    flex-direction:column;

    .hidden {
        display: none;
    }
    .show {
        display:block;
    }
`;
const Main = styled.div `
    display:flex;
    flex-direction: column;

    svg {
        align-self: end;
        margin-right: 2rem;
        margin-bottom: 1rem;
    }

    .city-info, .weather-info {
        display:flex;
        justify-content:space-between;
    }  

    .weather-info {
        h2 {
            font-weight: 400;
            font-size: 5rem;
            margin: 0;
        }

        ul {
            list-style:none;
        }
    }
    .weather {
        &>p {
            margin-left:1rem;
        }
        .forecast {
            display: flex;
            justify-content: space-around;
        }
    }
    
`;

export { Wrapper, Main, WeatherCard, Forecast, FormStyle };