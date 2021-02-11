import { createGlobalStyle } from "styled-components";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { ThemeProvider } from "styled-components";
import useTheme from "../components/hooks/useTheme";
import { lightTheme, darkTheme } from "../styles/Theme";

const GlobalStyles = createGlobalStyle`
:root {
    --main: #e68a00;
    --mainActive: #b3613b;
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
    background-color: var(--black);
    font-family: var(--fontFamily);
    color: var(--white);
}
`;

function MyApp({ Component, pageProps }) {
  const [theme, toggleTheme] = useTheme();
  const currentTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    <>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyles />
        <NavBar toggleTheme={toggleTheme} />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
