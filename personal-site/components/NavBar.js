import React from "react";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";

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
            height={50}
            width={50}
            className="port"
          />
        </li>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/wiad">WIAD</Link>
      </ul>
    </NavStyles>
  );
}
