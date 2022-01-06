import React, { useEffect, useState } from 'react'
import axios from 'axios'

const UseEffectHttp = () => {
    const [list ,setList] = useState([])
    const [id,setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    const clickHandler = () => {
        setIdFromButtonClick(id)
    }

    useEffect(()=> {
        // axios.get('https://jsonplaceholder.typicode.com/posts/').then(({data})=> setList(data)).catch((error) => console.log('Error'))        
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`).then(({data})=> setList([data.body , data.id])).catch((error)=> setList('code 404 status error'))
    },[idFromButtonClick])


    return (
        <>
            <h4>UsE Effect Https Request</h4>
            {/* {
                list.map(item => {
                    return <p key={item.id}>{item.body}</p>
                })
            } */}
            <div>
                <input type="text" value={id} onChange={(event)=> setId(event.target.value)} />
                <button onClick={clickHandler}>Fetch Data</button>
            </div>
            <div>
                {list}
            </div>
        </>
    )
}

export default UseEffectHttp
