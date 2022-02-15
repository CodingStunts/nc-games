import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getUserByID } from "../utils/api-reqs";
import styles from "../Main.module.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const SingleUser = () => {
  const { username } = useParams();
  const [user, setUser] = useState();

  useEffect(() => {
    getUserByID(username).then((userData) => {
      setUser(userData);
    });
  }, []);

  return (
    <div className={styles.a}>
      <Navbar />
      <Sidebar />
      <div className={styles.SingleUser}>
        {user ? (
          <>
            <h1>{user[0].name}</h1>
            <br />
            <img
              src={user[0].avatar_url}
              width="100"
              className={styles.UserPic}
            />
            <br />
            <h3> @{user[0].username}</h3>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default SingleUser;
