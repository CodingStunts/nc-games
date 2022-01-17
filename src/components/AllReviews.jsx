import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import { getReviews } from "../utils/api-reqs";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import styles from "../Main.module.css";
import SortOrder from "./SortOrder";

const AllReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews().then((reviewsData) => {
      setReviews(reviewsData);
    });
  }, []);

  const updateReviews = (reviews) => {
    setReviews(reviews);
  };

  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className={styles.AllReviews}>
        <h1>All Reviews</h1>
        <SortOrder updateReviews={updateReviews} />
        <ul>
          {reviews.map((review) => {
            return (
              <Link key={review.review_id} to={`/reviews/${review.review_id}`}>
                <li>
                  <ReviewCard review={review} />
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default AllReviews;