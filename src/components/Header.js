import React from "react";
import styled from "styled-components";

const TopHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
`;

class Header extends React.Component {
  render() {
    return (
      <TopHeader>
        <h1 className="ui teal image header">The Weather</h1>
      </TopHeader>
    );
  }
}

export default Header;
