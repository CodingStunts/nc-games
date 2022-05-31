import { Link } from "react-router-dom";
import styles from "../Main.module.css";
import { useEffect, useState } from "react";
import { getCategories } from "../utils/api-reqs";
import LoggedInUser from "./LoggedInUser";
import useMatchMedia from "../hooks/useMatchMedia";

const Navbar = () => {
  const [categories, setCategories] = useState([]);
  const isDesktopResolution = useMatchMedia("(min-width: 800px)", true);
  const [showSideMenu, setshowSideMenu] = useState(false);

  useEffect(() => {
    getCategories().then((catData) => {
      setCategories(catData);
    });
  }, []);

  const toggleSideMenu = () => {
    setshowSideMenu((curr) => !curr);
  };

  return (
    <nav className={styles.Navbar}>
      <Link to="/home">
        <h1 className={styles.Title}>Room with a Review!</h1>
      </Link>
      {isDesktopResolution ? (
        <ul className={styles.navbarul}>
          <Link to="/reviews">
            <li>
              <p>All reviews</p>
            </li>
          </Link>

          <li>
            <p>Categories ▼</p>
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
          <Link to="/community">
            <li>
              <p>Community</p>
            </li>
          </Link>
          <li>
            <LoggedInUser />
          </li>
        </ul>
      ) : (
        <button onClick={toggleSideMenu} className={styles.sidebarbutton}>
          <img
            id="menu-icon"
            src={require("../media/menu-icon.png")}
            alt="menu-icon"
          />
        </button>
      )}

      {showSideMenu && !isDesktopResolution && (
        <aside className={styles.sidebar}>
          <button onClick={toggleSideMenu}>x</button>
          <ul className={styles.sidebarul}>
            <Link to="/reviews">
              <li>
                <p>All reviews</p>
              </li>
            </Link>

            <li>
              <p>Categories ▼</p>
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
            <Link to="/community">
              <li>
                <p>Community</p>
              </li>
            </Link>
            <li>
              <LoggedInUser />
            </li>
          </ul>
        </aside>
      )}
    </nav>
  );
};

export default Navbar;
