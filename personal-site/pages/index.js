import Head from "next/head";
import styled from "styled-components";
import Link from "next/link";
import Projects from "../components/Projects";
import WeatherWidget from "../components/WeatherWidget";
import { MainHeadingStyles, ButtonStyles, Accent } from "../styles/reusable";

const MainTextStyles = styled.div`
  display: flex;
  justify-content: start;
  max-width: var(--siteWidth);
  margin: 0 auto;
  p {
    font-weight: 500;
    font-size: 24px;
    line-height: 27px;
    text-align: center;
    color: var(--white);
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
        <h1>
          Welcome, My name is <Accent>Daniel.</Accent>
        </h1>
      </MainHeadingStyles>
      <MainTextStyles>
        <p>
          I'm a freelance web developer. Open to work, this is my personal site
          where you'll find projects ive worked on and current stuff i'm
          learning.
        </p>
      </MainTextStyles>
      <MainTextStyles>
        <ButtonStyles className="pushable">
          <span className="front">
            <Link href="/about">More about me</Link>
          </span>
        </ButtonStyles>
        <WeatherWidget />
      </MainTextStyles>
      <Projects />
    </div>
  );
}
