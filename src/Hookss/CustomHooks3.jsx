import React , {useState} from 'react'


const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue)
    const reset = () => {
        setValue(initialValue)
    }
    const bind = {
        value,
        onChange : e => {
            setValue(e.target.value)
        }
    }

    return [value,bind,reset]
}

const CustomHooks3 = () => {
    const [firstName , bindFirstName , resetFirstName] = useInput('')
    const [lastName , bindLastName , resetLastName] = useInput('')

    const submitHandler = e => {
        e.preventDefault()
        console.log(`First Name : ${firstName}\nLast Name : ${lastName}`);
        resetFirstName()
        resetLastName()
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder="firstName" {...bindFirstName} />
                <input type="text" placeholder="lastName" {...bindLastName} />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}

export default CustomHooks3
