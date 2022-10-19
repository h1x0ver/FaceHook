import {createSlice} from '@reduxjs/toolkit'
const registerSlice = createSlice({
    name:"register",
    initialState:{
        search:""
    },
    reducers:{
        setSearch:(state, action)=>{
            state.search = action.payload
        }
    }
})

export default registerSlice.reducer
export const {setSearch} = registerSlice.actions