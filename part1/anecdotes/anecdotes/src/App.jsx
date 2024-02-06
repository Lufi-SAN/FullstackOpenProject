import { useState } from 'react'

function App() {
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
   
  const [selected, setSelected] = useState(0);
  const [counter,setCounter] = useState(Array(8).fill(0));
  const [indexOfBiggestAnecdote,setIndexOfBiggestAnecdote] = useState(0);
  
  function nextAnecdote() {
     setSelected(Math.floor(Math.random() * anecdotes.length));
}
  function voteButton() {
     let arr = [...counter];
	 arr[selected]++;
	 let sortedArr = arr.toSorted((a,b) => a - b);
		console.log(arr,sortedArr);
     setCounter(arr);
	 setIndexOfBiggestAnecdote(arr.indexOf(sortedArr[sortedArr.length - 1]));
}

  return (
    <div>
	  <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
	  <p>has {counter[selected]} votes</p>
	  <div><button onClick={voteButton}>vote</button> <button onClick={nextAnecdote}>next anecdote</button></div>
	  <div><h1>Anecdote with most votes</h1><p>{anecdotes[indexOfBiggestAnecdote]}</p><p>has {counter[indexOfBiggestAnecdote]} votes</p></div>
    </div>
  )
}

export default App
