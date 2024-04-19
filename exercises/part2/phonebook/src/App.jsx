import { useState } from 'react'
import Person from './components/Number'
import Filter from './components/Filter'

const App = (props) => {

  const [persons, setPersons] = useState(props.persons)
  //const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [personsFilter, setPersonsFilter] = useState(persons)


  const addPerson = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber
    }

    setPersons(persons.concat(nameObject))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }
    
  const handleFilter = (event) => {
    console.log(event.target.value)
    const filterObject = event.target.value
    setFilter(filterObject)
    const personsCopy = persons.filter(person => person.name.toLowerCase().includes(filterObject))
    setPersonsFilter(personsCopy)
  }

  
  
  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filter={filter} handleFilter={handleFilter} />

      <h3>Add a new contact</h3>
      <form onSubmit={addPerson}>
      name: <input value={newName} 
        onChange={handleNameChange}/>

      <br></br>
   
      number: <input value={newNumber} 
        onChange={handleNumberChange}/>

      <button type="submit">save</button>
      </form> 
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => 
          <Person key={person.name} person={person} />
        )}
      </ul>
    </div>
  )
}

export default App
