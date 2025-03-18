import styled from 'styled-components';
import theme from '../../lib/styles/theme';

export const StyledProduct = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 800px) {
    display: block;
  }
`;

export const ImageWrapper = styled.div`
  width: 60%;
  position: relative;
  overflow: hidden;
  border-radius: 8px;

  &::after {
    content: '';
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
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: end;

  @media (max-width: 800px) {
    width: calc(100% - 40px);
  }

  .product-container {
    display: flex;
    flex-direction: column;
    width: 90%;
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
    color: #35c5f0;
  }

  & p {
    display: inline-block;
    font-weight: bold;
    margin-left: 8px;
    color: #35c5f0;
  }
`;

export const PriceContainer = styled.div`
  margin-bottom: 36px;

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

export const InfoContainer = styled.div`
  display: flex;

  & p {
    display: inline-block;
    font-size: 16px;
    margin-bottom: 4px;
  }

  & p:nth-of-type(1) {
    color: #828c94;
  }

  & p span {
    margin: 0 0 7px 16px;
    display: block;
    font-size: 15px;
  }
`;

export const ProductInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #f8f9fa;
  border-radius: 8px;
  margin-bottom: 25px;
  margin-top: 30px;

  .name-quantity {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .name {
    font-size: 16px;
    font-weight: bold;
    margin-left: 5px;
  }
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;

  & input {
    width: 30px;
    height: 25px;
    text-align: center;
    font-size: 16px;
    -moz-appearance: textfield;
  }
  & input::-webkit-outer-spin-button,
  & input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  & button {
    width: 30px;
    height: 25px;
    font-size: 16px;
    background-color: white;
    border: 1px solid #fafafa;
    cursor: pointer;
  }
`;

export const TotalPriceContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding-top: 40px;
  padding: 40px 10px 0 10px;
  border-top: 1px solid ${(props) => props.theme.darkColor};

  & p:nth-of-type(1) {
    display: inline-block;
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: bold;
  }

  & p:nth-of-type(2) {
    display: inline-block;
    margin-left: 8px;
    font-size: 20px;
    font-weight: bold;
  }
`;

export const OrderContainer = styled.div`
  width: 100%;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;

  & > button {
    width: 48%;
    font-size: 16px;
    font-weight: bold;
    padding: 16px 0;
    border-radius: 4px;
    cursor: pointer;
  }

  & > button:first-of-type {
    background-color: white;
    color: #35c5f0;
    border: 1px solid #35c5f0;
  }

  & > button:last-of-type {
    background-color: #35c5f0;
    color: #fff;
  }
`;