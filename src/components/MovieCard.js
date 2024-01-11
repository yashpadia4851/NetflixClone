import React from 'react';
import {IMG_CDN_MOVIE_LIST} from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-[200px] pr-4' >
      <img src={IMG_CDN_MOVIE_LIST + posterPath } alt="Movie Card" />
    </div>
  );
}

export default MovieCard;
