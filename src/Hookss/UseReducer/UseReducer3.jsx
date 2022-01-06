import React, { useReducer } from 'react'

const initialState = 0;

const reducer = (state , action) => {
    if(action.type === 'incr'){
        return state + 1
    }else if(action.type === 'decr'){
        return state > 0 ? state - 1 : state
    }else{
        return 0
    }
    
}

const UseReducer3 = () => {
    const [state, dispatch] = useReducer(reducer , initialState);
    const [state2,dispatch2] = useReducer(reducer , initialState);

    return (
        <>
            <h1>count1 : {state}</h1>
            <button onClick={() => dispatch({type : 'incr'})}>Increment</button>
            <button onClick={() => dispatch({type : 'decr'})}>Decrement</button>
            <button onClick={() => dispatch({type : 'rest'})}>Reset</button>
            <h1>count2 : {state2}</h1>
            <button onClick={() => dispatch2({type : 'incr'})}>Increment</button>
            <button onClick={() => dispatch2({type : 'decr'})}>Decrement</button>
            <button onClick={() => dispatch2({type : 'rest'})}>Reset</button>

        </>
    )
}

export default UseReducer3
