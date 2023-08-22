import { createSlice } from "@reduxjs/toolkit";

const initialfromdata={counterFrom:1,profiledata:{}}
const formSlice=createSlice({
    name:"signupfrom",
    initialState:initialfromdata,
    reducers:{
        handlecurrentfrom(state){
state.counterFrom=state.counterFrom+1
        },
        previousfrom(state){
            state.counterFrom=state.counterFrom-1
        },
        adddata(state,action){
state.profiledata={...action.payload}
        }
    }
})
export const fromsliceaction=formSlice.actions
export default formSlice