import './App.css'
import Team from './Team';
import Users from './Users';
import Counter from './counter';
import Friends from './friends';

function App() {
function handlerFunc(params) {
  alert("Button 1 is clicked");
}

const handlerFunc2 = () => {
  alert("Button 2 was clicked")
}

const addToFive = (add) => {
     alert( `${add+5},'"Add to five is working",'`);
}

  return (
    <>
      <h1 >React Core Concept</h1>
      <Friends></Friends>
      <Users></Users>
      <Counter></Counter>
       <Team></Team>

        <button onClick={handlerFunc} className='btn'>Click Me Btn 1</button>
        <button onClick={handlerFunc2} className='btn'>Click Me Btn 2</button>
        <button onClick={() => {alert("Button 3 was clicked")}} className='btn'>Click Me Btn 3</button>
        <button onClick={()=>{addToFive(3)}} className='btn'>Click Me Btn 4</button>
    </>
  )
}

export default App
