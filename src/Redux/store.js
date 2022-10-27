import {configureStore} from '@reduxjs/toolkit'
import loginSlice from "./loginSlice";
import registerSlice from "./registerSlice";
import chatSlice from "./chatSlice";


const store = configureStore({
    reducer:{
        log:loginSlice,
        reg:registerSlice,
        chat: chatSlice
    }
})

export default store