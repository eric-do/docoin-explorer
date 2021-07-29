import React from 'react'
import { authContext } from '../contexts/AuthContext';

const LogoutButton = () => {
  const { signout } = React.useContext(authContext);

  const logout = () => {
    signout(() => {});
  };

  return (
    <button
      className="button has-background-info-dark has-text-white"
      onClick={logout}
    >
      <strong>Log Out</strong>
    </button>
  )
};

export default LogoutButton;