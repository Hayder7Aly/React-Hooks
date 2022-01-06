import React, { useContext, useRef } from 'react'
import { context } from './context/Context'


const AddTods = () => {
    const {dispatch} = useContext(context)
    const todo = useRef()

    return (
        <div>
            <input type="text" placeholder='add todo' ref={todo} />        
            <button onClick={() => dispatch({type : 'ADD', payload : todo.current.value})}>Add Todo</button>
        </div>
    )
}

export default AddTods
