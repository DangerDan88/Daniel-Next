import Head from "next/head";
import styled from "styled-components";
import Link from "next/link";
import Projects from "../components/Projects";

const MainHeadingStyles = styled.div`
  display: flex;
  justify-content: center;
  max-width: var(--siteWidth);
  margin: 0 auto;
  padding: 0 15px;
`;

const MainTextStyles = styled.div`
  display: flex;
  justify-content: start;
  max-width: var(--siteWidth);
  margin: 0 auto;
  p {
    font-weight: 500;
    font-size: 17px;
    line-height: 27px;
    text-align: center;
    color: var(--white);
  }
`;
const ButtonStyles = styled.button`
  background-color: var(--black);
  color: var(--white);
  padding: 0.75rem;
  border: none;
  border-radius: 5px;
  border-color: var(--main);
  font-size: 17px;
  line-height: 27px;
  font-weight: 500;
  &:hover {
    background-color: var(--mainActive);
    opacity: 1;
    transition: background-color 200ms ease-out, color 200ms ease-out;
  }
  a {
    color: var(--white);
    text-decoration: none;
  }
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Daniel's Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainHeadingStyles>
        <h1>Welcome, My name is Daniel.</h1>
      </MainHeadingStyles>
      <MainTextStyles>
        <p>
          I'm a freelance web developer. Open to work this is my personal site
          where you'll find projects ive worked on and current stuff i'm
          learning.
        </p>
      </MainTextStyles>
      <MainTextStyles>
        <ButtonStyles>
          <Link href="/about">More about me</Link>
        </ButtonStyles>
      </MainTextStyles>
      <Projects />
    </div>
  );
}
