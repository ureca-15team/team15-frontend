const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const login = async (email, password) => {
  const response = await fetch(`${API_BASE_URL}/member/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      email,
      pwd: password,
    }),
  });

  return response;
};

export const checkLoginStatus = async () => {
  const response = await fetch(`${API_BASE_URL}/member/status`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });

  if (!response.ok) {
    throw new Error('로그인 상태 확인 실패');
  }

  return response.json();
};

export const logout = async () => {
  const response = await fetch(`${API_BASE_URL}/member/logout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });

  if (!response.ok) {
    console.error('로그아웃 실패');
    throw new Error('로그아웃 실패');
  }
  const responseText = await response.text();

  return responseText;
};
