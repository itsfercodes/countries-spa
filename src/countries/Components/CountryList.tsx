import { useEffect, useState } from "react";
import "../../styles/countries.css";
import Country from "../../types/Country";
import CountryCard from "./CountryCard";

const CountryList = () => {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div className='countries-list'>
      {countries.map((country) => (
        <CountryCard key={country.cca3} country={country} />
      ))}{" "}
    </div>
  );
};
export default CountryList;
