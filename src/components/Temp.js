import React from "react";
import styled from "styled-components";

const TempSection = styled.section`
  padding: 1rem 5%;
  text-align: center;

  ul {
    display: flex;
    padding: 0;
    margin: 0;
  }

  li {
    padding: 0.25rem;
    margin: 0;
    list-style-type: none;
  }
`;

const CelsiusToggle = ({ celsius, updateTempMetric }) => {
  console.log(celsius, "cellss");
  return (
    <form>
      <input
        type="radio"
        name="degree-type"
        id="celsius"
        value="metric"
        checked={celsius === true}
        onChange={updateTempMetric}
      />
      <label htmlFor="celsius">°C</label>

      <input
        type="radio"
        name="degree-type"
        id="farenheit"
        value="imperial"
        checked={celsius === false}
        onChange={updateTempMetric}
      />
      <label htmlFor="farenheit">°F</label>
    </form>
  );
};

class Temp extends React.Component {
  state = {
    celsius: "true"
  };

  updateTempMetric = event => {
    this.setState(
      {
        celsius: event.target.value
      },
      () => {
        console.log(this.state);
      }
    );
  };

  componentDidUpdate(prevState, prevProps) {
    if (this.state.celsius !== prevState.celsius) {
      console.log("toggle state has changed.");
      // todo: update the DOM.
    }
  }

  render() {
    return (
      <TempSection className="ui segment">
        <CelsiusToggle
          celsius={this.state.celsius}
          updateTempMetric={this.updateTempMetric}
        />
        <h2>
          {this.state.celsius
            ? Math.round(this.props.temp - 273.15)
            : Math.round(((this.props.temp - 273.15) * 9) / 5 + 32)}
        </h2>
      </TempSection>
    );
  }
}

export default Temp;
