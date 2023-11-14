import { User, onAuthStateChanged, signOut } from 'firebase/auth';
import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextProps {
    authUser: null;
    loggedIn: boolean;
    userSignOut: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
    authUser: null,
    loggedIn: false,
    userSignOut: () => {},
});

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [authUser, setAuthUser] = React.useState(null);
    const [loggedIn, setLoggedIn] = React.useState(false);

    useEffect(() => {
          const listen = onAuthStateChanged(auth, (user: any) => {
                if (user) {
                        setAuthUser(user);
                        localStorage.setItem("user", JSON.stringify(user));
                        console.log(user);
                } else {
                        setAuthUser(null);
                }
          });

          return () => {
              listen();
          };
    }, []);

  const userSignOut = () => {
    signOut(auth)
        .then(() => {
            console.log("sign out successful");
        })
        .catch((error) => console.log(error));
  };

  return (
    <AuthContext.Provider
        value={{
            authUser: null,
            loggedIn,
            userSignOut,
        }}
    >
        {children}
    </AuthContext.Provider>
  );
};
