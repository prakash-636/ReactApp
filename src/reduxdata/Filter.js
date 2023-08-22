import { createSlice } from "@reduxjs/toolkit";

const initialfilterdata={filters:{}}
const filterSlice=createSlice({
    name:"filter",
    initialState:initialfilterdata,
    reducers:{
        addfilters(state,action){
state.filters={...action.payload}
        },
        previousfrom(state){
            state.counterFrom=state.counterFrom-1
        },
        adddata(state,action){
state.profiledata={...action.payload}
        }
    }
})
export const filtersliceaction=filterSlice.actions
export default filterSlice