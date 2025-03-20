import { useEffect, useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { checkLoginStatus } from '../api/auth';

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [isAllowed, setIsAllowed] = useState(false);
  const hasAlerted = useRef(false);

  useEffect(() => {
    const verifyLogin = async () => {
      try {
        const data = await checkLoginStatus();
        if (data.message === '로그인 상태 유지 중') {
          setIsAllowed(true);
        } else {
          if (!hasAlerted.current) {
            hasAlerted.current = true;
            navigate('/');
            setTimeout(() => {
              alert('접근할 수 없는 경로입니다.');
            }, 100);
          }
          setIsAllowed(false);
        }
      } catch (error) {
        console.error('로그인 상태 확인 중 에러 발생:', error);
        if (!hasAlerted.current) {
          hasAlerted.current = true;
          navigate('/');
          setTimeout(() => {
            alert('접근할 수 없는 경로입니다.');
          }, 100);
        }
        setIsAllowed(false);
      } finally {
        setIsLoading(false);
      }
    };

    verifyLogin();
  }, [navigate, location.pathname]);

  if (isLoading) return null;

  return isAllowed ? children : null;
};

export default ProtectedRoute;
