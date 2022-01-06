  import React, { useState } from 'react'
  
  const UseState = () => {
      const [count , setCount] = useState(1) 
      const [fiveCount , setFiveCount] = useState(5)
      const incremnetFive = () => {
            for(let i = 0 ; i<5; i++){
                setFiveCount((preVal) => preVal + 1)
            }
      }
   
      return (
          <>
              <button onClick={() => setCount(count + 1)}>Click Me {count}</button>
              <button onClick={incremnetFive}>Click Me {fiveCount}</button>
          </>
      )
  }
  
  export default UseState
  