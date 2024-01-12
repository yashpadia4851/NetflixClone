import React from 'react';

const VideoTittle = ({tittle,overview}) => {
  return (
    <div className=' aspect-video pt-[12%] px-3  md:px-6 absolute text-white '>
      <h1 className='font-semibold md:font-bold text-xl md:text-4xl'>{tittle}</h1>
      <p className='hidden md:inline-block py-6 text-xl w-4/12'>{overview}</p>
      <div>
            <button className='bg-white mt-5 md:mt-0 text-black py-2 md:py-4 px-5 md:px-12 text-base md:text-xl rounded-lg hover:bg-opacity-90'>▶Play</button>
            <button className= 'hidden md:inline-block mx-2 bg-gray-700 text-white p-4 px-10 text-xl rounded-lg'>More Info</button>
      </div>
    </div>
  );
}

export default VideoTittle;
