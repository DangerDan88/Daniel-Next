import { createGlobalStyle } from "styled-components";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const GlobalStyles = createGlobalStyle`
:root {
    --accent-color: #1f004d;
    --main-bg-color: linear-gradient(to right, rgb(86, 20, 176), rgb(219, 214, 92));
    --mainActive: #ffd700;
    --black: #161515;
    --white: #fff;
    --grey: #b3b3b3;
    --fontFamily: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
    sans-serif;
    --siteWidth: 77ch;
}

html,body {
    margin: 0;
    padding: 0;
    background-image: var(--main-bg-color);
    font-family: var(--fontFamily);
    color: var(--white);
} 
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
