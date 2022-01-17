import { Link } from "react-router-dom";
import styles from "../Main.module.css";
import { useEffect, useState } from "react";
import { getCategories } from "../utils/api-reqs";

const Sidebar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((catData) => {
      setCategories(catData);
    });
  }, []);

  return (
    <div className={styles.Sidebar}>
      <Link to="/reviews">
        <h2>All Reviews</h2>
      </Link>
      <h2>Categories</h2>
      <ul>
        {categories.map((category) => {
          return (
            <Link
              key={category.slug}
              to={`/reviews/categories/${category.slug}`}
            >
              <li>{category.slug}</li>
            </Link>
          );
        })}
      </ul>
      <br></br>
    </div>
  );
};

export default Sidebar;
