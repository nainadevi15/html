import { createSlice } from "@reduxjs/toolkit";



let counterSlice=createSlice({
    name:'counter',
    initialState:{value:0},
    reducers:{
        Increment:(state)=>{
            state.value++
        },
        Decrement:(state)=>{
             state.value--
        }
    }
})
export default counterSlice.reducer
export  const  {Increment,Decrement,IncrementBy10}=counterSlice.actions