import React from "react";
import logo from "../../assets/transparent-logo.png";
import { Link } from "react-router-dom";

const Login = ({ formData, handleChange, handleSubmit }) => {
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
