import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
 
  const getRandomanecdote = () => {
    const random_num = Math.floor(Math.random() * anecdotes.length)
    console.log(random_num)
    setSelected(random_num)
  }

  const VoteAnecdote = (props) => {
    const Newvotes = [...votes]
    Newvotes[selected] +=1
    setVotes(Newvotes)
  }

  const getMaxIndex = (arr) => {
    return arr.reduce((maxIndex, currentValue, index, array) => 
        currentValue > array[maxIndex] ? index : maxIndex, 0);
  }

  const Getmorevotes = (props) => {
    const Max_votes_index =  getMaxIndex(props.votes)
    return (
      <div>
        <h2>Anecdote with most votes</h2>
        <p>
          {props.anecdotes[Max_votes_index]}
        </p>
        <p>
          has {props.votes[Max_votes_index]} votes
        </p>
      </div>
    )

  }

  return (
    <div>
      <h2>Anectode of the day</h2>
      <p>{anecdotes[selected]} </p>
      <p>Has {votes[selected]}</p>
      <button onClick={VoteAnecdote} votes={votes} selected = {selected} >vote anecdote</button>
      <button onClick={getRandomanecdote}>next anecdote</button>
      <Getmorevotes votes={votes} anecdotes={anecdotes} />
    </div>
  )
}

export default App