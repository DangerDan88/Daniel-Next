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
    max-width: 1000px;
  }
  a {
    list-style: none;
    color: var(--black);
    text-decoration: none;
    //TODO fix hover style active state for nav links next doesnt read active state from anchor tag need to use next/router i think and figure out footer for every page
    &:active {
      box-shadow: 0 2px 0 var(--main);
      opacity: 1;
    }
  }
  a:hover {
    color: var(--mainActive);
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <ul>
        <li>
          <a href="https://github.com/DangerDan88">Github</a>
        </li>

        <li>
          <a href="https://www.linkedin.com/in/daniel-osornio-837547188/">
            LinkedIn
          </a>
        </li>

        <li>
          <a href="#">Twitter</a>
        </li>
        <li>
          <a href="mailto:dangerdan808@gmail.com">Contact</a>
        </li>
      </ul>
    </FooterContainer>
  );
}
