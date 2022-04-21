import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import styles from "../Main.module.css";

const StartUp = () => {
  const { user, setUser } = useContext(UserContext);

  const handleUserSelect = (event) => {
    setUser(event.target.value);
  };

  return (
    <div className={styles.StartUp}>
      <div className={styles.StartUpForm}>
        <h2>Welcome to</h2>
        <h1 className={styles.Title}>Room with a Review!</h1>
        <h3>A games review site.</h3>
        <hr />
        <h4>Please log in to proceed to site</h4>
        <form>
          <select id="logIn" value={user} onChange={handleUserSelect}>
            <option value="">*SELECT*</option>
            <option value="tickle122">tickle122</option>
            <option value="grumpy19">grumpy19</option>
            <option value="happyamy2016">happyamy2016</option>
            <option value="cooljmessy">cooljmessy</option>
            <option value="weegembump">weegembump</option>
            <option value="jessjelly">jessjelly</option>
          </select>
          <Link to="/home">
            <button type="submit">Log in</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default StartUp;
