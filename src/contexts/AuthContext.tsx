import React, { createContext } from "react";
import netlifyIdentity, { User } from 'netlify-identity-widget';

export interface AuthContext {
  isAuthenticated: boolean;
  user: User | null;
  signin: (cb: (user: User | null) => void) => void;
  signout: (cb: () => void) => void;
}

const netlifyAuth: AuthContext = {
  isAuthenticated: false,
  user: null,
  signin(callback: (user: User) => void) {
    this.isAuthenticated = true;
    netlifyIdentity.open();
    netlifyIdentity.on('login', user => {
      this.user = user;
      callback(user);
    });
  },
  signout(callback: () => void) {
    this.isAuthenticated = false;
    netlifyIdentity.logout();
    netlifyIdentity.on('logout', () => {
      this.user = null;
      callback();
    });
  }
};

interface AuthProps {
  children?: React.ReactNode;
};

const defaultAuth = {
  isAuthenticated: false,
  user: null,
  signin: (cb: (user: User | null) => void) => {},
  signout: (cb: () => void) => {},
};

export const authContext = createContext<AuthContext>(defaultAuth);

export const useProvideAuth = () => {
  const [user, setUser] = React.useState<User | null>(null);
  const [isAuthenticated, setAuthenticated] = React.useState<boolean>(false);

  const signin = (cb: (user: User | null) => void) => {
    return netlifyAuth.signin(user => {
      setUser(user);
      setAuthenticated(true)
      cb(user);
    })
  }

  const signout = (cb: () => void) => {
    return netlifyAuth.signout(() => {
      setUser(null);
      setAuthenticated(false)
      cb();
    })
  }

  return { isAuthenticated, user, signin, signout }
};

export const ProvideAuth: React.FC<AuthProps> = ({ children }) => {
  const auth = useProvideAuth();

  return (
    <authContext.Provider value={auth}>
      { children }
    </authContext.Provider>
  )
};