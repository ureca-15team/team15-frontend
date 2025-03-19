import HeaderBlock from './Header.style';
import { Button } from '../common';
import src from '../../assets/logo.jpg';
import { IoCartOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Header = () => {
  console.log('Header 렌더링됨'); // ✅ 콘솔에 몇 번 찍히는지 확인
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // 로그인 상태를 확인하는 로직 (예: 세션 또는 토큰 확인)
    const checkLoginStatus = async () => {
      try {
        const response = await fetch('http://localhost:8080/member/status', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include', // 세션 쿠키를 포함하여 요청
        });

        if (response.ok) {
          const data = await response.json();
          console.log('로그인 상태 확인:', data); // 로그인 상태 확인
          // 응답 데이터의 구조에 따라 로그인 상태를 설정
          if (data.message === '로그인 상태 유지 중') {
            setIsLoggedIn(true);
          } else {
            setIsLoggedIn(false);
          }
        } else {
          console.error('로그인 상태 확인 실패');
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error('로그인 상태 확인 중 에러 발생:', error);
        setIsLoggedIn(false);
      }
    };

    checkLoginStatus();
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
      const response = await fetch('http://localhost:8080/member/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // 세션 ID를 포함하여 요청
      });

      if (response.ok) {
        console.log('로그아웃 성공');
        setIsLoggedIn(false);
        navigate('/'); // 로그아웃 후 로그인 페이지로 이동
      } else {
        console.error('로그아웃 실패');
      }
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
              <Button
                className="logoutButton"
                size={'small'}
                onClick={handleLogout}
              >
                로그아웃
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
          <IoCartOutline className="cart" onClick={onClickToRCart} />
          <Button
            className="buyList"
            size={'small'}
            color={'primary'}
            style={{ marginLeft: '10px' }}
          >
            구매목록
          </Button>
        </div>
      </div>
    </HeaderBlock>
  );
};

export default Header;
