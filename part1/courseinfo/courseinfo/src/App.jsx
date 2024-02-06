import React from 'react';

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
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total exercises={course.parts.map(i => i.exercises)} />
    </div>
  )
}



function Header({course}) {
	return <h1>{course}</h1>
}

function Content({parts}) {
   return(
      <>
	 <Part part={parts[0].name} exercises={parts[0].exercises} />
	 <Part part={parts[1].name} exercises={parts[1].exercises} />
	 <Part part={parts[2].name} exercises={parts[2].exercises} />
      </>
   )
}

function Total({exercises}) {
   return <p>Number of exercises {exercises[0] + exercises[1] + exercises[2]}</p>
}

function Part({part, exercises}) {
   return <p>{part} {exercises}</p>
}

export default App