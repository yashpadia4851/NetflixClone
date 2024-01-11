import React from 'react';

const VideoTittle = ({tittle,overview}) => {
  return (
    <div className=' aspect-video pt-[12%] px-6 absolute text-white '>
      <h1 className='font-bold text-4xl'>{tittle}</h1>
      <p className='py-6 text-lg w-4/12'>{overview}</p>
      <div className="">
            <button className='bg-white text-black p-4 px-12 text-xl rounded-lg hover:bg-opacity-90'>▶Play</button>
            <button className= 'mx-2 bg-gray-700 text-white p-4 px-10 text-xl rounded-lg'>More Info</button>
      </div>
    </div>
  );
}

export default VideoTittle;
