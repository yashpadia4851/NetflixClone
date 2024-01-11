
import Header from './Header';
import useNowplayingMoives from '../hooks/useNowplayingMoives'
import MainContainer from './MainContainer';
import SecoundaryConatainer from './SecoundaryConatainer';
import usePopularMovies from '../hooks/usePopularMovies';
import gettopRatedMovies from '../hooks/uesTopRatedMovies'
import  getUpComingMovies from '../hooks/useUpComingMovies'
import GptPage from './GptPage';
import { useSelector } from 'react-redux';

const Browser = () => {
  const ShowGptSearch = useSelector((store) => store.gpt.ShowGptSearch)
  useNowplayingMoives();
  usePopularMovies();
  gettopRatedMovies();
  getUpComingMovies();
  return (
    <div>
    <Header />
    { ShowGptSearch ?  <GptPage /> : <>
    <MainContainer />
    <SecoundaryConatainer />
    </>}

    </div>
  );
}

export default Browser;

    {/* 
      MainContainer
       -VideoBackground
       -video Tittle
      
      SecoundaryContainer
       -movieList * n
       - cards * n
    
    */}