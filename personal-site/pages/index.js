import Head from "next/head";
import styled from "styled-components";

const MainPageStyles = styled.div`
  display: flex;
  justify-content: center;
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Daniel's Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainPageStyles>
        <h1>Welcome to my portfolio</h1>
      </MainPageStyles>

      <footer>footer</footer>
    </div>
  );
}
