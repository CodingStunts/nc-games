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
      <div className={styles.a}>
        <Link to="/reviews">
          <h2 className={styles.AllReviewsTitle}>All Reviews</h2>
        </Link>
        <h2>Categories:</h2>
        <ul>
          {categories.map((category) => {
            return (
              <Link
                key={category.slug}
                to={`/reviews/categories/${category.slug}`}
              >
                <li className={styles.Categories}>{category.slug}</li>
              </Link>
            );
          })}
        </ul>
        <br></br>
      </div>
    </div>
  );
};

export default Sidebar;
