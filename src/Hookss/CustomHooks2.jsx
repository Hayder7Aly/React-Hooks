import React from 'react'
import useCounter from './UseCounter'



const Counter2 = () => {
    const [count , increment , decrement , reset] = useCounter(0,2)   

    return (
        <>
            <h1>count = {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </>
    )
}
 
const CustomHooks2 = () => {
    const [count , increment, decrement , reset] = useCounter(10,5)   
    return (
        <>
            <h1>count = {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <Counter2 />
        </>
    )
}

export default CustomHooks2
