import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUsers } from "../utils/api-reqs";
import styles from "../Main.module.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

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
      <Sidebar />
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
    </div>
  );
};

export default Community;
