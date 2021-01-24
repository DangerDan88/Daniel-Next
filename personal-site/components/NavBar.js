import React from "react";
//import Link from "next/link";
import styled from "styled-components";

const NavStyles = styled.nav`
  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 10px 15px;
    max-width: 1000px;
  }
`;

export default function NavBar() {
  return (
    <NavStyles>
      <ul>
        <li>Logo</li>
        <li>Home</li>
        <li>About</li>
        <li>WIAD</li>
      </ul>
    </NavStyles>
  );
}
