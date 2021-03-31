import React from "react";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";

const NavStyles = styled.nav`
  font-family: var(--fontFamily);
  background-image: linear-gradient(
    to right,
    rgb(18, 194, 233),
    rgb(196, 113, 237),
    rgb(246, 79, 89)
  );
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
    font-size: x-large;
    &:active {
      box-shadow: 0 2px 0 var(--main);
      opacity: 1;
    }
  }
  a:hover {
    color: var(--white);
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
            height={60}
            width={60}
            className="port"
          />
        </li>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>Blog</a>
        </Link>
      </ul>
    </NavStyles>
  );
}
