import { FC, useState } from "react";
import ThemeContext from "./contexts/ThemeContext";
import CountryList from "./countries/Components/CountryList";
import Header from "./ui/components/Header";

const CountriesApp: FC = () => {
  const [theme, setTheme] = useState("Light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <>
        <Header />
        <CountryList />
      </>
    </ThemeContext.Provider>
  );
};

export default CountriesApp;
