import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  Outlet,
} from 'react-router-dom';
import Template from '../containers/layout/Template';
import MainPage from '../pages/pages/MainPage';
import LoginPage from '../pages/auth/LoginPage';
import RegisterPage from '../pages/auth/RegisterPage';
import AuthLayout from '../containers/layout/AuthLayout';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Template header footer>
              <MainPage />
            </Template>
          }
        />
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

// const AuthRoute = () => {
//   const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
//   return isLoggedIn ? <Navigate to="/" /> : <Outlet />;
// };

export default Router;
