import Country from "./Country"
import ShowButton from "./ShowButton"

const Countries = ({countries, search, setSearch}) => {
    const filtCountries = countries.filter(x => x.name.common.slice(0,search.length).toLowerCase() === search.toLowerCase())
    console.log(filtCountries)
    console.log('Length countries',filtCountries.length)
    console.log('Length countries',filtCountries.map(x => x.name.common))
    let retval =""
    if (filtCountries.length>10){
        return <>Too many matches, specify another filter</>
    }
    else if(filtCountries.length==0){
        return <>No countries found</>
    }
    else if(filtCountries.length>1){
        return <>
            <ul>
                {filtCountries.map((x,i)=><li key={i}>{x.name.common} <ShowButton name = {x.name.common} setSearch={setSearch}/></li>)}
            </ul>
        </>
    }
    else {
        return <>
            <Country country={filtCountries[0]}/>
        </>
    }





}

export default Countries