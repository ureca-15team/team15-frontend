import API from './axios';

// 상품 상세 정보 조회 API
export const fetchProductDetails = async (prodcode) => {
  try {
    const response = await API.get(`/products/${prodcode}`);
    return response.data;
  } catch (error) {
    console.error(`상품 상세 조회 실패 (prodcode: ${prodcode}):`, error);
    return null;
  }
};
