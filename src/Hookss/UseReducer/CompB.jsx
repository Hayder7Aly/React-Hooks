import React, { useContext } from 'react'
import { CountContext } from './UseReducer4'

const CompB = () => {
    const countContext = useContext(CountContext)
    return (
        <>  
            <h1>Count = {countContext.countState}</h1>
            <button onClick={()=>countContext.countDispatch('incr')}>Increment</button>
            <button onClick={()=>countContext.countDispatch('decr')}>Decrement</button>
            <button onClick={()=>countContext.countDispatch('reset')}>Reset</button>
        </>
    )
}

export default CompB
