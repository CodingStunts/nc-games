import { Link } from "react-router-dom";
import styles from "../Main.module.css";
import LoggedInUser from "./LoggedInUser";

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <Link to="/home">
        <h1>NC Games</h1>
      </Link>
      <Link to="/community">
        <h3>Community</h3>
      </Link>
      <LoggedInUser />
    </nav>
  );
};

export default Navbar;
