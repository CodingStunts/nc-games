import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import styles from "../Main.module.css";
import useMatchMedia from "../hooks/useMatchMedia";

const LoggedInUser = () => {
  const { user, logOut } = useContext(UserContext);
  const handleLogOut = () => {
    logOut();
  };

  const formatLoggedIn = useMatchMedia("(min-width: 800px)", true);

  return (
    <div>
      {formatLoggedIn ? (
        <div className={styles.LoggedInUser}>
          <p>Welcome, {user}!</p>
          <Link to="/">
            <button onClick={handleLogOut} className={styles.Logout}>
              Log Out
            </button>
          </Link>
        </div>
      ) : (
        <div className={styles.LoggedInUserSidebar}>
          <p>Welcome, {user}!</p>
          <Link to="/">
            <button onClick={handleLogOut} className={styles.Logout}>
              Log Out
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default LoggedInUser;
