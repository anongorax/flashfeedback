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
import { createUser } from "./firestore";

export type FormattedUser = {
  uid: string
  email: string | null
  name: string | null
  provider: string
  photoUrl: string | null
}

type ContextState = {
  user: FormattedUser | null
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
  const [user, setUser] = useState<FormattedUser | null>(null);

  const formatUser = (user: User) => {
    return {
      uid: user.uid,
      email: user.email,
      name: user.displayName,
      provider: user.providerData[0].providerId,
      photoUrl: user.photoURL
    };
  };

  const handleUser = (rawUser: User) => {
    if (rawUser) {
      const user = formatUser(rawUser);
      createUser(user.uid, user);
      setUser(user)
      return user
    }
    setUser(null);
    return false;
  }

  const signinWithGithub = () => {
    return signInWithPopup(auth, new GithubAuthProvider()).then((response) => {
      // setUser(response.user);
      handleUser(response.user)
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
        // setUser(user);
        handleUser(user)
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
