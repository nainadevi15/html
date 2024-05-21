import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  let [count,setState]=useState(0)
  let Increment=(c)=>{
    count++
    setState(count)
  }
  let Decrement=(c)=>{
    count--
    setState(count)
  }
  let Zero=(c)=>{
    count=0

    setState(count)
  }

  return (
    <>
    <h1 style={{color:'blue',textDecoration:'underline'}}>Counter App</h1>
    <p style={{fontSize:'40px',fontWeight:'bold'}}>{count}</p>
      <button onClick={Increment} style={{fontSize:'30px',borderRadius:'50%',backgroundColor:'white',color:'black',fontWeight:'bold',margin:'12px',height:'90px',textAlign:'center'}}>+</button>
      <button onClick={Decrement}  style={{fontSize:'30px',borderRadius:'50%',backgroundColor:'white',color:'black',fontWeight:'bold',margin:'12px',height:'90px',textAlign:'center'}}>-</button>
      <button onClick={Zero} style={{fontSize:'30px',borderRadius:'50%',backgroundColor:'white',color:'black',fontWeight:'bold',margin:'12px',height:'90px',textAlign:'center'}}>0</button>
    </>
  )
}


export default App
