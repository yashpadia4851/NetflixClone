import { configureStore } from "@reduxjs/toolkit";
import  useReducer  from "./userslice";
import  moviesReducer  from "./movieSlice"

const appstore = configureStore({
   reducer : {
    user: useReducer,
    movies : moviesReducer,
   },
});

export default appstore;