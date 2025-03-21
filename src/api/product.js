import API from './axios';

export const fetchProductDetails = async (prodcode) => {
  try {
    const response = await API.get(`/products/${prodcode}`);
    return response.data;
  } catch (error) {
    console.error(`상품 상세 조회 실패 (prodcode: ${prodcode}):`, error);
    return null;
  }
};

export const buyNow = async (prodcode, quantity) => {
  try {
    const response = await API.post(
      '/order',
      {
        orderItems: [{ prodcode, quantity }],
      },
      { withCredentials: true },
    );
    return response.data;
  } catch (error) {
    console.error('상품 주문 실패:', error);
    throw new Error('구매 중 오류 발생');
  }
};

export const addToCart = async (prodcode, quantity) => {
  try {
    const response = await API.post(
      '/cart/add',
      { prodcode, quantity },
      { withCredentials: true },
    );
    return response.data;
  } catch (error) {
    console.error('장바구니 추가 실패:', error);
    throw new Error('장바구니 추가 중 오류 발생');
  }
};
