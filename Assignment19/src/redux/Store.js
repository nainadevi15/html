import {configureStore } from  "@reduxjs/toolkit"
import counterReducer from'./Counter'
  let store=configureStore({
    reducer:{
        counter:counterReducer
    }
 })
 export default store