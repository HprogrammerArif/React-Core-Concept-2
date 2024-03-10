import { useState } from "react"

export default function Counter() {
  const [count, setCount] = useState(0)

  const handleAdd = () => {
    const add = count+1;
    setCount(add)
  }

  const handleDecrease = () => {
    setCount(count-1)
  }

  return (
    <div style={{border:'2px solid black'}}>
      <h2>Count: {count}</h2>
      <button onClick={handleAdd} className="btn">Add</button>
      <button onClick={handleDecrease} className="btn">remove</button>
    </div>
  )
}