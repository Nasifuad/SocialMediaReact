import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const Header = () => {
  const { info, user } = useContext(AuthContext);
  return (
    <div>
      {info.name} {user.email}
    </div>
  );
};

export default Header;
