import styled from "styled-components";
import theme from "../../lib/styles/theme";

export const RegisterBlock = styled.section`
  padding-top: 40px;
  width: calc(100% - 18px);
  margin: auto;

  .registerBox {
    width: 360px;
    margin: 0px auto;
    padding: 60px 0px;

    > div {
      margin: 30px auto 30px 0;
      width: 360px;
      border-bottom: 1px solid ${(props) => props.theme.lightGrayColor};
      > h1 {
        font-size: 20px;
        font-weight: bold;
      }
    }

    ${theme.flexCenterColumn}
  }

  .RegisterImg {
    width: 88px;
    height: 31px;
    object-fit: contain;
    cursor: pointer;
  }

  .registerDiv {
    margin-bottom: 30px;
  }

  .registerlabel {
    display: block;
    margin-bottom: 12px;
    font-size: 16px;
    line-height: 20px;
    font-weight: 700;
    color: ${(props) => props.theme.darkColor};
    letter-spacing: -0.3px;
    word-break: keep-all;
  }

  .resisterExplan {
    margin-bottom: 10px;
    font-size: 14px;
    line-height: 18px;
    color: #828c94;
    letter-spacing: -0.3px;
  }

  .resisterP {
    color: ${(props) => props.theme.darkColor};
    font-size: 15px;
    text-align: center;
    margin-top: 30px;
  }

  .emailDiv {
    display: flex;
  }

  .emailSpan {
    display: flex;
  }

  .emailInput {
    font-size: 15px;
    transition: border-color 0.2s, box-shadow 0.2s, background-color 0.2s;
    display: block;
    height: 40px;
    width: 100%;
    padding: 0 15px;
    line-height: 40px;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.lightGrayColor};
    background-color: ${(props) => props.theme.whiteColor};
    color: ${(props) => props.theme.darkColor};
    outline: none;
    &:hover {
      background-color: ${(props) => props.theme.whiteGrayColor};
    }
    &:focus {
      border-color: ${(props) => props.theme.primaryColor};
      outline: 1px solid ${(props) => props.theme.primaryColor};
      box-shadow: 0 0 8px ${(props) => props.theme.primaryColor};
    }
  }

  .emailSeparator {
    flex: 0 0 20px;
    text-align: center;
    line-height: 40px;
    color: ${(props) => props.theme.mediumGrayColor};
  }

  .emailSelect {
    font-size: 15px;
    transition: border-color 0.2s, box-shadow 0.2s, background-color 0.2s;
    display: block;
    box-sizing: border-box;
    height: 40px;
    width: 170px;
    padding: 0 15px;
    line-height: 40px;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.lightGrayColor};
    color: ${(props) => props.theme.darkColor};
    appearance: none;
    &:hover {
      background-color: ${(props) => props.theme.whiteGrayColor};
    }
    &:focus {
      border-color: ${(props) => props.theme.primaryColor};
      outline: 1px solid ${(props) => props.theme.primaryColor};
      box-shadow: 0 0 8px ${(props) => props.theme.primaryColor};
    }
  }

  .emailButton {
    margin-top: 10px;
    width: 100%;
    height: 45px;
    padding: 0px;
    background: ${(props) => props.theme.mediumGrayColor};
    color: ${(props) => props.theme.lightGrayColor};
    border: 0.1px solid ${(props) => props.theme.lightGrayColor};
    font-size: 17px;
    min-height: 50px;
    font-weight: 700;
    text-align: center;
    transition: color 0.1s, background-color 0.1s, border-color 0.1s;
    border-radius: 4px;
    cursor: pointer;
  }

  .pwInput {
    font-size: 15px;
    transition: border-color 0.2s, box-shadow 0.2s, background-color 0.2s;
    display: block;
    height: 40px;
    width: 100%;
    padding: 0 15px;
    line-height: 40px;
    border-radius: 4px;
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

  .emailCheck {
    font-size: 15px;
    transition: border-color 0.2s, box-shadow 0.2s, background-color 0.2s;
    display: block;
    height: 40px;
    width: 100%;
    padding: 0px 15px;
    margin-top: 10px;
    line-height: 40px;
    border-radius: 4px;
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

  .nameInput {
    font-size: 15px;
    transition: border-color 0.2s, box-shadow 0.2s, background-color 0.2s;
    display: block;
    height: 40px;
    width: 100%;
    padding: 0 15px;
    line-height: 40px;
    border-radius: 4px;
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

  .emailCheckButton {
    margin-top: 10px;
    width: 100%;
    height: 20px;
    background-color: ${(props) => props.theme.primaryColor};
    border-color: ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.whiteColor};
    font-size: 13px;
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

  .submitButton {
    margin-top: 10px;
    width: 100%;
    height: 45px;
    padding: 0px;
    background-color: ${(props) => props.theme.primaryColor};
    border-color: ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.whiteColor};
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

  .registerHelp {
    color: ${(props) => props.theme.darkColor};
    font-size: 15px;
    text-align: center;
    margin-top: 30px;

    > a {
      text-decoration: underline;
      font-weight: bold;
      padding-left: 10px;
    }
  }

  .error {
    font-size: 12px;
    color: red;
  }
`;
