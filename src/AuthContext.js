import { useState, createContext, useCallback, useEffect } from "react";
import _app from "./firebase.js";

const AuthContext = createContext();

const AuthProvider = ({ children, history }) => {
  const [user, setuser] = useState({name:"Martin"});
  // const [pending, setPending] = useState(false);
  

  const value = {
    user
  }


  useEffect(() => {
    _app.auth().onAuthStateChanged((user) => {
      setuser(user)
      // setPending(false)
    });
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };