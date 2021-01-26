import Head from "next/head";
import styled from "styled-components";
import Image from "next/image";

const ImageStyles = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2rem;
`;

const ContentStyles = styled.div`
  display: flex;
  justify-content: center;
`;

export default function About() {
  return (
    <div>
      <Head>
        <title>Daniel's Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ImageStyles>
        <Image
          src="/images/portpic.jpeg"
          alt="port pic"
          height={200}
          width={200}
        />
      </ImageStyles>
      <ContentStyles>
        <h1>About me</h1>
      </ContentStyles>
    </div>
  );
}
