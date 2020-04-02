import React from "react";
import styled from "styled-components";

const TimeSection = styled.section`
  padding: 1rem 5%;

  ul {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
    align-items: flex-start;
    justify-content: flex-start;
  }

  li {
    list-style-type: none;
  }
`;

class Time extends React.Component {
  state = { date: new Date(), time: new Date().toLocaleTimeString() };

  // I thought having this constantly updating was better UX for the user.
  componentDidMount() {
    setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }

  render() {
    return (
      <TimeSection className="ui segment">
        <ul>
          <li>
            {this.state.date.toLocaleDateString("en", {
              year: "numeric",
              month: "long",
              day: "2-digit"
            })}
          </li>
          <li>{this.state.time}</li>
        </ul>
      </TimeSection>
    );
  }
}

export default Time;
