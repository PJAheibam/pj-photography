import {
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { app } from "./config";
import { useEffect } from "react";

export const auth = getAuth(app);

export function loginWithPopup(provider) {
  return signInWithPopup(auth, provider);
}
export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function register(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function logout() {
  console.info("Clicked");
  signOut(auth)
    .then(() => console.info("Log Out Successfull!"))
    .catch((err) => console.error(err));
}

export function useAuthObserver(setLoading, setUser) {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
      } else setUser(null);
    });
    setLoading(false);
    return () => unsubscribe();
  }, []);
  return null;
}
