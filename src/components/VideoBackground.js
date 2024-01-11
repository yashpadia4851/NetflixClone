import React from 'react';
import { useSelector } from 'react-redux';
import useMoviesTrailer from '../hooks/useMoviesTrailer'

const VideoBackground = ({movieid}) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  
  useMoviesTrailer(movieid);

  return (
    <div>
      <iframe className='w-[99.99%] aspect-video'  src={
        "https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1"} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
    </div>
  );
}

export default VideoBackground;
