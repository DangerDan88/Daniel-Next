import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Daniel's Site</title>
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
