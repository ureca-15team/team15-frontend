import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import theme from "../../lib/styles/theme";

const Carousel = ({
  postImages,
  currImgIndex,
  onIncreaseIdx,
  onDecreaseIdx,
}) => {
  return (
    <StyledCarousel currImgIndex={currImgIndex}>
      <div className="carousel">
        <p className="icon left" onClick={onDecreaseIdx}>
          <FaChevronLeft onClick={onDecreaseIdx} />
        </p>
        <div className="bannerContainer">
          {postImages.map((img, index) => {
            return (
              <img
                src={img}
                alt="sideBanner"
                key={index}
                className="imgCarousel"
              />
            );
          })}
        </div>
        <p className="icon right" onClick={onIncreaseIdx}>
          <FaChevronRight onClick={onIncreaseIdx} />
        </p>
      </div>
    </StyledCarousel>
  );
};

export default Carousel;

const StyledCarousel = styled.div`
  .carousel {
    overflow: hidden;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    position: relative;
    cursor: pointer;

    .bannerContainer {
      transition: transform 0.7s ease-out;
      transform: translateX(-${(props) => props.currImgIndex * 100}%);
      display: flex;
      width: 100%;
      height: 100%;
      position: relative;

      .imgCarousel {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    .icon {
      display: none;
    }

    img {
      transition: all 0.1s linear;
    }
    img:hover {
      transform: scale(1.04);
    }


    &:hover {
      .imgCarousel {
        transition: transform 0.2s ease 0s;
      }
      .icon {
        height: 52px;
        width: 52px;
        border-radius: 50%;
        background-color: ${theme.whiteColor};
        z-index: 100;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        font-size: 1.4rem;
        color: ${theme.mediumGrayColor};
        ${theme.flexCenter}
        cursor: pointer;
      }
      .icon.left {
        left: 2%;
      }

      .icon.right {
        right: 2%;
      }
    }
  }
`;
