import MainBannerContainer from '../../containers/main/MainBannerContainer.js';
import ShopListContainer from '../../containers/main/ShopListContainer';
import MainPageBlock from './MainPage.style'; // ✅ 스타일 추가

const MainPage = () => {
  return (
    <MainPageBlock>
      <div className="container"> {/* ✅ 내부 요소 정렬용 컨테이너 추가 */}
        <MainBannerContainer />
        <ShopListContainer />
      </div>
    </MainPageBlock>
  );
};

export default MainPage;