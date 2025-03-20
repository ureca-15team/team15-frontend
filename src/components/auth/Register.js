import { Link } from 'react-router-dom';

const Register = ({
  formData,
  handleChange,
  handleEmailSelect,
  handleCheckEmail,
  handleSubmit,
  passwordError,
  pwCheckError,
  nicknameError,
  emailMessage,
  emailAvailable,
  isEmailChecked,
}) => {
  return (
    <div className="registerBox">
      <div>
        <h1>회원가입</h1>
        <br />
      </div>

      <form onSubmit={handleSubmit}>
        <div className="registerDiv">
          <label className="registerlabel">이메일</label>
          <div className="emailDiv">
            <span className="emailSpan">
              <input
                type="text"
                name="email"
                className="emailInput"
                placeholder="이메일"
                value={formData.email}
                onChange={handleChange}
              />
            </span>
            <span className="emailSeparator">@</span>
            <span>
              <select
                className="emailSelect"
                value={formData.emailSelect}
                onChange={handleEmailSelect}
              >
                <option value="" disabled>
                  선택해주세요
                </option>
                <option value="naver.com">naver.com</option>
                <option value="hanmail.net">hanmail.net</option>
                <option value="daum.net">daum.net</option>
                <option value="gmail.com">gmail.com</option>
              </select>
            </span>
          </div>

          <button
            type="button"
            className="emailCheckButton"
            onClick={handleCheckEmail}
          >
            이메일 중복 확인
          </button>

          {emailMessage && (
            <div
              className={`emailMessage ${emailAvailable ? 'success' : 'error'}`}
            >
              {emailAvailable !== false
                ? emailMessage
                : '이메일 중복 확인을 완료해주세요.'}
            </div>
          )}
        </div>

        <div className="registerDiv">
          <label className="registerlabel">비밀번호</label>
          <div className="resisterExplan">
            영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.
          </div>
          <input
            type="password"
            name="password"
            className="pwInput"
            placeholder="비밀번호"
            value={formData.password}
            onChange={handleChange}
          />
          {passwordError && <div className="errorMessage">{passwordError}</div>}
        </div>

        <div className="registerDiv">
          <label className="registerlabel">비밀번호 확인</label>
          <input
            type="password"
            name="pwCheck"
            className="pwInput"
            placeholder="비밀번호 확인"
            value={formData.pwCheck}
            onChange={handleChange}
          />
          {formData.pwCheck && pwCheckError && (
            <div className="errorMessage">{pwCheckError}</div>
          )}
        </div>

        <div className="registerDiv">
          <label className="registerlabel">닉네임</label>
          <div className="resisterExplan">
            다른 유저와 겹치지 않도록 입력해주세요. (2~15자)
          </div>
          <input
            type="text"
            name="nickname"
            className="nameInput"
            placeholder="별명 (2~15자)"
            value={formData.nickname}
            onChange={handleChange}
          />
          {nicknameError && <div className="errorMessage">{nicknameError}</div>}
        </div>

        <button
          type="submit"
          className="submitButton"
          disabled={!isEmailChecked || emailAvailable === null}
        >
          회원가입하기
        </button>
      </form>

      <p className="registerHelp">
        이미 아이디가 있으신가요?
        <Link to="/login">로그인</Link>
      </p>
    </div>
  );
};

export default Register;
