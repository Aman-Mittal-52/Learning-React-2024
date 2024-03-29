function CountriesCard({id ,country , rank , population}) {
  return (
    <tr data-testid="country-card">
      <td>{id}</td>
      <td data-testid="country-card-name">{country}</td>
      <td data-testid="country-card-population">{population}</td>
      <td>{rank}</td>
    </tr>
  );
}

export default CountriesCard;