import { Route, Routes, HashRouter } from 'react-router-dom';
import Template from '../containers/layout/Template';
import MainPage from '../pages/pages/MainPage';
import LoginPage from '../pages/auth/LoginPage';
import RegisterPage from '../pages/auth/RegisterPage';
import AuthLayout from '../containers/layout/AuthLayout';
import ProductPage from '../pages/pages/ProductPage';
import OrderPage from '../pages/pages/OrderPage';
import CartPage from '../pages/pages/CartPage';
import ScrollToTop from '../components/common/ScrollToTop';
import ProtectedRoute from './ProtectedRoute';

const Router = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <Template header footer>
              <MainPage />
            </Template>
          }
        />
        <Route
          path="/item/:itemId"
          element={
            <Template header footer>
              <ProductPage />
            </Template>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Template header footer>
                <CartPage />
              </Template>
            </ProtectedRoute>
          }
        />
        <Route
          path="/order"
          element={
            <ProtectedRoute>
              <Template header footer>
                <OrderPage />
              </Template>
            </ProtectedRoute>
          }
        />
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default Router;
