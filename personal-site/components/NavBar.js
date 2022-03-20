import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
//import WeatherWidget from "../components/WeatherWidget";

const NavStyles = styled.nav`
  font-family: var(--fontFamily);
  background-image: var(--main-bg-color);
  ul {
    // list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
    padding: 10px 15px;
    max-width: 1000px;
  }
  li {
    list-style: none;
  }
  a {
    list-style: none;
    color: var(--black);
    text-decoration: none;
    font-size: larger;
    font-weight: bold;
    &:active {
      box-shadow: 0 2px 0 var(--mainActive);
      opacity: 1;
    }
  }
  a:hover {
    color: var(--mainActive);
  }

  .port {
    border-radius: 9999px;
  }
`;

export default function NavBar() {
  return (
    <NavStyles>
      <ul>
        <li>
          <Image
            src="/images/portpic.jpeg"
            alt="port pic"
            height={70}
            width={70}
            className="port"
          />
        </li>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </ul>
    </NavStyles>
  );
}
