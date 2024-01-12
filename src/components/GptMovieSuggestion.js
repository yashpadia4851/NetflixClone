import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GptMovieSuggestion = () => {
  const { movieNames , movieResults } = useSelector((store) => store.gpt);
  if(!movieNames) return null;
  {/* you can write this also 
   const gpt = useSelector ((store) => store.gpt)
   const { movieNames , movieResults }  = gpt*/}

  return (
    <div> 
    <div className='p-3 m-4 bg-black text-white bg-opacity-80'>
    {movieNames.map((movieName , index)=> (      
    <MovieList tittle={movieName} key={movieName} movies={movieResults[index]} />))}
      </div>  

    </div>
  );
}

export default GptMovieSuggestion;
