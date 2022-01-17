import styles from "../Main.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import { getPopReviews } from "../utils/api-reqs";

const PopReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getPopReviews().then((reviewsData) => {
      const topFour = reviewsData.slice(0, 4);
      setReviews(topFour);
    });
  }, []);

  return (
    <div className={styles.Popular}>
      <h1>Popular Reviews</h1>
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
  );
};

export default PopReviews;