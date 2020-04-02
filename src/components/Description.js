import React from "react";
import styled from "styled-components";

const UL = styled.ul`
  padding: 0;
  margin: 0;

  li {
    list-style-type: none;
  }
`;

class Description extends React.Component {
  render() {
    return (
      <div className="ui segment">
        <p>Sunny, no rain</p>
        <UL>
          <li>
            Wind Speed: <span>4.1</span>
          </li>
          <li>
            From: <span>East</span>
          </li>
        </UL>
      </div>
    );
  }
}

export default Description;
