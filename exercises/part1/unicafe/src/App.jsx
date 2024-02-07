import { useState } from 'react'

const StatisticLine = (props) => {
  return (
    <tr>
      <td> {props.text} </td>
      <td>{props.value} </td>
    </tr>
  )
}

const Average_statistics = (props) => {
  if (props.allClicks>0){
  return( 
    <table>
      <tbody>
      <StatisticLine text="good" value={props.good} />
      <StatisticLine text="neutral" value={props.neutral} />
      <StatisticLine text="bad" value={props.bad} />
      <StatisticLine text="all" value={props.allClicks} />
      <StatisticLine text="average" value={(props.good-props.bad)/(props.good+props.bad+props.neutral)} />
      <StatisticLine text="positive rate" value={100*(props.good)/(props.good+props.bad+props.neutral)} />
      </tbody>
    </table>
    )
  } else {
    return (
      <div>
        <p> No feedback given</p>
      </div>
    )
  }
}


function App() {
  const [good, setCountgood] = useState(0)
  const [neutral, setCountneutral] = useState(0)
  const [bad, setCountbad] = useState(0)
  const [allClicks, setAll] = useState(0)

  const handlegoodClick = () => {
    setCountgood(good + 1)
    setAll(allClicks+1)
  }

  const handleneutralClick = () => {
    setCountneutral(neutral + 1)
    setAll(allClicks+1)
  }

  const handlebadClick = () => {
    setCountbad(bad + 1)
    setAll(allClicks+1)
  }

  return (
      <div>
        <h1>Give feedback</h1>
        <button onClick={handlegoodClick}>good</button>

        <button onClick={handleneutralClick}>neutral</button>

        <button onClick={handlebadClick}>bad</button>

        <h2>statistics</h2>

        <Average_statistics allClicks = {allClicks} good={good} neutral={neutral} bad={bad} /> 
      </div>

  )
}

export default App
