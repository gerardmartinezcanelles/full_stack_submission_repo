const Course = ({course}) => {
    const Sumaexercises =  course.parts.reduce((sum,part) => sum+part.exercises ,0)
    return (
        <><h2>
            {course.name}
        </h2><p>
            {course.parts.map(part => 
                <div key={part.id}> 
                    <li> {part.name} {part.exercises} </li>
                </div>)}
        </p>
        <p>Total of {Sumaexercises} exercises</p> 
        </>
    )
  
  }

export default Course