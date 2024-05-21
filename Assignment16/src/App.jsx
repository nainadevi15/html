import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [isDark,setDark]=useState(false)
  let Change=()=>{
   setDark(!isDark)
   if(isDark==false){
     color=document.body.style.backgroundColor='white'
   }
   else{
     color=document.body.style.backgroundColor='black'
   }
  }
   
   return (
     <>
         <button onClick={Change} style={{border:'2px solid white',backgroundColor:'blue'}}>{isDark?'dark':'bright'}</button>
       
       </>
   )
 }

export default App
