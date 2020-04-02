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

const Temp = props => {
  //console.log(this.state.temp.data.main.temp, "<--- tmep");
  return (
    <TempSection className="ui segment">
      <ul>
        <li>C</li>
        <li>/</li>
        <li>F</li>
      </ul>
      {/* {console.log(props.temp, "NEEW")} */}
      <h3>
        {props.temp}
        {/* {props.temp.weather.id} */}
      </h3>
    </TempSection>
  );
};

export default Temp;
