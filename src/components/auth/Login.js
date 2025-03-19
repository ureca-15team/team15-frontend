import React, { useState } from 'react';
import logo from '../../assets/loginLogo.jpg';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:8080/member/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include', // 세션 쿠키를 포함하여 요청
      body: JSON.stringify({
        email: formData.email,
        pwd: formData.password,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log('로그인 성공:', data);
      navigate('/'); // 로그인 성공 후 홈 화면으로 이동
    } else {
      console.error('로그인 실패');
      // 로그인 실패 후 처리 로직 추가
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="loginBox">
        <Link to="/">
          <img className="loginImg" src={logo} alt="logo" />
        </Link>
        <div className="inputDiv">
          <input
            className="loginEmailInput"
            name="email"
            type="email"
            placeholder="이메일"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="inputDiv">
          <input
            className="loginPwInput"
            name="password"
            type="password"
            placeholder="비밀번호"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button className="submitButton" type="submit">
          로그인
        </button>
        <section className="loginSection">
          <Link to="/help">
            <span>비밀번호 재설정</span>
          </Link>
          <Link to="/register">
            <span>회원가입</span>
          </Link>
        </section>
        <Link to="/help">
          <span className="loginHelpSpan">로그인에 문제가 있으신가요?</span>
        </Link>
      </div>
    </form>
  );
};

export default Login;
