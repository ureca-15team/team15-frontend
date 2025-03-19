import React, { useState } from 'react';
import logo from '../../assets/loginLogo.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../api/auth';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
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
    if (!formData.email) {
      setErrorMessage('이메일을 입력해주세요.');
      return;
    }
    if (!formData.password) {
      setErrorMessage('비밀번호를 입력해주세요.');
      return;
    }
    try {
      const data = await login(formData.email, formData.password);
      console.log('로그인 성공:', data);
      navigate('/'); // 로그인 성공 후 홈 화면으로 이동
    } catch (error) {
      console.error(error.message);
      if (error.message === '로그인 실패') {
        setErrorMessage('이메일 혹은 비밀번호를 확인해주세요.');
      } else {
        setErrorMessage('로그인 중 오류가 발생했습니다.');
      }
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
        {errorMessage && <p className="errorMessage">{errorMessage}</p>}
        <section className="loginSection">
          <Link to="/register">
            <span className="register">회원가입</span>
          </Link>
        </section>
      </div>
    </form>
  );
};

export default Login;