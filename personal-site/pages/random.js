import Head from "next/head";
import styled from "styled-components";
import Image from "next/image";

const HobbieHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const HobbieImageContainerStyles = styled.div`
  display: flex;
  justify-content: center;
  max-width: var(--siteWidth);
  margin: 0 auto;
  padding: 0 15px;
  padding-top: 2rem;
  img {
    border-radius: 25px;
  }
`;

const MainHobbieTextStyles = styled.div`
  display: flex;
  justify-content: center;
  max-width: var(--siteWidth);
  margin: 0 auto;
  p {
    font-weight: 500;
    font-size: 17px;
    line-height: 27px;
    text-align: center;
    color: var(--grey);
  }
`;

export default function About() {
  return (
    <div>
      <Head>
        <title>Daniel's Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HobbieHeaderContainer>
        <h1>What i'm doing</h1>
      </HobbieHeaderContainer>
      <HobbieImageContainerStyles>
        <Image
          src="/images/habitbook.jpg"
          alt="Picture of the author"
          width={400}
          height={400}
        />
      </HobbieImageContainerStyles>
      <MainHobbieTextStyles>
        <p>
          I am currently reading this book to help form small but lasting habits
          in my life.
        </p>
      </MainHobbieTextStyles>
    </div>
  );
}
