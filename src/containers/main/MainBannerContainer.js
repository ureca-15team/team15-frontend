import mainSrc from '../../assets/main.avif';
import userSrc from '../../assets/user.jpeg';
import pic1 from '../../assets/sidebanner/1.webp';
import pic2 from '../../assets/sidebanner/2.webp';
import pic3 from '../../assets/sidebanner/3.webp';
import { useEffect, useState } from 'react';

import MainBanner from '../../components/main/MainBanner';

const MainBannerContainer = () => {
  const [currImgIndex, setCurrImgIndex] = useState(0);
  const exampleMain = {
    nickname: 'Justin99',
    contents: '각자의 취향을 한 스푼씩 담은 반셀프 신혼집',
    postImg: mainSrc,
    userImg: userSrc,
  };

  const exampleSide = [pic1, pic2, pic3];


  return (
    <MainBanner
      exampleMain={exampleMain}
      currImgIndex={currImgIndex}
      exampleSide={exampleSide}
    />
  );
};

export default MainBannerContainer;
