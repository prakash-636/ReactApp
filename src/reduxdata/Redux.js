import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./signupform";
import filterSlice from "./Filter";
const store=configureStore({
    reducer:{
        signup:formSlice.reducer,
        filter:filterSlice.reducer
    }
})
export default store