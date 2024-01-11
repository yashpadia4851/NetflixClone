
import { createSlice } from '@reduxjs/toolkit';


const movieSlice = createSlice({
    name: "movies",
    initialState : {
        nowPlayingMovies : null,
        trailerVideo : null,
    },
    reducers : {
        addNowPlayingMovies : (state , action) =>{
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies : (state , action)=>{
            state.popularMoives = action.payload;
        },
        addTopRatedMovies : (state , action)=>{
            state.topRatedMovies = action.payload;
        },
        addUpComingMovies : (state , action)=>{
            state.upComingMovies = action.payload;
        },
        addTailerVideo : (state , action)=>{
            state.trailerVideo = action.payload;
        }
    }
})
export const { addNowPlayingMovies , addTailerVideo , addPopularMovies , addTopRatedMovies , addUpComingMovies} = movieSlice.actions;
export default movieSlice.reducer;
