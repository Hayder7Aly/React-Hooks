import { useState } from "react"

const useCounter = (initalValue = 0 , value) => {
    const [count , setCount] = useState(initalValue)

    const increment = () =>{
        setCount((preVal) => preVal + value)
    }
    const decrement = () =>{
        setCount((preVal) => preVal - value)
    }
    const reset = () => {
        setCount(0)
    }

    return [count , increment , decrement , reset]
}

export default useCounter
