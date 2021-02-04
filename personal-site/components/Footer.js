import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  ul {
    padding-top: 4rem;
    padding-bottom: 4rem;
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
    // padding: 10px 15px;
    max-width: 1000px;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <ul>
        <li>Github</li> <li>LinkedIn</li> <li>Twitter</li>
      </ul>
    </FooterContainer>
  );
}
