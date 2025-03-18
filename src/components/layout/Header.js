import HeaderBlock from './Header.style';
import { Button } from '../common';
import src from '../../assets/logo.jpg';
import { IoCartOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';


const Header = () => {
  console.log('Header 렌더링됨'); // ✅ 콘솔에 몇 번 찍히는지 확인
  const navigate = useNavigate();

  const onClickToHome = () => {
    navigate("/");
  };

  const onClickToLogin = () => {
    navigate('/login');
  };

  const onClickToRegister = () => {
    navigate('/register');
  };

  return (
    <HeaderBlock>
      <div className="container">
        <p className="logo">
          <img src={src} alt="logo" onClick={onClickToHome} />
        </p>
        <div className="nav">
          <Button size={'small'} onClick={onClickToLogin}>
            로그인
          </Button>
          <p style={{ color: 'grey' }}>|</p>
          <Button size={'small'} onClick={onClickToRegister}>
            회원가입
          </Button>

          <IoCartOutline className="cart" />
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
