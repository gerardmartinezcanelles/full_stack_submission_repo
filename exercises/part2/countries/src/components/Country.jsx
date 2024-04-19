import Weather from "./Weather"

const Country = ({country}) => {

    return (
    <>
    <h1>{country.name.common}</h1>

    capital: {country.capital}
    <br></br>
    area: {country.area}

    <h2>Languages</h2>
    <ul>{Object.values(country.languages).map((x,i) => <li key={i}>{x}</li>)}</ul>
    <img src={country.flags.png}/>
    <br></br>
    <br></br>
    <img src={country.coatOfArms.png} alt="Coat of Arms" style={{ width: "200px", height: "auto" }} />
    <Weather country={country}/>
    </>
    )
}

export default Country