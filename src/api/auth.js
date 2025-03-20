const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const login = async (email, password) => {
  const response = await fetch(`${API_BASE_URL}/member/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include', // 세션 쿠키를 포함하여 요청
    body: JSON.stringify({
      email,
      pwd: password,
    }),
  });

  return response; // response 객체 반환
};

export const checkLoginStatus = async () => {
  const response = await fetch(`${API_BASE_URL}/member/status`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include', // 세션 쿠키를 포함하여 요청
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
    credentials: 'include', // 세션 ID를 포함하여 요청
  });

  if (!response.ok) {
    console.error('로그아웃 실패');
    throw new Error('로그아웃 실패');
  }
  const responseText = await response.text();
  console.log(responseText); // 로그아웃 성공 메시지 출력

  return responseText;
};