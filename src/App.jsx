
import './App.css'
import Counter from './counter';
import Team from './Team';
import Users from './users';
import Friends from './Friends';

function App() {
  
  function handleClick(){
    alert('Button Clicked');
  }

  function handleClick2(){
    alert('She Called you 50 times')
  }

  const addToFive=(num) =>{
      alert(num+10);
  }

  return (
    <>
      <h1>Vite + React</h1>
      <Friends></Friends>
      <Users></Users>
      <Counter></Counter>
      <Team></Team>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Here</button>
      <button onClick={() =>addToFive(10) }> Press Here</button>
      
    </>
  )
}


export default App
