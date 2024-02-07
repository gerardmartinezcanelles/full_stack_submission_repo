const Header = (props) =>{
  return (
    <h1>{props.course}</h1>
  )
}

const t = [1,2,3,4,5]
t.forEach(value => {console.log(value)})

const prod = (p1,p2) => {
  console.log(p1)
  console.log(p2)
  return p1*p2
}
console.log(`Product ${prod(3,4)}`)

const Part = (props) =>{
  return (
    <p>
      {props.part} {props.exercise}
    </p>
  )
}

const Content = (props) =>{
  console.log(props)
  return (
    <div>
      <Part part={props.parts[0].name} exercise={props.parts[0].exercises} />
      <Part part={props.parts[1].name} exercise={props.parts[1].exercises} />
      <Part part={props.parts[2].name} exercise={props.parts[2].exercises} />
    </div>
  )
}

const Total = (props) =>{
  console.log(props)
  return (
    <p>
      Number of exercises {props.total[0].exercises+props.total[1].exercises+props.total[2].exercises}
    </p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course = {course.name}> </Header>
      <Content parts = {course.parts} />
      <Total total = {course.parts} />
    </div>
  )
}

export default App
