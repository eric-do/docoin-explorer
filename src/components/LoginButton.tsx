import React from 'react'
import { authContext } from '../contexts/AuthContext';
import { Redirect } from 'react-router';

const LoginButton = () => {
  const [redirectToExplorer, setRedirect] = React.useState<boolean>(false);
  const { signin } = React.useContext(authContext);

  const login = () => {
    signin(() => setRedirect(true));
  };

  if (redirectToExplorer) return <Redirect to={{pathname: '/explorer'}}/>

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