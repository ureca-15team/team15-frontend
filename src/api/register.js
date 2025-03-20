import API from './axios';

export const registerUser = async (formData) => {
  try {
    const response = await API.post('/member/signup', {
      email: `${formData.email}@${formData.emailSelect}`,
      pwd: formData.password,
      nickname: formData.nickname,
    });

    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : '회원가입 요청 실패';
  }
};

export const checkEmailAvailability = async (email) => {
  try {
    const response = await API.post('/member/check-email', { email });
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || '이메일 중복 확인 실패';
  }
};
