import { useState, useEffect, createContext, useContext } from 'react';
import firebase from '../firebase';

type UserState = {
  uid: string;
  displayName: string | null;
  photoURL: string | null;
  email: string | null;
};

type useUser = {
  user: UserState;
  set: (
    uid: string,
    displayName: string,
    photoURL: string,
    email: string,
  ) => void;
  loadingUser: boolean;
};

const defaultUser = { uid: '', displayName: null, photoURL: null, email: null };

export const UserContext = createContext<useUser>({
  user: defaultUser,
  set: () => {
    console.log('set');
  },
  loadingUser: true,
});

interface Props {
  children: React.ReactNode;
}

const Context: React.FC<Props> = ({ children }) => {
  const [loadingUser, setLoadingUser] = useState<boolean>(true);
  const [user, setUser] = useState<UserState>(defaultUser);

  useEffect(() => {
    const unsubscriber = firebase.auth().onAuthStateChanged(async (users) => {
      try {
        if (users !== null) {
          const { uid, displayName, photoURL, email } = users;
          setUser({ uid, displayName, photoURL, email });
        }
      } finally {
        setLoadingUser(false);
      }
    });
    return () => unsubscriber();
  }, []);

  const set = (
    uid: string,
    displayName: string | null,
    photoURL: string | null,
    email: string | null,
  ) => {
    setUser({
      uid,
      displayName: displayName !== null ? displayName : '',
      photoURL: photoURL !== null ? photoURL : '',
      email: email !== null ? email : '',
    });
  };

  return (
    <UserContext.Provider value={{ user, set, loadingUser }}>
      {children}
    </UserContext.Provider>
  );
};
export default Context;
export const useUser = (): useUser => useContext(UserContext);
