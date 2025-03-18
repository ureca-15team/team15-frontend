import styled from "styled-components";
import theme from "../../lib/styles/theme";

export const LoginBlock = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;


  .loginBox {
    margin: 0px auto;
    max-width: 300px;
    min-height: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
    padding: 40px 0px;
  }

  .inputDiv {
    position: relative;
  }

  .loginEmailInput {
    font-size: 15px;
    transition: border-color 0.2s, box-shadow 0.2s, background-color 0.2s;
    display: block;
    box-sizing: border-box;
    height: 50px;
    width: 300px;
    padding: 13px 15px 14px;
    line-height: 40px;
    border-radius: 4px 4px 0 0;
    border: 1px solid ${(props) => props.theme.lightGrayColor};
    background-color: ${(props) => props.theme.whiteColor};
    color: ${(props) => props.theme.darkColor};
    &:hover {
      background-color: ${(props) => props.theme.whiteGrayColor};
    }
    &:focus {
      border-color: ${(props) => props.theme.primaryColor};
      outline: 1px solid ${(props) => props.theme.primaryColor};
      box-shadow: 0 0 8px ${(props) => props.theme.primaryColor};
    }
  }

  .loginPwInput {
    font-size: 15px;
    transition: border-color 0.2s, box-shadow 0.2s, background-color 0.2s;
    display: block;
    box-sizing: border-box;
    height: 50px;
    width: 300px;
    padding: 13px 15px 14px;
    line-height: 40px;
    border-radius: 0px 4px 4px 0;
    border: 1px solid ${(props) => props.theme.lightGrayColor};
    background-color: ${(props) => props.theme.whiteColor};
    color: ${(props) => props.theme.darkColor};
    &:hover {
      background-color: ${(props) => props.theme.whiteGrayColor};
    }
    &:focus {
      border-color: ${(props) => props.theme.primaryColor};
      outline: 1px solid ${(props) => props.theme.primaryColor};
      box-shadow: 0 0 8px ${(props) => props.theme.primaryColor};
    }
  }

  .loginImg {
    width: 147px;
    height: 50px;
    object-fit: contain;
    margin-bottom: 30px;
    cursor: pointer;
  }

  .loginSection {
    margin-bottom: 24px;
    gap: 20px;
    ${theme.flexCenter}
  }

  .loginDiv {
    margin-top: 24px;
    color: ${(props) => props.theme.mediumGrayColor};
    font-size: 14px;
    line-height: 18px;
  }

  .submitButton {
    margin: 20px 0;
    width: 100%;
    height: 45px;
    padding: 0px;
    background-color: ${(props) => props.theme.primaryColor};
    border-color: #35c5f0;
    color: #fff;
    font-size: 17px;
    min-height: 50px;
    font-weight: 700;
    text-decoration: none;
    text-align: center;
    transition: color 0.1s, background-color 0.1s, border-color 0.1s;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      background-color: ${(props) => props.theme.darkprimaryColor};
    }
  }

  .loginHelpSpan {
    color: #c2c8cc;
    font-size: 14px;
    line-height: 18px;
  }
`;
