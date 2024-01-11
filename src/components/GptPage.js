import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import { BACKGROUND_IMG  } from '../utils/constants';

const GptPage = () => {
  return (
    <div>
         <div className='absolute -z-10'> 
                <img src={ BACKGROUND_IMG } alt="background image" />
            </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
}

export default GptPage;
