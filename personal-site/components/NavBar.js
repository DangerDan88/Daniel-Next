import React from "react";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";

const NavStyles = styled.nav`
  font-family: var(--fontFamily);
  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
    padding: 10px 15px;
    max-width: 1000px;
  }
  a {
    list-style: none;
    color: var(--grey);
    text-decoration: none;
  }
  a:hover {
    color: var(--white);
  }
  a:active {
    box-shadow: 0 2px 0 var(--main);
    opacity: 1;
  }

  .port {
    border-radius: 9999px;
  }
`;

export default function NavBar({ href, name }) {
  return (
    <NavStyles>
      <ul>
        <li>
          <Image
            src="/images/portpic.jpeg"
            alt="port pic"
            height={60}
            width={60}
            className="port"
          />
        </li>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/random">
          <a>Random</a>
        </Link>
      </ul>
    </NavStyles>
  );
}
