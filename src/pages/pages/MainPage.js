import Header from "../../components/layout/Header";
import MainBannerContainer from "../../containers/main/MainBannerContainer.js";
import ShopListContainer from "../../containers/main/ShopListContainer";

const MainPage = () => {
  return (
    <>
      <Header />
      <MainBannerContainer />
      <ShopListContainer />
    </>
  );
};

export default MainPage;