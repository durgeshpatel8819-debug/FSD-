import { useState, useEffect } from "react";

const App = () => {
  const[count,setCount]=useState(0);
  const increment=()=>{
    setCount(count+1);
    console.log("useState Called");
  }
  useEffect(()=>{
    document.title=`Count:${count}`
    console.log("Component Render");
  },[count])
  return (
    <div>
      <h1>Counter</h1>
      <div>{count}</div>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default App
