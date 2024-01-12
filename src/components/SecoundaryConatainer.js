import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecoundaryConatainer = () => {
  const movies = useSelector((store) => store.movies)
  return (
    movies.nowPlayingMovies && (
      <div className=' bg-black'>
        <div className='mt-0 md:-mt-72 pl-0 md:pl-12 relative z-20'>
          <MovieList tittle={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList tittle={"UpComing Movies"} movies={movies.upComingMovies} />
          <MovieList tittle={"Top Rated Movies"} movies={movies.topRatedMovies} />
          <MovieList tittle={"Popular Movies"} movies={movies.popularMoives} />
        </div>

      </div>
    )
  );
};

export default SecoundaryConatainer;  