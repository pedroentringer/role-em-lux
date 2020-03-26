import React, { useState } from "react";

import Login from './login';
import Register from './register';

const ModalLogin: React.FC = props => {
  const [isLogin, setIsLogin] = useState(true)

  const handleLogin = () => setIsLogin(true)
  const handleRegister = () => setIsLogin(false)
  
  return isLogin ? <Login handleRegister={handleRegister}/> : <Register handleLogin={handleLogin}/>
}

export default ModalLogin;
