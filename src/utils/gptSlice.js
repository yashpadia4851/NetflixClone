import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name : "gpt",
    initialState :{ ShowGptSearch : false , movieResults : null , movieNames : null}  ,
    reducers : {
        toggleGptSearchView : (state , action) =>{
            state.ShowGptSearch = !state.ShowGptSearch;
        },
        addGptMoviesResult : (state , action) =>{
            const { movieNames , movieResults } = action.payload
            state.movieNames = movieNames ;
            state.movieResults = movieResults ;
        }           
    }
})
export const { toggleGptSearchView , addGptMoviesResult } = gptSlice.actions;
export default gptSlice.reducer;    