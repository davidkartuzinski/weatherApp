import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import openweathermap from "../Api/openweather";
import axios from "axios";

import Header from "./Header";
import Time from "./Time";
import Temp from "./Temp";
import Buttons from "./Buttons";
import City from "./City";
import Description from "./Description";
import Loader from "./Loader";

const GlobalStyle = createGlobalStyle`
  html, body {
    background-color: #DADADA;
    height: 100%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100vh;
`;

class App extends React.Component {
  state = {
    error: null,
    isLoaded: false,
    temp: []
  };

  onSearchSubmit = async city => {
    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=544e0bfedfe58d8f62fe6bad7f568553`
      )
      .then(
        result => {
          console.log(result, "<--result");
          this.setState({
            isLoaded: true,
            temp: result
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  };

  componentDidMount() {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=paris&APPID=544e0bfedfe58d8f62fe6bad7f568553`
      )
      .then(
        result => {
          console.log(result, "<--result");
          this.setState({
            isLoaded: true,
            temp: result
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, temp } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <Loader />;
    } else {
      return (
        <>
          <GlobalStyle />
          <div className="ui container">
            <Wrapper className="ui column">
              <Header />
              <main styles={{ flex: "1 0 auto" }}>
                <Time />
                <article>
                  <Temp temp={temp.data.main.temp} />
                  <City handleSubmit={this.onSearchSubmit} />
                  <Description
                    description={temp.data.weather[0].description}
                    windSpeed={temp.data.wind.speed}
                    windDirection={temp.data.wind.deg}
                  />
                </article>
              </main>

              <Buttons />
            </Wrapper>
          </div>
        </>
      );
    }
  }
}

export default App;
