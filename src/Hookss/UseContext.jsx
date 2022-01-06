import React, { createContext, useContext } from 'react'
const FirstName = createContext()

const CompC = () => {
    const context = useContext(FirstName)
    return (
        <>
            <FirstName.Consumer>
                {(userName) =>  <h1>Hello {context}</h1>}
            </FirstName.Consumer>
        </>
    )
}

const CompB = () => {
    return <CompC />
}

const CompA = () => {
    return <CompB />
}

const UseContext = () => {
    return (
        <>
            <FirstName.Provider value="hayder aly jutt">
                <CompA />
            </FirstName.Provider>
        </>
    )
}

export default UseContext
