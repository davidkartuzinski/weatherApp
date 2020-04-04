import React from "react";
import styled from "styled-components";
import ConvertDegrees from "../utils/convertFromDegrees";

const UL = styled.ul`
  padding: 0;
  margin: 0;

  li {
    list-style-type: none;
  }
`;

const P = styled.p`
  text-transform: capitalize;
`;

class Description extends React.Component {
  render() {
    const cardinalDirection = ConvertDegrees(this.props.windDirection);

    return (
      <div className="ui segment">
        <P>{this.props.description}</P>
        <UL>
          <li>
            Wind Speed:{" "}
            <span>{`${Math.round(this.props.windSpeed * 3.6)} km/h`}</span>
          </li>
          <li>
            From: <span>{cardinalDirection}</span>
          </li>
        </UL>
      </div>
    );
  }
}

export default Description;
