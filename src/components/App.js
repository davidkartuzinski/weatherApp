import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import openweathermap from "../Api/openweather";

import Header from "./Header";
import Time from "./Time";
import Temp from "./Temp";
import Buttons from "./Buttons";
import City from "./City";
import Description from "./Description";

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
  state = { temp: [] };

  onSearchSubmit = async city => {
    // example API call api.openweathermap.org/data/2.5/forecast?id=524901&APPID=1111111111
    // api.openweathermap.org/data/2.5/weather?q=London
    const response = await openweathermap.get(
      `/data/2.5/weather?q=${city}&APPID=544e0bfedfe58d8f62fe6bad7f568553`,
      {
        params: {
          query: city
        }
      }
    );

    this.setState({ temp: response });
    console.log(response);
    console.log(response.data.main.temp);
    console.log(this.state.temp.data.main.temp, "<--- tmep");
  };

  render() {
    return (
      <>
        <GlobalStyle />
        <div className="ui container">
          <Wrapper className="ui column">
            <Header />
            <main styles={{ flex: "1 0 auto" }}>
              <Time />
              <article>
                {/* {console.log(this.state.temp.data.main, "inside")} */}
                {/* <Temp temp={this.state.temp} /> */}
                <Temp temp={`39`} />
                <City handleSubmit={this.onSearchSubmit} />
                <Description />
              </article>
            </main>
            <Buttons />
          </Wrapper>
        </div>
      </>
    );
  }
}

export default App;
