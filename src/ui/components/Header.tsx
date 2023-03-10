import { FC } from "react";
import "../../styles/ui.css";
import ThemeButton from "./ThemeButton";

const Header: FC = () => {
  return (
    <header className='header'>
      <h1>Where in the world?</h1>
      <ThemeButton />
    </header>
  );
};
export default Header;
