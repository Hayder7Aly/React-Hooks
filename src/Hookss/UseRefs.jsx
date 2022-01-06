import React, { useEffect, useRef, useState } from 'react'

const UseRefs = () => {
    const [name, setName] = useState("")
    const inputName = useRef("")
    const clickHanlder = () => {
        setName(inputName.current.value)
    }   

    useEffect(()=>{
        inputName.current.focus()
    },[])



    return (
        <>
            <input type="text" ref={inputName} />
            <button onClick={clickHanlder}>show name</button>
            <h1>{name}</h1>
        </>
    )
}

export default UseRefs

