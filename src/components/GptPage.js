import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import { BACKGROUND_IMG } from '../utils/constants';

const GptPage = () => {
  return (
    <>
      <div className='fixed -z-10'>
        <img className='min-h-screen object-cover' src={BACKGROUND_IMG} alt="background image" />
      </div>
      <div className=''>
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </>
  );
}

export default GptPage;
