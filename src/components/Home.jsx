import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import PopReviews from "./PopReviews";
import styles from "../Main.module.css";

const Home = () => {
  return (
    <div className={styles.Main}>
      <Navbar />
      <Sidebar />
      <PopReviews />
    </div>
  );
};

export default Home;
