import { Link } from "react-router-dom";
import styles from "../Main.module.css";
import { useEffect, useState } from "react";
import { getCategories } from "../utils/api-reqs";
import LoggedInUser from "./LoggedInUser";

const Navbar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((catData) => {
      setCategories(catData);
    });
  }, []);

  return (
    <nav className={styles.Navbar}>
      <Link to="/home">
        <h1 className={styles.Title}>Room with a Review!</h1>
      </Link>
      <ul>
        <Link to="/reviews">
          <li>
            <p className={styles.CommunityTitle}>All reviews</p>
          </li>
        </Link>
        <Link to="/categories">
          <li>
            <p className={styles.CommunityTitle}>Categories ⬇</p>
            <div className={styles.categoriesDropdown}>
              <ul>
                {categories.map((category) => {
                  return (
                    <Link
                      key={category.slug}
                      to={`/reviews/categories/${category.slug}`}
                    >
                      <li className={styles.Categories}>
                        {category.slug.charAt(0).toUpperCase() +
                          category.slug.slice(1)}
                      </li>
                    </Link>
                  );
                })}
              </ul>
            </div>
          </li>
        </Link>
        <Link to="/community">
          <li>
            <p className={styles.CommunityTitle}>Community</p>
          </li>
        </Link>
        <li>
          <LoggedInUser />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
