import styled from "styled-components";
import theme from "../../lib/styles/theme";

const HeaderBlock = styled.div`
  width: 100vw;
  position: fixed;
  top: 0;
  height: 75px;
  background-color: ${theme.whiteColor};
  display: flex;
  justify-content: center; 
  align-items: center;
  z-index: 100;
  border-bottom: 2px solid ${theme.lightGrayColor};

  .container {
    width: 100%;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center; 
  }
  

  .logo {
    width: 110px;
    min-width: 80px;
    height: 60px;
    
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .nav {
    ${theme.flexCenter}
    position: relative;
    button {
      font-weight: 400;
      border-radius: 3px;
    }
    .cart {
      font-size: 1.4rem;
      color: ${theme.mediumGrayColor};
      margin: 0 15px 0 10px;
    }
    .buyList {
      width: 80px;
      height: 40px;
    }
    input {
      padding-left: 45px;
      border: 2.125px solid ${theme.lightGrayColor};
      &:hover {
        background-color: ${theme.lightGrayColor};
      }
      &::placeholder {
        color: #bebebe;
      }
    }
  }

  @media screen and (max-width: ${theme.breakpoints.mobile}) {
    padding: 5px;
  }
`;

export default HeaderBlock;
