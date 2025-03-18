import styled from 'styled-components';
import theme from '../../lib/styles/theme';
import { AiFillGithub } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  return (
    <FooterBlock>
      <div className="emailHelp">{'고객센터 >'}</div>
      <div className="desc">
        <p>FE : 김현우, 박지원 </p>
        <p>BE : 김현우, 박지원</p>
      </div>
      <Link to="https://github.com/ureca-15team">
        <div className="git">
          <AiFillGithub />
        </div>
      </Link>
    </FooterBlock>
  );
};

export default Footer;

const FooterBlock = styled.div`
  ${theme.flexCenterColumn}
  margin-top: auto;
  gap: 10px;
  height: 190px;
  width: 100%;  

  background-color: ${theme.lightGrayColor};


  .emailHelp {
    font-size: 1.2rem;
    font-weight: bold;
    color: ${theme.darkGrayColor};
    cursor: pointer;
  }
  p {
    font-size: 0.7rem;
    text-align: center;
    line-height: 20px;
    color: ${theme.darkGrayColor};
  }
  .git {
    cursor: pointer;
    font-size: 1.8rem;
    color: ${theme.darkGrayColor};
  }
`;
