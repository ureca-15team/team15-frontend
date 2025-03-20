export const fetchCartItems = async () => {
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
          cartId: cartItem.cartId, // cartId 추가
          quantity: cartItem.quantity,
        };
      } else {
        console.error('상품 정보를 불러오는데 실패했습니다.');
        return null;
      }
    });

    const productDetails = await Promise.all(productDetailsPromises);
    return productDetails.filter(item => item !== null);
  } else {
    console.error('장바구니 정보를 불러오는데 실패했습니다.');
    return [];
  }
};

export const deleteCartItem = async (cartId) => {
  console.log(`Deleting cart item with ID: ${cartId}`);
  const response = await fetch(`http://localhost:8080/cart/${cartId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include', // 세션 쿠키를 포함하여 요청
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('Failed to delete cart item:', errorText);
    throw new Error('Failed to delete cart item');
  }

  console.log('Cart item deleted successfully');
};

export const checkoutCartItems = async (items) => {
  const response = await fetch('http://localhost:8080/cart/checkout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(items),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('Failed to checkout:', errorText);
    throw new Error('Failed to checkout');
  }

  console.log('Checkout successful');
};