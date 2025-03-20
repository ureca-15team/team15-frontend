import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Register from '../../components/auth/Register';
import { RegisterBlock } from '../../components/auth/Register.style';
import logo from '../../assets/logo.jpg';
import { basicAlert } from '../../shared/alert/SwalAlert';
import { registerUser, checkEmailAvailability } from '../../api/register';

const RegisterContainer = () => {
  const [formData, setFormData] = useState({
    email: '',
    emailSelect: '',
    password: '',
    pwCheck: '',
    nickname: '',
  });

  const [passwordError, setPasswordError] = useState('');
  const [pwCheckError, setPwCheckError] = useState('');
  const [nicknameError, setNicknameError] = useState('');
  const [emailMessage, setEmailMessage] = useState('');
  const [emailAvailable, setEmailAvailable] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    if (name === 'password') {
      const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
      setPasswordError(
        passwordRegex.test(value) ? '' : '영문, 숫자를 포함해야 합니다.',
      );

      // ✅ 비밀번호가 변경될 때, 비밀번호 확인이 비어있으면 오류 메시지 초기화
      if (formData.pwCheck) {
        setPwCheckError(
          value === formData.pwCheck ? '' : '비밀번호가 일치하지 않습니다.',
        );
      }
    }

    // ✅ 비밀번호 확인 검사 (비밀번호 확인 입력 시에만)
    if (name === 'pwCheck') {
      setPwCheckError(
        value === formData.password ? '' : '비밀번호가 일치하지 않습니다.',
      );
    }

    if (name === 'nickname') {
      const nicknameRegex = /^[a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{2,15}$/;
      setNicknameError(
        nicknameRegex.test(value) ? '' : '닉네임은 2~15자여야 합니다.',
      );
    }
  };

  const handleEmailSelect = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      emailSelect: e.target.value,
    }));
  };

  // 이메일 중복 확인 API 호출
  const handleCheckEmail = async () => {
    const email = `${formData.email}@${formData.emailSelect}`;

    if (!formData.email || !formData.emailSelect) {
      setEmailMessage('이메일을 입력해주세요.');
      setEmailAvailable(false);
      return;
    }

    try {
      const response = await checkEmailAvailability(email);
      setEmailMessage(response.message);
      setEmailAvailable(response.available);
    } catch (error) {
      setEmailMessage(error);
      setEmailAvailable(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let hasError = false;

    // 비밀번호 유효성 검사
    if (!/^(?=.*[a-zA-Z])(?=.*\d).{8,}$/.test(formData.password)) {
      setPasswordError('영문, 숫자를 포함해야 합니다.');
      hasError = true;
    } else {
      setPasswordError('');
    }

    // 비밀번호 확인 검사
    if (formData.password !== formData.pwCheck) {
      setPasswordError('비밀번호가 일치하지 않습니다.');
      hasError = true;
    }

    // 닉네임 유효성 검사
    if (!/^[a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{2,15}$/.test(formData.nickname)) {
      setNicknameError('닉네임은 2~15자여야 합니다.');
      hasError = true;
    } else {
      setNicknameError('');
    }

    // 이메일 중복 확인 여부 체크
    if (!emailAvailable) {
      setEmailMessage('이메일 중복 확인을 완료해주세요.');
      hasError = true;
    }

    // 오류가 있다면 회원가입 진행 X
    if (hasError) return;

    try {
      const message = await registerUser(formData);
      setEmailMessage(message);
      alert('회원가입이 완료되었습니다. 로그인해주세요.');
      navigate('/login');
    } catch (error) {
      setEmailMessage(error || '회원가입에 실패했습니다. 다시 시도해주세요.');
    }
  };

  const onClickLogo = () => {
    navigate('/');
  };

  return (
    <RegisterBlock>
      <img
        className="RegisterImg"
        src={logo}
        alt="register"
        onClick={onClickLogo}
      />
      <div className="registerBox">
        <Register
          formData={formData}
          handleChange={handleChange}
          handleEmailSelect={handleEmailSelect}
          handleCheckEmail={handleCheckEmail}
          handleSubmit={handleSubmit}
          passwordError={passwordError}
          pwCheckError={pwCheckError}
          nicknameError={nicknameError}
          emailMessage={emailMessage}
          emailAvailable={emailAvailable}
        />
      </div>
    </RegisterBlock>
  );
};

export default RegisterContainer;
