import styled from "styled-components";
import Image from "next/image";

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
          <a href="https://github.com/DangerDan88" target="_blank">
            <Image
              src="/images/Octocat.png"
              alt="github logo"
              height={50}
              width={50}
            />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/daniel-osornio-837547188/">
            <Image
              src="/images/linkedin.png"
              alt="linked in"
              height={50}
              width={50}
            />
          </a>
        </li>

        <li>
          <a href="#">
            <Image
              src="/images/twitter.png"
              alt="twitter icon"
              height={50}
              width={50}
            />
          </a>
        </li>
        <li>
          <a href="mailto:dangerdan808@gmail.com">
            <Image
              src="/images/gmail.png"
              alt="gmail icon"
              height={50}
              width={50}
            />
          </a>
        </li>
      </ul>
    </FooterContainer>
  );
}
