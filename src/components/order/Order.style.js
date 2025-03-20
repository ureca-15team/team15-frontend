import styled from 'styled-components';

// 전체 주문 목록 스타일
export const OrderWrapper = styled.div`
  width: 100%;
  background-color: rgb(255, 255, 255);
  padding: 20px;

  .emptyMessage {
    text-align: center;
    font-size: 16px;
    color: #888;
    padding: 50px 0;
  }
`;

// 개별 주문 항목 스타일
export const OrderItem = styled.div`
  background: #fff;
  border: 1.99px solid #ebedef;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
`;

// 주문 날짜 및 상태
export const OrderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid #eee;
`;

export const OrderDate = styled.span`
  font-size: 14px;
  color: #333;
`;

export const OrderStatus = styled.span`
  font-size: 14px;
  color: #2196f3;
  font-weight: 500;
`;

// 상품 정보
export const OrderDetails = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 0;
  position: relative;
`;

export const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 4px;
  object-fit: cover;
`;

export const ProductInfo = styled.div`
  flex: 1;
  margin-left: 16px;

  .productName {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 4px;
  }

  .company {
    font-size: 13px;
    color: #888;
    margin-bottom: 8px;
  }
`;

export const PriceInfo = styled.div`
  display: flex;
  align-items: center;

  .price {
    font-size: 14px;
    font-weight: 600;
    color: #333;
  }

  .quantity {
    font-size: 13px;
    color: #888;
    margin-left: 8px;
    &:before {
      content: '·';
      margin-right: 8px;
    }
  }
`;

// 주문 관련 버튼 스타일
export const OrderActions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid #eee;

  .cancel {
    padding: 8px 16px;
    font-size: 13px;
    border-radius: 4px;
    cursor: pointer;
    border: 1px solid #ddd;
    background: white;
    color: #333;
    transition: all 0.2s ease-in-out;
  }

  .cancel:hover {
    background: #f5f5f5;
  }
`;
