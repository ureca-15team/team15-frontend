import HeaderBlock from './Header.style';
import { Button } from '../common';
import src from '../../assets/logo.jpg';
import { IoCartOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const onClickToLogin = () => {
    navigate("/login");
  };


  return (
    <HeaderBlock>
      <p className="logo">
        <img src={src} alt="logo" />
      </p>
      <div className="nav">
        {/* {isLoggedIn ? (
          <Button size={'small'}>로그아웃</Button>
        ) : ( */}
        <>
          <Button size={'small'} onClick={onClickToLogin}>로그인</Button>
          <p style={{ color: 'grey' }}>|</p>
          <Button size={'small'}>회원가입</Button>
        </>
        {/* )} */}
        <>
        <IoCartOutline className='cart'/>
          <Button
            className="buyList"
            size={'small'}
            color={'primary'}
            style={{ marginLeft: '10px' }}
          >
            구매목록
          </Button>
        </>
      </div>
    </HeaderBlock>
  );
};

export default Header;
