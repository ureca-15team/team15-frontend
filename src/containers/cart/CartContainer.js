import React from 'react';
import Cart from '../../components/cart/Cart';
import diffuserImage from '../../assets/product/diffuser.avif';
import { StyledCartContainer } from './CartContainer.style';

const CartContainer = () => {
  // 장바구니 아이템 불러왔다고 가정 
  const item = {
    content: [
      {
        itemId: 3,
        name: '상품 C',
        price: '30,000원',
        imageUrl: diffuserImage,
        company: 'CCC',
        description: "상품 C에 대한 설명이고, 이 상품은 CCC에서 만들었습니다.",
        quan: 1,
      },
      {
        itemId: 4,
        name: '상품 D',
        price: '40,000원',
        imageUrl: diffuserImage,
        company: 'DDD',
        description: "상품 D에 대한 설명이고, 이 상품은 DDD에서 만들었습니다.",
        quan: 3,
      },
    ],
  }

  return (
    <StyledCartContainer>
      <Cart item={item}></Cart>
    </StyledCartContainer>
  );
};

export default CartContainer;
