import { FC } from "react";

const CountryCard: FC<{ country: any }> = ({ country }) => {
  return <div>I&apos;m {country.name.common}!!</div>;
};
export default CountryCard;
