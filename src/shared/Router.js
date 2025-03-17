import { BrowserRouter, Route, Routes } from "react-router-dom";
import Template from '../containers/layout/Template';
import MainPage from '../pages/pages/MainPage';

const Router = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Template header footer>
            <MainPage />
          </Template>
        }>

        </Route>
      </Routes>
    
    </BrowserRouter>

  )




}

export default Router;