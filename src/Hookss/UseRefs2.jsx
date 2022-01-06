// import React, { Component } from 'react'

// class UseRefs2 extends Component {
//     interval
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              timer : 0
//         }
//     }

//     componentDidMount(){
//         this.interval = setInterval(() => {
//             this.setState({
//                 timer : this.state.timer + 1
//             })
//         }, 1000);
//     }

//     componentWillUnmount(){
//         clearInterval(this.interval)
//     }


    
//     render() {
//         return (
//             <>
//               <h2>Timer Class ---- {this.state.timer}</h2>  
//             </>
//         )
//     }
// }

// export default UseRefs2


import React, { useEffect, useRef, useState } from 'react'

const UseRefs2 = () => {
    const [timer , setTimer] = useState(0)
    const intervalRef = useRef()
    useEffect(()=>{
         intervalRef.current = setInterval(()=>{
            setTimer(timer + 1)
        },1000)
        return () => {
            clearInterval(intervalRef.current)
        }
    })

    return (
        <>
            Hook Timer - {timer}
            <br />
            <button onClick={()=> clearInterval(intervalRef.current)}>Clear Timer</button>
            
        </>
    )
}

export default UseRefs2
