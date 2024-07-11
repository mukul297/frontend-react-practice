import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  function onClickHandler(){
    setCount(count + 1);
  }

  return (
      <div>
        {/* rendering */}
        <CustomButton count = {count} setCount = {setCount}></CustomButton>
      </div>
  )
}

//Component
function CustomButton(props) {
  function onClickHandler() {
      props.setCount(props.count + 1);
  }
  return <button onClick = {onClickHandler}> Counter {props.count}</button>
}
// useState is a hook
export default App
