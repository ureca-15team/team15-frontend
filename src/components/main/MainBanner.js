import { Link } from "react-router-dom";
import Carousel from "../common/Carousel";
import MainBannerBlock from "./MainBanner.style";

const MainBanner = ({
  exampleMain,
  currImgIndex,
  exampleSide,
  onIncreaseIdx,
  onDecreaseIdx,
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
          <h1> {exampleMain.contents}</h1>
          <h5>{exampleMain.nickname}</h5>
        </div>
      </div>
      <div className="sideBanner">
        <Carousel
          postImages={exampleSide}
          currImgIndex={currImgIndex}
          onIncreaseIdx={onIncreaseIdx}
          onDecreaseIdx={onDecreaseIdx}
        />
        <p className="imgLength">
          {currImgIndex + 1}/{exampleSide.length}+
        </p>
      </div>
    </MainBannerBlock>
  );
};

export default MainBanner;