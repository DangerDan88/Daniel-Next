import { createGlobalStyle } from "styled-components";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { ThemeProvider } from "styled-components";
import useTheme from "../components/hooks/useTheme";
import { lightTheme, darkTheme } from "../styles/Theme";

const GlobalStyles = createGlobalStyle`
:root {
    --main: #1f004d;
    --mainActive: #99b3ff;
    --black: #161515;
    --white: #fff;
    --grey: #b3b3b3;
    --fontFamily: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
    sans-serif;
    --siteWidth: 77ch;
    --accent-color:  #e16365;
}

html,body {
    margin: 0;
    padding: 0;
    background-image: linear-gradient(to right, rgb(15, 12, 41), rgb(48, 43, 99), rgb(36, 36, 62));
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
