/* eslint-disable react/prop-types */
import { createContext } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();
const info = {
  name: "Nasif",
  email: "n@n.com",
  password: "123456",
  photo: "https://i.pravatar.cc/300",
};
const user = {
  name: "Nasif",
  email: "n@n.com",
  password: "123456",
  photo: "https://i.pravatar.cc/300",
};
const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={{ info, user }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
