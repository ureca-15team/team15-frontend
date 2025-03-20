import styled from 'styled-components';

// 전체 주문 페이지 컨테이너
export const OrderContainerBlock = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 120px 20px 20px;
  background-color: rgb(255, 255, 255);
  min-height: 100vh;
`;

export const OrderBox = styled.div`
  border: 2px solid #ddd;
  border: 1.5px solid #ebedef;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* 살짝 그림자 효과 */
  margin-top: 20px;

  h2 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 16px;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee; /* h2 아래 구분선 */
  }
`;
