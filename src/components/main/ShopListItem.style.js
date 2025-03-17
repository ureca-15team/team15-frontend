import styled from "styled-components";
import theme from "../../lib/styles/theme";

const ShopListItemBlock = styled.div`
  ${theme.flexCenterColumn}
  overflow: hidden;
  position: relative;
  .itemImg {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    overflow: hidden;
    border-radius: 7px;
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      height: 120%;
      object-fit: cover;
      transform: translate(-50%, -50%);
    }
  }
  .contents {
    width: 100%;
    min-height: 150px;
    padding: 12px 0.6rem;
    .itemName {
      font-size: 0.7rem;
      color: ${theme.darkGrayColor};
    }
    .title {
      margin: 8px 0px;
      font-size: 0.82rem;
      letter-spacing: 0.3px;
    }
    .priceContents {
      display: flex;
      width: 220px;
      gap: 5px;
      margin-top: 0.8rem;

      span {
        color: ${theme.primaryColor};
        font-weight: bold;
      }
      .price {
        font-weight: bold;
      }
      img {
        position: absolute;
        width: 80px;
        bottom: 16px;
      }
    }
  }
`;

export default ShopListItemBlock;
