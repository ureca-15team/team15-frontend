import { Link } from 'react-router-dom';
import Carousel from '../common/Carousel';
import MainBannerBlock from './MainBanner.style';


const MainBanner = ({
  exampleMain,
  exampleSide,

}) => {
  if (!exampleMain) {
    return null;
  }
  return (
    <MainBannerBlock>
    <div className="mainPost">
      <Link to="/">
        <img src={exampleMain.postImg} alt="main-banner" />
      </Link>
      <div className="content">
        <h1>{exampleMain.contents}</h1>
        <div className="user">
          <img src={exampleMain.userImg} alt="user" className='userImg' />
          <h5>{exampleMain.nickname}</h5>
        </div>
      </div>
    </div>
    <div className="sideBanner">
      <Carousel postImages={exampleSide} />
    </div>
  </MainBannerBlock>
  );
};

export default MainBanner;
