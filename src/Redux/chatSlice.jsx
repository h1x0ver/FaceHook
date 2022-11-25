import {createSlice} from '@reduxjs/toolkit'

const chatSlice = createSlice({
    name:"chat",
    initialState: {
        activeUser : "",
        messages: []
    },
    reducers:{
        setChatUser:(state, action)=>{
            state.activeUser = action.payload
        },
        setMessages:(state, action)=>{
            state.messages = action.payload
        }
    }
})

export default chatSlice.reducer
export const {setChatUser, setMessages} = chatSlice.actions