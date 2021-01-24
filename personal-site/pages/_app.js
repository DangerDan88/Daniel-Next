import { createGlobalStyle } from "styled-components";
import NavBar from "../components/NavBar";

const GlobalStyles = createGlobalStyle`
:root {
    --orange: #ff9900;
    --black: #161515;
    --white: #fff;
    --fontFamily: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
    sans-serif;
}

html,body {
    margin: 0;
    padding: 0;
    background-color: var(--black);
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
    </>
  );
}

export default MyApp;