
import Header from './Header';
import useNowplayingMoives from '../hooks/useNowplayingMoives'
import MainContainer from './MainContainer';
import SecoundaryConatainer from './SecoundaryConatainer';

const Browser = () => {
  useNowplayingMoives();
  return (
    <div>
    <Header />
    <MainContainer />
    <SecoundaryConatainer />

    {/* 
      MainContainer
       -VideoBackground
       -video Tittle
      
      SecoundaryContainer
       -movieList * n
       - cards * n
    
    */}
    </div>
  );
}

export default Browser;
