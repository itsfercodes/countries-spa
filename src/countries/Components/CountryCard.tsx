import { FC } from "react";

const CountryCard: FC<{ name: string }> = ({ name }) => {
  return <div>I&apos;m a {name}!!</div>;
};
export default CountryCard;
