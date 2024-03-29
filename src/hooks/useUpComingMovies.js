import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addUpComingMovies } from '../utils/movieSlice'

const useUpComingMoives = () => {
    const dispatch = useDispatch();
    const upcomingMoives = useSelector((store) => store?.movie?.upcomingMoives)
    const getUpComingMovies = async () => {


        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS)
        const json = await data.json();
        dispatch(addUpComingMovies(json.results));

    };
    useEffect(() => {
       !upcomingMoives && getUpComingMovies();
    }, []);
}

export default useUpComingMoives;