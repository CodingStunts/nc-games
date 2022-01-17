import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import {
  getReviewByID,
  patchReviewVotes,
  postComment,
} from "../utils/api-reqs";
import styles from "../Main.module.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import CommentSection from "./CommentSection";
import { UserContext } from "../contexts/UserContext";

const ReviewPage = () => {
  const { review_id } = useParams();
  const [review, setReview] = useState([]);
  const [likes, setLikes] = useState();
  const [comment, setComment] = useState();
  const { user } = useContext(UserContext);

  useEffect(() => {
    getReviewByID(review_id).then((reviewData) => {
      setReview(reviewData);
      setLikes(reviewData.votes);
    });
  }, []);

  const handleUpvote = () => {
    setLikes((currLikes) => {
      return currLikes + 1;
    });
    patchReviewVotes(review_id);
  };

  const handleCatchComment = (event) => {
    setComment(event.target.value);
  };

  const handlePostComment = (event) => {
    postComment(review_id, user, comment);
    event.preventDefault();
  };

  return (
    <div>
      <Sidebar />
      <Navbar />
      <div className={styles.SingleReview}>
        {review ? (
          <>
            <h1>{review.title}</h1>
            <br />
            <img src={review.review_img_url} width="350" />
            <br />
            <h2>Review by @{review.owner}</h2>
            <h2>Posted: {review.created_at}</h2>
            <br />
            <p>{review.review_body}</p>
            <br />
            <h3>Game category: {review.category}</h3>
            <br />
            <h3>Game designer: {review.designer}</h3>
            <br />
            <br />
            <h3>Upvote: {likes}</h3>
            <button onClick={handleUpvote}>Like</button>
            <h3>Comments: {review.comment_count}</h3>
            <form>
              <label>
                Write your comment here:
                <input
                  type="text"
                  name="comment"
                  onChange={handleCatchComment}
                />
              </label>
              <button onClick={handlePostComment} type="submit">
                Post
              </button>
            </form>
            <CommentSection review_id={review_id} />
          </>
        ) : null}
      </div>
    </div>
  );
};

export default ReviewPage;
