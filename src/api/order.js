const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
import API from './axios';

export const fetchOrders = async () => {
  try {
    const response = await API.get('/order', { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error('주문 목록 조회 실패:', error);
    return [];
  }
};

export const cancelOrder = async (orderId) => {
  try {
    const response = await API.delete(`/order/${orderId}`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error('주문 취소 실패:', error);
    throw new Error('주문 취소 중 오류 발생');
  }
};
