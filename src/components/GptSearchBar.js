import React from 'react';
import lang from '../utils/languageConstants';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
  const ConfigKey = useSelector((store) => store.config.lang);

  return (
    <div className='pt-[16%] flex justify-center relative'>
      <form className=' bg-black w-1/2 grid grid-cols-12 rounded-xl'>
        <input type="text" className='p-4 m-4 col-span-9' placeholder={lang[ConfigKey].gptSearchPlaceholers} />
        <button className='rounded-full py-2 px-4 col-span-3 m-4 text-white bg-red-700 mx-5'>{lang[ConfigKey].Search}</button>
      </form>
    </div>  
  );
}

export default GptSearchBar;
