import { useState } from "react";
import Home from "./Components/Home/Home";
import { ThemeProvider } from "styled-components";

const lightTheme = {
  pageBackground: "#fff",
  butTog: "#000",
  titleColor: "#000",
  cardColor: "#F0F3FA",
};
const darkTheme = {
  pageBackground: "#1D2029",
  butTog: "#fff",
  titleColor: "#fff",
  cardColor: "#252B43",
};

const themes = {
  light: lightTheme,
  dark: darkTheme,
};

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <div>
      <ThemeProvider theme={themes[theme]}>
        <Home theme={theme} setTheme={setTheme} />
      </ThemeProvider>
    </div>
  );
}

export default App;
