import { configureStore } from "@reduxjs/toolkit";
import  useReducer  from "./userslice";
import  moviesReducer  from "./movieSlice"
import gptReducer from './gptSlice'
import configReducer from './configSlice'

const appstore = configureStore({
   reducer : {
    user: useReducer,
    movies : moviesReducer,
    gpt : gptReducer,
    config : configReducer,

   },
});

export default appstore;