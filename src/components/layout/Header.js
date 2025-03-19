import HeaderBlock from './Header.style';
import { Button } from '../common';
import src from '../../assets/logo.jpg';
import { IoCartOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { checkLoginStatus, logout } from '../../api/auth';

const Header = () => {
  console.log('Header 렌더링됨'); // ✅ 콘솔에 몇 번 찍히는지 확인
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [nickname, setNickname] = useState('');

  useEffect(() => {
    const fetchLoginStatus = async () => {
      try {
        const data = await checkLoginStatus();
        console.log('로그인 상태 확인:', data); // 로그인 상태 확인
        if (data.message === '로그인 상태 유지 중') {
          setIsLoggedIn(true);
          setNickname(data.nickname);
        } else {
          setIsLoggedIn(false);
          setNickname(''); // 닉네임 초기화
        }
      } catch (error) {
        console.error('로그인 상태 확인 중 에러 발생:', error);
        setIsLoggedIn(false);
        setNickname(''); // 닉네임 초기화
      }
    };

    fetchLoginStatus();
  }, []);

  const onClickToHome = () => {
    navigate('/');
  };

  const onClickToLogin = () => {
    navigate('/login');
  };

  const onClickToRegister = () => {
    navigate('/register');
  };

  const onClickToRCart = () => {
    navigate('/cart');
  };

  const handleLogout = async () => {
    try {
      await logout();
      console.log('로그아웃 성공');
      setIsLoggedIn(false);
      setNickname(''); // 로그아웃 시 닉네임 초기화
      navigate('/'); // 로그아웃 후 로그인 페이지로 이동
    } catch (error) {
      console.error('로그아웃 중 에러 발생:', error);
    }
  };

  return (
    <HeaderBlock>
      <div className="container">
        <p className="logo">
          <img src={src} alt="logo" onClick={onClickToHome} />
        </p>
        <div className="nav">
          {isLoggedIn ? (
            <>
              <p className="nickname">{nickname}님</p>
              <Button
                className="logoutButton"
                size={'small'}
                onClick={handleLogout}
              >
                로그아웃
              </Button>
              <IoCartOutline className="cart" onClick={onClickToRCart} />
              <Button
                className="buyList"
                size={'small'}
                color={'primary'}
                style={{ marginLeft: '10px' }}
              >
                구매목록
              </Button>
            </>
          ) : (
            <>
              <Button size={'small'} onClick={onClickToLogin}>
                로그인
              </Button>
              <p style={{ color: 'grey' }}>|</p>
              <Button size={'small'} onClick={onClickToRegister}>
                회원가입
              </Button>
            </>
          )}
        </div>
      </div>
    </HeaderBlock>
  );
};

export default Header;