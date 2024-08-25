import './App.css'
import Counter from './counter';
import Team from './Team';

function App() {
  function handleClick() {
    alert('button clicked');
  }
  function handleClick2() {
    alert('button 2 clicked');
  }
  const addToFive = (num) => {
    alert(num + 5);
  }
  return (
    <>
      <h3>React Core concepts 2</h3>
      <Counter></Counter>
      <Team></Team>
      {/* <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>click2</button>
      <button onClick={() => { alert('third clicked') }}>third</button>
      <button onClick={() => addToFive(3)}>Four</button> */}
      


    </>
  )
}

export default App
