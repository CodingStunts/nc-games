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
      <p>Welcome, {user}!</p>
      <Link to="/">
        <button onClick={handleLogOut} className={styles.Logout}>
          Log Out
        </button>
      </Link>
    </div>
  );
};

export default LoggedInUser;
