import Head from "next/head";
import styled from "styled-components";

const ContainerStyles = styled.div`
  display: flex;
  align-items: center;
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {" "}
        <h1>Welcome to my portfolio</h1>
      </main>

      <footer>footer</footer>
    </div>
  );
}
