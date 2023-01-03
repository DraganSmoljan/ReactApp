import styled from "styled-components";

const Wrapper = styled.div `
    display: flex;
    flex-direction: column;
    margin: 5% auto;
    padding: 2%;
    border: 2px solid white;
    width: 25rem;
    height: 30rem;
    border-radius: 2rem;
    background: transparent;
    color: white;

`;

const Main = styled.div `
    display:flex;
    flex-direction: column;

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
`;

export { Wrapper, Main };