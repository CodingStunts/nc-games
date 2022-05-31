import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCatReviews } from "../utils/api-reqs";
import ReviewCard from "./ReviewCard";
import Navbar from "./Navbar";
import styles from "../Main.module.css";
import { NewtonsCradle } from "@uiball/loaders";

const ReviewsByCat = () => {
  const [reviews, setReviews] = useState([]);

  const { category } = useParams();

  const capitalCategory = category[0].toUpperCase() + category.slice(1);

  useEffect(() => {
    getCatReviews(category).then((reviewsData) => {
      setReviews(reviewsData);
    });
  }, [category]);

  return (
    <div>
      <Navbar />
      {reviews.length > 0 ? (
        <div className={styles.CatReviews}>
          <h1>{`${capitalCategory}`} Reviews</h1>
          <ul>
            {reviews.map((review) => {
              return (
                <Link
                  key={review.review_id}
                  to={`/reviews/${review.review_id}`}
                >
                  <li>
                    <ReviewCard review={review} />
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      ) : (
        <div className={styles.CatReviews}>
          <h1>{`${capitalCategory}`} Reviews</h1>
          <NewtonsCradle color="#e07a5f" />
        </div>
      )}
    </div>
  );
};

export default ReviewsByCat;
