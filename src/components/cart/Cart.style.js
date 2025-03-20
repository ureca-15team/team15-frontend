import styled from 'styled-components';

export const StyledCart = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  min-height: 100vh;
`;

export const CartContainer = styled.div`
  width: 70%;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  .emptyCart {
    font-size: 14px;
    color: #868e96;
    text-align: center;
    padding: 50px 0;
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1.5px solid #ebedef;
  border-radius: 6px;
  padding: 10px 15px;

  & input[type='checkbox'] {
    display: none;
  }

  & label {
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
  }

  & label::before {
    content: '';
    width: 16px;
    height: 16px;
    border-radius: 6px;
    display: inline-block;
    margin-right: 8px;
    border: 1px solid #ced4da;
  }

  & input[type='checkbox']:checked + label::before {
    background-color: #3da9fc;
    content: '✓';
    color: white;
    font-size: 18px;
    text-align: center;
    line-height: 20px;
    font-weight: bold;
    border: 1px solid white;
  }

  & span {
    font-size: 14px;
    cursor: pointer;
  }
`;

export const ProductContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1.5px solid #ebedef;
  border-radius: 6px;
  margin-top: 20px;
`;

export const ProductSelectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
  padding: 10px 15px;

  & input[type='checkbox'] {
    display: none;
  }

  & label {
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
  }

  & label::before {
    content: '';
    width: 16px;
    height: 16px;
    border-radius: 6px;
    display: inline-block;
    margin-right: 8px;
    border: 1px solid #ced4da;
  }

  & input[type='checkbox']:checked + label::before {
    background-color: #3da9fc;
    content: '✓';
    color: white;
    font-size: 18px;
    text-align: center;
    line-height: 20px;
    font-weight: bold;
    border: 1px solid white;
  }
  span {
    font-size: 16px;
    cursor: pointer;
  }
`;

export const ProductInfoContainer = styled.div`
  padding: 0 35px;
  margin-bottom: 20px;
  display: flex;
  gap: 16px;
  img {
    width: 70px;
    height: 70px;
    border-radius: 6px;
  }

  div {
    padding-top: 10px;
  }

  p:nth-of-type(1) {
    font-size: 14px;
    font-weight: 500;
    padding-bottom: 10px;
  }
  p:nth-of-type(2) {
    font-size: 11px;
    color: #868e96;
  }
`;

export const ProductQuantityContainer = styled.div`
  padding: 20px 15px;
  margin: 0 25px 0 35px;
  border-radius: 6px;
  background-color: #f8f9fa;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 16px;
  }
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;

  & input {
    width: 25px;
    height: 25px;
    text-align: center;
    font-size: 14px;
    -moz-appearance: textfield;
  }
  & input::-webkit-outer-spin-button,
  & input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  & button {
    width: 25px;
    height: 25px;
    font-size: 18px;
    background-color: white;
    border: 1px solid #fafafa;
    cursor: pointer;
  }
`;

export const TotalPriceWrapper = styled.div`
  margin: 15px 25px 30px 35px;
  display: flex;
  justify-content: end;

  p {
    font-size: 17px;
    font-weight: bold;
  }
`;

export const ShippingWrapper = styled.div`
  padding: 15px 0;
  display: flex;
  justify-content: center;
  border-top: 1.5px solid #ebedef;

  p {
    font-size: 14px;
  }
`;

export const TotalPriceContainer = styled.div`
  width: 25%;

  .total-price {
    padding: 25px 20px;
    border: 1.5px solid #ebedef;
    border-radius: 6px;
    margin-bottom: 10px;
  }

  button {
    width: 100%;
    border-radius: 6px;
    height: 45px;
    background-color: #3da9fc;
    color: white;
    font-size: 16px;
    font-weight: bold;
    border: none;
    cursor: pointer;
  }
`;

export const PriceInfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;

  p:nth-of-type(1) {
    font-size: 14px;
  }
  p:nth-of-type(2) {
    font-size: 15px;
    font-weight: bold;
  }
`;

export const TotalInfoContainer = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;

  p:nth-of-type(1) {
    font-size: 14px;
  }
  p:nth-of-type(2) {
    font-size: 22px;
    font-weight: bold;
  }
`;
