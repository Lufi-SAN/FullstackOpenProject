import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  let array;
  if(!good && !bad && !neutral) { 
     array = [];
} else {
     array = [good, neutral, bad]
}
  	
  function goodClick(){
     setGood(good + 1)
}
  function neutralClick(){
     setNeutral(neutral + 1)
}
  function badClick(){
     setBad(bad + 1)
} 

  return (
    <div>
      code here
	  <h1>give feedback</h1>
	  <div>
		  <Button text="good" handleClick={goodClick}/>
		  <Button text={"neutral"} handleClick={neutralClick}/>
		  <Button text={"bad"} handleClick={badClick}/>
	  </div>	
	  <Statistics array={array}/>
    </div>
  )
}

function Button({text, handleClick}) {
	return <button onClick={handleClick}>{text}</button>
}

function Statistics({array}) {
	let all = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
	let positive = (array[0]/all) * 100;
	let average = (array[0] + -array[2])/all;
 	
	if (array.length < 1) { 
	    return(
            <>
		        <h1>Statstics</h1>
		        <p>No feedback given</p>
	        </>
        )
 }
    return(
        <>
		    <h1>Statstics</h1>
			<StatisticLine text="good" value={array[0]}/>
			<StatisticLine text={"neutral"} value={array[1]}/>
			<StatisticLine text={"bad"} value={array[2]}/>
			<StatisticLine text={"all"} value={all}/>
			<StatisticLine text={"average"} value={average}/>
			<StatisticLine text={"positive"} value={positive + "%"}/>
        </>
    )
}

function StatisticLine({text, value}) {
	return <p>{text} {value}</p>
}
export default App