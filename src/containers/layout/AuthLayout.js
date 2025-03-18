import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return <Outlet />;  // ✅ 헤더 & 푸터 없이 로그인/회원가입 페이지만 렌더링
};

export default AuthLayout;