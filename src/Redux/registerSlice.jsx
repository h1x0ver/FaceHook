import {createSlice} from '@reduxjs/toolkit'
const registerSlice = createSlice({
    name:"register",
    initialState:{
        regdata:{
            firstname:"",
            lastname:"",
            username:"",
            email:"",
            password:'',
            confirmPassword:""
        }
    },
    reducers:{
        setRegData:(state,action)=>
        {
            state.regdata = action.payload
        }
    }
})

export default registerSlice.reducer
export const {setRegData} = registerSlice.actions