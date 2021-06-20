import { useState, createContext, useCallback, useEffect } from "react";
import { auth } from "./firebase.js";

const AuthContext = createContext();

const AuthProvider = ({ children, history }) => {
  const [user, setUser] = useState();
  const [users, setUsers] = useState([]);
  const [pending, setPending] = useState(true);
  
  const value = {
    user,
    users,
    setUsers,
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      setPending(false);
    });
  }, []);

  if (pending) return <div>Loading...</div>;

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
