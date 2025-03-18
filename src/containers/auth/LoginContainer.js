import React, { useState } from "react";
import { LoginBlock } from "../../components/auth/Login.style";
import Login from "../../components/auth/Login";


const LoginContainer = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };


  return (
    <LoginBlock>
      <Login
        formData={formData}
        handleChange={handleChange}
        // handleSubmit={handleSubmit}
      />
    </LoginBlock>
  );
};

export default LoginContainer;
