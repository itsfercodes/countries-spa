import { FC } from "react";
import Country from "../../types/Country";

const CountryCard: FC<{ country: Country }> = ({ country }) => {
  const { flags, name, region, population, capital } = country;

  return (
    <div>
      <img alt={flags.alt} src={flags.svg} width={200} />
      <h2>{name.common}</h2>
      <p>
        <strong>Population: </strong>
        {population}
      </p>
      <p>
        <strong>Region: </strong>
        {region}
      </p>
      <p>
        <strong>Capital: </strong>
        {capital}
      </p>
    </div>
  );
};
export default CountryCard;
