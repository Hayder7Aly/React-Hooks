import React, { useReducer } from 'react'

const reducer = (state , action) => {
    if(action.type === 'incr'){
        return state + 1
    }else if(action.type === 'decr'){
        return state > 0 ? state - 1 : state
    }else{
        return 0
    }
    
}

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer , 0);

    return (
        <>
            <button onClick={() => dispatch({type : 'incr'})}>Increment</button>
            <button onClick={() => dispatch({type : 'decr'})}>Decrement</button>
            <button onClick={() => dispatch({type : 'rest'})}>Reset</button>
            <h1>{state}</h1>

        </>
    )
}

export default UseReducer
