import './App.css'
import Counter from './counter';
import Friend from './Friend';
import Friends from './Friends';
import Team from './Team';
import Users from './Users';

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
      <Friend></Friend>
      <Friends></Friends>
      <Users></Users>
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
