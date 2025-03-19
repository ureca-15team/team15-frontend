import React, { useEffect, useState } from 'react';
import Cart from '../../components/cart/Cart';
import { StyledCartContainer } from './CartContainer.style';

const CartContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const cartResponse = await fetch('http://localhost:8080/cart', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include', // 세션 쿠키를 포함하여 요청
        });

        if (cartResponse.ok) {
          const cartData = await cartResponse.json();
          const productDetailsPromises = cartData.map(async (cartItem) => {
            const productResponse = await fetch(`http://localhost:8080/products/${cartItem.prodcode}`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            });

            if (productResponse.ok) {
              const productData = await productResponse.json();
              return {
                ...productData,
                quantity: cartItem.quantity,
              };
            } else {
              console.error('상품 정보를 불러오는데 실패했습니다.');
              return null;
            }
          });

          const productDetails = await Promise.all(productDetailsPromises);
          setItems(productDetails.filter(item => item !== null));
        } else {
          console.error('장바구니 정보를 불러오는데 실패했습니다.');
        }
      } catch (error) {
        console.error('에러가 발생했습니다:', error);
      }
    };

    fetchCartItems();
  }, []);

  console.log(items);

  return (
    <StyledCartContainer>
      <Cart items={items} />
    </StyledCartContainer>
  );
};

export default CartContainer;