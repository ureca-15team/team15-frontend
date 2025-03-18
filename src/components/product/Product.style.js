import styled from "styled-components";

export const StyledProduct = styled.div`
  width: 100%;
  display: flex;
  max-width: 1200px;
  justify-content: space-between;

  @media (max-width: 800px) {
    display: block;
  }
`;

export const ImageWrapper = styled.div`
  width: 50%;
  position: relative;
  overflow: hidden;
  border-radius: 8px;


  &::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }

  & img {
    position: absolute;
    width: 100%;
  }

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const OverviewContainer = styled.div`
  width: calc(50% - 100px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  

  @media (max-width: 800px) {
    width: calc(100% - 40px);
  }
`;

export const TitleContainer = styled.div`
  margin-top: 20px;

  & p:nth-of-type(1) {
    color: #656e75;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  & p:nth-of-type(2) {
    font-size: 22px;
    margin-bottom: 16px;
  }

  & p:nth-of-type(3) {
    font-size: 16px;
    margin-bottom: 16px;
    line-height: 150%;
  }
`;

export const StarContainer = styled.div`
  margin-bottom: 16px;

  & svg {
    width: 16px;
    height: 16px;
    color: #35C5F0;
  }

  & p {
    display: inline-block;
    font-weight: bold;
    margin-left: 8px;
    color: #35C5F0;
  }
`

export const PriceContainer = styled.div`
  margin-bottom: 16px;

  & p:nth-of-type(1) {
    display: block;
    margin-bottom: 8px;
    font-size: 16px;
  }

  & p:nth-of-type(2) {
    display: inline-block;
    font-size: 32px;
    font-weight: bold;
  }

  & p:nth-of-type(3) {
    margin-left: 8px;
    display: inline-block;
    font-size: 32px;
    font-weight: normal;
  }

  & > div {
    margin-left: 8px;
    display: inline-block;
    width: 100px;
  }

  & > div img {
    width: 100%;
  }
`;

export const InfoContainer =styled.div`
  & p {
    display: inline-block;
    margin-bottom: 8px;
  }

  & p:nth-of-type(1) {
    color: #828c94;
  }

  & p span {
    margin: 8px 0 0 16px;
    display: block;
  }
`;

export const OrderContainer = styled.div`
  margin-top: 40px;
  width: 60%;
  display: flex;


  & > button {
    font-size: 16px;
    font-weight: bold;
    padding: 16px 32px;
    background-color: #35c5f0;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
  }
`;
