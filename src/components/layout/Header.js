import HeaderBlock from './Header.style';
import { Button } from '../common';
import src from '../../assets/logo.jpg';
import { IoCartOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { checkLoginStatus, logout } from '../../api/auth';

const Header = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [nickname, setNickname] = useState('');

  useEffect(() => {
    const fetchLoginStatus = async () => {
      try {
        const data = await checkLoginStatus();

        if (data.message === '로그인 상태 유지 중') {
          setIsLoggedIn(true);
          setNickname(data.nickname);
        } else {
          setIsLoggedIn(false);
          setNickname('');
        }
      } catch (error) {
        console.error('로그인 상태 확인 중 에러 발생:', error);
        setIsLoggedIn(false);
        setNickname('');
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
  const onClickToOrder = () => {
    navigate('/order');
  };

  const handleLogout = async () => {
    try {
      await logout();
      setIsLoggedIn(false);
      setNickname('');
      navigate('/');
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
                onClick={onClickToOrder}
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
