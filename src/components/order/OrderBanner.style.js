import styled from 'styled-components';

export const BannerWrapper = styled.div`
  width: 100%;
  background-color: #fff;
  margin-bottom: 40px;
  border: 1.5px solid #ebedef;
  overflow: hidden;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
`;

export const TopBanner = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  border: 1.5px solid #ebedef;
`;

export const BottomBanner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`;

export const BannerItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const BannerIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
`;

export const BannerText = styled.span`
  font-size: 14px;
  color: #333;
`;

export const BannerValue = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => props.color || '#333'};
`;

export const RecommendCode = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    font-size: 14px;
    color: #333;
  }

  strong {
    font-size: 14px;
    font-weight: 600;
    color: #333;
  }
`;

export const RecommendInfo = styled.div`
  font-size: 14px;
  color: #333;
`;

export const RecommendButton = styled.button`
  background-color: #2196f3;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #1976d2;
  }
`;
