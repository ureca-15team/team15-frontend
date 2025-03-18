import styled from "styled-components";
import theme from "../../lib/styles/theme";

const MainBannerBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 6.5rem;
  max-width: 100%;
  overflow: hidden;

  .mainPost {
    flex: 3;
    position: relative;
    overflow: hidden;
    border-radius: 4px;
    min-width: 180px;

    img {
      /* min-width: 180px; */
      filter: brightness(88%);
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 0.1s linear;
    }

    img:hover {
      transform: scale(1.04);
    }
    .user {
      margin-top: 15px;
      display: flex;
      align-items: center;
    }

    .userImg {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      margin-right: 10px;
      margin-left: 5px;
      object-fit: cover;
    }
    .content {
      position: absolute;
      bottom: 4%;
      left: 4%;
      color: ${theme.whiteColor};
      h1 {
        font-size: 1.8rem;
        font-weight: bold;
      }
      h5 {
        font-size: 1.2rem;
      }
    }
  }

  .sideBanner {
    flex: 1;
    margin-left: 20px;
    border-radius: 4px;
    overflow: hidden;
    position: relative;
    height: 100%;

    .imgLength {
      ${theme.flexCenter}
      width: 48px;
      height: 23px;
      background-color: rgba(58, 58, 58, 0.59);
      color: white;
      position: absolute;
      bottom: 0;
      right: 0;
      margin: 10px;
      padding-left: 5px;
      font-size: 0.9rem;
      font-weight: bold;
      letter-spacing: 0.1rem;
      border-radius: 13px;
    }



  }
`;

export default MainBannerBlock;
