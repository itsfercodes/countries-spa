import CountryCard from "./CountryCard";

const CountryList = () => {
  const countries = ["Mexico", "Canada"];

  return (
    <div>
      {countries.map((country) => (
        <CountryCard key={country} name={country} />
      ))}
    </div>
  );
};
export default CountryList;
