import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCatReviews } from "../utils/api-reqs";
import ReviewCard from "./ReviewCard";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import styles from "../Main.module.css";

const ReviewsByCat = () => {
  const [reviews, setReviews] = useState([]);

  const { category } = useParams();

  useEffect(() => {
    getCatReviews(category).then((reviewsData) => {
      setReviews(reviewsData);
      console.log(reviewsData);
    });
  }, [category]);

  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className={styles.CatReviews}>
        <h1>{`${category}`} Reviews</h1>
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

export default ReviewsByCat;
