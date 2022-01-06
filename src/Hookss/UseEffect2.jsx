import React, { useEffect, useState } from 'react'

const UseEffect2 = () => {
    const [count ,setCount] = useState(5)

    useEffect(()=>{
        console.log('useeffect');
       const interval =  setTimeout(()=>{
            setCount(count - 1)
        },1000)
        if(count === 0){
            clearInterval(interval)
        }
    },[count])

    return (
        <>
            <h1>{count}</h1>
        </>
    )
}

export default UseEffect2
