import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styled from 'styled-components';

const NextArrow = ({ onClick }) => (
  <Arrow className="next" onClick={onClick}>
    <FaChevronRight />
  </Arrow>
);

const PrevArrow = ({ onClick }) => (
  <Arrow className="prev" onClick={onClick}>
    <FaChevronLeft />
  </Arrow>
);

const Carousel = ({ postImages }) => {
  const [currImgIndex, setCurrImgIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (_, next) => setCurrImgIndex(next),
  };

  return (
    <CarouselContainer>
      <StyledSlider {...settings}>
        {postImages.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`slide-${index}`} />
          </div>
        ))}
      </StyledSlider>
      <PageIndicator>
        {currImgIndex + 1} / {postImages.length}
      </PageIndicator>
    </CarouselContainer>
  );
};

export default Carousel;

const CarouselContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledSlider = styled(Slider)`
  width: 100%;
  height: 100%;
  border: 2px solid red;

  .slick-list {
    overflow: hidden;
    height: 100%;
  }

  .slick-slide {
    width: 100%;
    height: 100%;
  }

  .slick-slide > div {
    outline: none;
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
    height: 104%;
    min-height: 100%; 
    object-fit: cover;
    transition: all 0.1s linear;
    cursor: pointer;
  }
  img:hover {
      transform: scale(1.04);
    }
`;

const Arrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 50%;
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;

  &.next {
    right: 10px;
  }
  &.prev {
    left: 10px;
  }
`;

const PageIndicator = styled.div`
  position: absolute;
  bottom: 10px;
  right: -15px;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 14px;

  white-space: nowrap;
`;
