import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import styles from "../Main.module.css";

const LoggedInUser = () => {
  const { user, logOut } = useContext(UserContext);
  const handleLogOut = () => {
    logOut();
  };

  return (
    <div className={styles.LoggedInUser}>
      <p>You are logged in as:</p>
      <h3>{user}</h3>
      <Link to="/">
        <button onClick={handleLogOut}>Log Out</button>
      </Link>
    </div>
  );
};

export default LoggedInUser;
