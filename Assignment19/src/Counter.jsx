import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Decrement,Increment, IncrementBy10 } from "./redux/Counter";


function Counter(){
    let count =useSelector((state)=>state.counter.value)
    let dispatch=useDispatch()
    return(
        <div >
            <h1 style={{textDecoration:'underline',color:'yellow'}}>COUNTER APP</h1>
            <button onClick={()=>dispatch(Increment())} style={{backgroundColor:'blue',fontWeight:'bold',fontSize:'25px'}} >Increment</button>
            <p style={{backgroundColor:'white',color:'black',borderRadius:'50%',marginLeft:'120px',width:'100px',height:'100px',textAlign:'center', boxSizing:'border-box',padding:'20px',fontSize:'40px'}}>{count}</p>
            <button onClick={()=>dispatch(Decrement())} style={{backgroundColor:'blue',fontWeight:'bold',fontSize:'25px'}}>Decrement</button>
            </div>

    )
}
export default Counter