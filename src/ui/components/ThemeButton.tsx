import { FC, useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";

const ThemeButton: FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const onThemeChange = () => {
    const isCurrentThemeLight = theme === "Light";
    setTheme(isCurrentThemeLight ? "Dark" : "Light");
  };

  return (
    <label>
      <input
        type={"checkbox"}
        name='checkbox'
        checked={theme === "Light"}
        onChange={onThemeChange}
      ></input>
      {theme} Mode
    </label>
  );
};
export default ThemeButton;
