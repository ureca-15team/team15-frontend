import React from 'react';
import {
  BannerWrapper,
  TopBanner,
  BottomBanner,
  BannerItem,
  BannerIcon,
  BannerText,
  BannerValue,
  RecommendCode,
  RecommendInfo,
  RecommendButton,
} from './OrderBanner.style';

const OrderBanner = () => {
  return (
    <BannerWrapper>
      <TopBanner>
        <BannerItem>
          <BannerIcon>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="4"
                y="6"
                width="16"
                height="12"
                rx="1"
                stroke="#333333"
                strokeWidth="1.5"
              />
              <path
                d="M9 11H15"
                stroke="#333333"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </BannerIcon>
          <BannerText>쿠폰</BannerText>
          <BannerValue color="#2196f3">14</BannerValue>
        </BannerItem>

        <BannerItem>
          <BannerIcon>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="12"
                r="8"
                stroke="#333333"
                strokeWidth="1.5"
              />
              <path
                d="M12 8V12L15 15"
                stroke="#333333"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </BannerIcon>
          <BannerText>포인트</BannerText>
          <BannerValue color="#2196f3">0P</BannerValue>
        </BannerItem>

        <BannerItem>
          <BannerIcon>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 4L14.5 9.5L20.5 10L16 14L17.5 20L12 17L6.5 20L8 14L3.5 10L9.5 9.5L12 4Z"
                stroke="#333333"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
          </BannerIcon>
          <BannerText>구매등급</BannerText>
          <BannerValue color="#2196f3">WELCOME</BannerValue>
        </BannerItem>
      </TopBanner>

      <BottomBanner>
        <RecommendCode>
          <span>나의 추천코드</span>
          <strong>KHDELD5N</strong>
        </RecommendCode>

        <RecommendInfo>나는 5000P! 친구는 5000원 쿠폰</RecommendInfo>
      </BottomBanner>
    </BannerWrapper>
  );
};

export default OrderBanner;
