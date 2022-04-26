import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUsers } from "../utils/api-reqs";
import styles from "../Main.module.css";
import Navbar from "./Navbar";
import { NewtonsCradle } from "@uiball/loaders";

const Community = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((usersData) => {
      setUsers(usersData);
    });
  }, []);

  return (
    <div className={styles.a}>
      <Navbar />
      {users.length > 0 ? (
        <div className={styles.Community}>
          <h1>Community</h1>
          {users.map((user) => {
            return (
              <ul className={styles.User}>
                <Link key={user.username} to={`/community/${user.username}`}>
                  <li>{user.avatar_url}</li>
                  <li>{user.username}</li>
                </Link>
              </ul>
            );
          })}
        </div>
      ) : (
        <div className={styles.AllReviews}>
          <NewtonsCradle color="#e07a5f" />
        </div>
      )}
    </div>
  );
};

export default Community;
