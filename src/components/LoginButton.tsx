import React from 'react'
import { authContext } from '../contexts/AuthContext';

const LoginButton = () => {
  const { signin } = React.useContext(authContext);

  const login = () => {
    signin(() => {});
  };

  return (
    <button
      className="button has-background-info-dark has-text-white"
      onClick={login}
    >
      <strong>Log In</strong>
    </button>
  )
};

export default LoginButton;