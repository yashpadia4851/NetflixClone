import React from 'react';
import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';
import VideoTittle from './VideoTittle';

const MainContainer = () => {
  const movies = useSelector(store => store.movies?.nowPlayingMovies);
  if (!movies) return;

  const mainMovie = movies[0]
  console.log(mainMovie);

  const { original_title , overview , id } = mainMovie;
  return (
    <div>
      <VideoTittle tittle={original_title} overview={overview} />
      <VideoBackground movieid={id}/>
    </div>
  );
}

export default MainContainer;
