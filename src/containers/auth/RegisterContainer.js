import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Register from '../../components/auth/Register';
import { RegisterBlock } from '../../components/auth/Register.style';
import logo from '../../assets/logo.jpg';
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
  const [isEmailChecked, setIsEmailChecked] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    // 이메일이 변경되면 중복 확인 상태 초기화
    if (name === 'email' || name === 'emailSelect') {
      setEmailAvailable(null);
      setIsEmailChecked(false);
      setEmailMessage('이메일 중복 확인을 완료해주세요.'); // ✅ 이메일 변경 시 메시지 설정
    }

    if (name === 'password') {
      const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
      setPasswordError(
        passwordRegex.test(value) ? '' : '영문, 숫자를 포함해야 합니다.',
      );

      if (formData.pwCheck) {
        setPwCheckError(
          value === formData.pwCheck ? '' : '비밀번호가 일치하지 않습니다.',
        );
      }
    }

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

    setEmailAvailable(null);
    setIsEmailChecked(false);
    setEmailMessage('이메일 중복 확인을 완료해주세요.'); // ✅ 이메일 변경 시 메시지 설정
  };

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
      setIsEmailChecked(true);
    } catch (error) {
      setEmailMessage('이메일 확인 중 오류가 발생했습니다.');
      setEmailAvailable(false);
      setIsEmailChecked(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let hasError = false;

    // 이메일 중복 확인 여부 체크
    if (!isEmailChecked || !emailAvailable) {
      setEmailMessage('이메일 중복 확인을 완료해주세요.'); // ✅ 회원가입 버튼 클릭 시 메시지 설정
      hasError = true;
    }

    if (!/^(?=.*[a-zA-Z])(?=.*\d).{8,}$/.test(formData.password)) {
      setPasswordError('영문, 숫자를 포함해야 합니다.');
      hasError = true;
    } else {
      setPasswordError('');
    }

    if (formData.password !== formData.pwCheck) {
      setPwCheckError('비밀번호가 일치하지 않습니다.');
      hasError = true;
    }

    if (!/^[a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{2,15}$/.test(formData.nickname)) {
      setNicknameError('닉네임은 2~15자여야 합니다.');
      hasError = true;
    } else {
      setNicknameError('');
    }

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

  return (
    <RegisterBlock>
      <img
        className="RegisterImg"
        src={logo}
        alt="register"
        onClick={() => navigate('/')}
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
          isEmailChecked={isEmailChecked}
        />
      </div>
    </RegisterBlock>
  );
};

export default RegisterContainer;
