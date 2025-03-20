import React, { useEffect, useState } from 'react';
import Cart from '../../components/cart/Cart';
import { StyledCartContainer } from './CartContainer.style';
import { fetchCartItems } from '../../api/cart';

const CartContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const items = await fetchCartItems();
        setItems(items);
      } catch (error) {
        console.error('에러가 발생했습니다:', error);
      }
    };

    fetchItems();
  }, []);

  return (
    <StyledCartContainer>
      <Cart items={items} setItems={setItems} />
    </StyledCartContainer>
  );
};

export default CartContainer;
