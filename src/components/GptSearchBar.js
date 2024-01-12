import React, { useRef } from 'react';
import lang from '../utils/languageConstants';
import { useDispatch, useSelector } from 'react-redux';
import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import { addGptMoviesResult } from '../utils/gptSlice'

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const ConfigKey = useSelector((store) => store.config.lang);
  const searchText = useRef();

  const searchMovieTMDB = async (movie) =>{
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie +'&include_adult=false&language=en-US&page=1', API_OPTIONS);

     const json = await data.json()
     return json.results;
  }

  const handleGPTSearchClick = async () =>{
     console.log(searchText.current.value)
    // Make a API call to GPT API and get the Movie Results 

    const gptQuery = "Act as a Movie recommendation system and suggest some movies for the query :" +
     searchText.current.value + " . Only give me names of 5movies, comma seperated like the exammple result given ahead. Example Result : Gadar, Sholay, golmaal, Koi mil gya"

    const gptResult = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery}],
      model: 'gpt-3.5-turbo',
    });
    if(!gptResult.choices) return "gptResult API is not Working"


    // console.log(gptResult.choices[0]?.message?.content)
    const gptmovies = gptResult.choices[0]?.message?.content.split(",")
    // console.log(gptmovies)

    // for each movie I will search TMDB API 
    const promiseArray = gptmovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray)
    console.log(tmdbResults) 
    dispatch(addGptMoviesResult({movieNames : gptmovies ,   movieResults: tmdbResults}))
  };

  
  return (
    <div className=' pt-[50%] md:pt-[10%] flex justify-center'>
      <form className=' bg-black w-full md:w-1/2 grid grid-cols-12 rounded-xl' onSubmit={(e) => e.preventDefault()}>
        <input ref={searchText} type="text" className='p-4 m-4 col-span-9 rounded-md' placeholder={lang[ConfigKey].gptSearchPlaceholers} />
        <button className='rounded-3xl py-2 px-4 col-span-3 m-4 text-white bg-red-700 mx-5' onClick={handleGPTSearchClick}>
          {lang[ConfigKey].Search}</button>
      </form>
    </div>  
  );
}

export default GptSearchBar;
