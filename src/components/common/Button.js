import styled, { css } from "styled-components";
import theme from "../../lib/styles/theme";

const Button = ({ children, size, color, ...rest }) => {
  return (
    <StyledButton size={size} color={color} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;

const sizes = {
  xsmall: css`
    height: 39px;
    width: 39px;
  `,
  small: css`
    height: 38px;
    width: 80px;
  `,
  medium: css`
    height: 40px;
    width: 120px;
  `,
  large: css`
    height: 45px;
    width: 135px;
  `,
  xlarge: css`
    height: 50px;
    width: 150px;
  `,
  default: css`
    height: auto;
    width: auto;
  `,
};

const colors = {
  darkPrimary: css`
    background-color: ${(props) => props.theme.darkPrimaryColor};
    color: ${(props) => props.theme.whiteColor};
  `,
  primary: css`
    background-color: ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.whiteColor};
  `,
  secondary: css`
    background-color: ${(props) => props.theme.lightGrayColor};
  `,
  default: css`
    background-color: white;
  `,
};

const StyledButton = styled.button`
  ${theme.flexCenter}
  background-color: ${(props) => props.theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 5px;

  ${(props) => sizes[props.size] || sizes.default}
  ${(props) => colors[props.color] || colors.default}
`;
