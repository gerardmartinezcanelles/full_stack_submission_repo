import { useState } from 'react'
import Note from './components/Note'

function App(props) {
  const [count, setCount] = useState(0)

  const animals = [
    {name:'Johan', species : 'Dog'},
    {name:'Johan 1', species : 'Dog'},
    {name:'Johan 2', species : 'Cat'},
    {name:'Johan 3', species : 'Rabbit'},
    {name:'Johan 4', species : 'Dog'}
  ]

  var isDog = function(animal) {
    return animal.species === 'Dog'
  }

  var dogs = animals.filter(isDog)

  var names = animals.map(function(animal){
    return animal.name + ' is a ' + animal.species
    }
  )
  console.log(names)

  const { notes } = props

  const notes_id = notes.map(function(note){
    return note.id
    }
  )
  console.log(notes_id)

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => 
            <Note key={note.id} note={note} />
          )}
      </ul>
      <ul>
        {animals.map(animal => <li>{animal.name}</li>)}
      </ul>
    </div>
  )
}

export default App
