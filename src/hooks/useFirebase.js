import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialization from "../Firebase/firebaseInit";

firebaseInitialization();

const useFirebase = () => {
  // for user show
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const auth = getAuth();
  const goggleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  //   sign in with google
  const signInWithGoogle = () => {
    signInWithPopup(auth, goggleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  //   sign in with github
  const signInWithGithub = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  //   sign out
  const logout = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };

  //   for updating state for current user we need to use this func
  useEffect(() => {
    onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          setUser(user);
        }
      },
      []
    );
  });

  return {
    signInWithGoogle,
    signInWithGithub,
    logout,
    user,
    error,
  };
};

export default useFirebase;
