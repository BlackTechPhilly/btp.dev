import Layout from "../components/Layout";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "../darkMode";
import { lightTheme, darkTheme } from "../styles/theme";
import { Global } from "../styles/global";
import Toggle from "../styles/toggle";

function MyApp({ Component, pageProps }) {
  const [theme, toggleTheme, componentMounted] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />;
  }

  return (
    <>
      <ThemeProvider theme={themeMode}>
        <Global />
        <Layout>
          <Toggle theme={theme} toggleTheme={toggleTheme} />
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
