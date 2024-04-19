import { useState, useEffect } from 'react'
import countriesServices from './services/countries'
import Countries from './components/Countries'

function App() {
  const [search, setSearch] = useState("")
  const [countries, setCountries] = useState([])

  useEffect(() => {
    countriesServices.getAll().then((res) => setCountries(res.data))
  },[])

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  return (
    <>
      <h1>
        Countries
      </h1>
      <div>
        find countries: <input type = "text" value={search} onChange={handleChange} />
      </div>
      <div>
        <Countries countries={countries} search={search} setSearch={setSearch} />
      </div>
    </>
  )
}

export default App
