import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const logOut = () => {
    setUser({});
  };

  const loggedIn = !!user.username;

  return (
    <UserContext.Provider value={{ loggedIn, logOut, user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
