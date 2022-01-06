import React, { useState,  useEffect } from 'react'


const useTitle = (count) => {
    useEffect(() => {
        document.title = `Count (${count})`
    }, [count])
}


const CustomHooks1 = () => {
    const [count , setCount] = useState(0)
    const [count2 , setCount2] = useState(0)
    useTitle(count)
    useTitle(count2)
    return (
        <>
            <button onClick={()=>setCount(count + 1)}>Count - {count}</button>
            <button onClick={()=>setCount2(count2 + 1)}>Count - {count2}</button>
        </>
    )
}

export default CustomHooks1
