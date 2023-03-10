import { createContext } from "react";

const ThemeContext = createContext({
  theme: "",
  setTheme: (theme: string) => {
    undefined;
  },
});

export default ThemeContext;
