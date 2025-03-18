import MainBannerContainer from '../../containers/main/MainBannerContainer.js';
import ShopListContainer from '../../containers/main/ShopListContainer';
import MainPageBlock from './MainPage.style'; 

const MainPage = () => {
  return (
    <MainPageBlock>
      <div className="container"> 
        <MainBannerContainer />
        <ShopListContainer />
      </div>
    </MainPageBlock>
  );
};

export default MainPage;