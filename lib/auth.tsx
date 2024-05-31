'use client';
import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  ReactNode
} from "react";

import {
  User,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  GithubAuthProvider
} from "firebase/auth";
import { auth } from "./firebase";

type ContextState = {
  user: User | null
  signinWithGithub: () => Promise<void | User>
  signout: () => Promise<void>
};

const AuthContext = createContext<ContextState | null>(null);

export function ProvideAuth({ children }: { children: ReactNode }) {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

function useProvideAuth() {
  const [user, setUser] = useState<User | null>(null);

  const signinWithGithub = () => {
    return signInWithPopup(auth, new GithubAuthProvider()).then((response) => {
      setUser(response.user);
      return response.user;
    }).catch(error => console.log('🚀  error--- :', error))
  };

  const signout = (): Promise<void> => {
    return signOut(auth).then(() => {
      setUser(null);
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    },);

    return () => unsubscribe();
  }, []);

  return {
    user,
    signinWithGithub,
    signout
  };
}
