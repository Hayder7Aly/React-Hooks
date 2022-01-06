// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

// const UseReducerHttp = () => {
//     const [state, setState] = useState([])
//     const [error , setError] = useState('')
//     const [loading , setLoading] = useState(true)

//     useEffect(()=>[
//         axios.get('https://jsonplaceholder.typicode.com/posts').then(({data})=> {
//             setState(data)
//             setLoading(false)
//             setError('')
//         }).catch(error => {
//             setError(error) 
//             setLoading(false)
//             setState([])

//         })


        
//     ],[])

//     if(loading){
//         return <h3>Loading ...</h3>
//     }

//     return (
//         <>  
//             {error === '' ? error : <h3>404 Page eroro</h3>}
//             {state.map(item => <h3 key={item.id}>{item.body}</h3>)}

//         </>
//     )
// }
  
// export default UseReducerHttp


import axios from 'axios'
import React, { useEffect, useReducer } from 'react'
const initalState = {
    loading : true,
    error : '',
    posts : []
}
const reducer = (state , action) => {
    switch(action.type){
        case "FETCH_SUCCES":
            return {
                loading : false,
                posts : action.payload,
                error : ''
            }
        case "ERROR":
            return {
                loading : false,
                posts : {},
                error :'some thing went wrong !'

                

            }
        default:
            return state
    }
}

const UseReducerHttp = () => {
    const [state , dispatch] = useReducer(reducer , initalState)
    useEffect(()=>[
        axios.get('https://jsonplaceholder.typicode.com/posts').then(({data})=> {
            dispatch({type : 'FETCH_SUCCES' , payload : data})
        }).catch(error => {
            dispatch({type: 'ERROR' })
            })
                
        ],[])

    if(state.loading){
        return <h1>Loading ....</h1>
    }

    if(state.error !== ""){
        return <h2>Error 404 page not found error ...</h2>

        
    }
    
    return (
        <>
            {state.posts.map(item => <h3 key={item.id}>{item.body}</h3>)}
        </>
    )
}

export default UseReducerHttp
