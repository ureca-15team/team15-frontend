import Register from "../../components/auth/Register";
import React, { useState } from "react";
import { RegisterBlock } from "../../components/auth/Register.style";
import logo from "../../assets/logo.jpg";

import { basicAlert } from "../../shared/alert/SwalAlert";
import { useNavigate } from "react-router-dom";

const RegisterContainer = () => {
  const [formData, setFormData] = useState({
    email: "",
    emailSelect: "",
    password: "",
    pwCheck: "",
    nickname: "",
  });
  const [emailCheck, setEmailCheck] = useState("");
  const [sentEmail, setSentEmail] = useState(false);
  const [authCode, setAuthCode] = useState(null);
  const [emailVerified, setEmailVerified] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [nicknameError, setNicknameError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    // 비밀번호 유효성 검사
    if (name === "password") {
      const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
      if (!passwordRegex.test(value)) {
        setPasswordError("영문, 숫자를 포함해야합니다.");
      } else {
        setPasswordError("");
      }
    }

    // 닉네임 유효성 검사
    if (name === "nickname") {
      const nicknameRegex = /^[a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{2,15}$/;
      if (!nicknameRegex.test(value)) {
        setNicknameError("닉네임은 2자 이상 15자 이하여야 합니다.");
      } else {
        setNicknameError("");
      }
    }
  };

  const handleEmailSelect = (e) => {
    const { value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      emailSelect: value,
    }));
  };

  const handleMailCheck = async (e) => {
    setSentEmail(true);
    e.preventDefault();
    console.log(formData);
    try {
      const response = await mailCheckMutate.mutateAsync({
        email: `${formData.email}@${formData.emailSelect}`,
      });
      setAuthCode((prev) => response.data);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const onChangeEmailCheck = (e) => {
    setEmailCheck(e.target.value);
  };

  const onCheckEmail = (e) => {
    e.preventDefault();
    if (emailCheck == authCode) {
      basicAlert("인증되었습니다 :)");
      setEmailVerified(true);
    } else {
      basicAlert("인증 실패");
      setFormData({ ...formData, email: "", emailSelect: "" });
      setEmailCheck("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      basicAlert("비밀번호는 영문과 숫자를 포함한 8자 이상이어야 합니다.");
      return;
    }

    if (formData.password !== formData.pwCheck) {
      basicAlert("비밀번호가 일치하지 않습니다.");
      return;
    }
    const nicknameRegex = /^[a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{2,15}$/;
    if (!nicknameRegex.test(formData.nickname)) {
      basicAlert("닉네임은 2자 이상 15자 이하여야 합니다.");
      return;
    }

    try {
      await registerMutate(formData);
      basicAlert("회원가입이 완료되었습니다!");
      navigate("/login");
    } catch (error) {
      basicAlert("회원가입에 실패했습니다. 다시 시도해주세요.");
    }
  };

  const onClickLogo = () => {
    navigate("/");
  };

  return (
    <>
      <RegisterBlock>
        <img
          className="RegisterImg"
          src={logo}
          alt="register"
          onClick={onClickLogo}></img>
        <div className="registerBox">
          <Register
            formData={formData}
            onCheckEmail={onCheckEmail}
            onChangeEmailCheck={onChangeEmailCheck}
            handleMailCheck={handleMailCheck}
            handleChange={handleChange}
            handleEmailSelect={handleEmailSelect}
            handleSubmit={handleSubmit}
            passwordError={passwordError}
            nicknameError={nicknameError}
          />
        </div>
      </RegisterBlock>
    </>
  );
};

export default RegisterContainer;
