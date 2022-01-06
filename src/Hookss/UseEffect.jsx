import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [count , setCount] = useState(0)
    useEffect(()=>{
        document.title = `clicked : ${count}`
    },[])
    return (
        <div>
            <button onClick={()=> setCount(count + 1)}>Click {count}</button>
        </div>
    )
}

export default UseEffect
