import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, tittle }) => {

    return (
        
            <div className='px-6 '>
                <h1 className='text-lg md:text-3xl py-4 font-medium text-white'>{tittle}</h1>
                <div className='flex overflow-x-scroll'>
                    <div className='flex'>
                    {movies?.map((movie) => (
                    <MovieCard key={movie.id} posterPath={movie.poster_path} />))};
                    </div>
                </div>
            </div>
    );
}
    
export default MovieList;
