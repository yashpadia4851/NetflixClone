import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addTailerVideo } from '../utils/movieSlice';
const useMoviesTrailer = (movieid) => {

   
    const dispatch = useDispatch();
    const trailerVideo = useSelector((store) => store?.movie?.trailerVideo);
    const getMovieVideo = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/' + movieid + '/videos?language=en-US', API_OPTIONS);
        const json = await data.json();
        
        const filterData = json.results.filter((video) => video.type === "Trailer")
        const trailer = filterData.length ? filterData[0] : json.results[0];
        
        dispatch(addTailerVideo(trailer))
    };
    useEffect(() => {
        !trailerVideo &&  getMovieVideo();
    }, []);
}
export default useMoviesTrailer;
