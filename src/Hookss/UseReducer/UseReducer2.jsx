import React ,{useReducer} from 'react'


const initialState = {
    firstCounter : 0,
    secondCounter : 10
}

const reducer = (state, action) => {

    switch(action.type){
        case "incr":
            return {...state, firstCounter : state.firstCounter + action.value}
        case "decr":
            return {...state, firstCounter : state.firstCounter - action.value}
        case "incr2":
            return {...state, secondCounter : state.secondCounter + action.value}
        case "decr2":
            return {...state, secondCounter : state.secondCounter - action.value}
        case "rest":
            return initialState
        default:
            return state
    }

}

const UseReducer2 = () => {
    const [count , dispatch] = useReducer(reducer , initialState)

    return (
        <>
            <h1>{count.firstCounter}</h1>
            <h1>{count.secondCounter}</h1>
            <button onClick={()=>dispatch({type : 'incr' , value : 1})}>Increment</button>
            <button onClick={()=>dispatch({type : 'decr' , value : 1})}>Decrement</button>
            <button onClick={()=>dispatch({type : 'incr2' , value : 5})}>Increment 5</button>
            <button onClick={()=>dispatch({type : 'decr2' , value : 5})}>Decrement 5</button>
            <button onClick={()=>dispatch({type : 'rest' , value : 0})}>Reset</button>
        </>
    )
}

export default UseReducer2
