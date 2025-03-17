import styled from "styled-components";
import theme from "../../lib/styles/theme";

const MainBannerBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 6.5rem;
  max-width: 900px;
  overflow: hidden;

  .mainPost {
    flex: 2;
    position: relative;
    overflow: hidden;
    border-radius: 4px;
    min-width: 180px;

    img {
      min-width: 180px;

      width: 100%;
      height: 100%;
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
        margin: 10px;
        font-size: 1.3rem;
      }
    }
  }

  .sideBanner {
    flex: 1;
    margin-left: 20px;
    border-radius: 4px;
    overflow: hidden;
    position: relative;

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
