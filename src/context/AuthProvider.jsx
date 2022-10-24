import React, { createContext, useEffect, useState } from "react";
import {
   createUserWithEmailAndPassword,
   getAuth,
   onAuthStateChanged,
   signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   /* Create New User */
   const createNewUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
   };

   /* Login Existing User */
   const loginAUser = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
   };

   /* Get Current Logged in user */
   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         console.log("current user: ", currentUser);
         setUser(currentUser);
         setLoading(false);
      });

      return () => unsubscribe();
   }, []);

   const authInfo = { user, loading, createNewUser, loginAUser };
   return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
