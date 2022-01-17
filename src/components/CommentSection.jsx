import { getCommentsByReview } from "../utils/api-reqs";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "../Main.module.css";
import CommentCard from "./CommentCard";
import { patchCommentVotes } from "../utils/api-reqs";

const CommentSection = () => {
  const { review_id } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getCommentsByReview(review_id).then((commentData) => {
      setComments(commentData);
    });
  }, []);

  return (
    <div className={styles.CommentSection}>
      {comments ? (
        <>
          <h2>Comments</h2>
          <ul>
            {comments.map((comment) => {
              return (
                <li key={comment.comment_id}>
                  <CommentCard comment={comment} />
                </li>
              );
            })}
          </ul>
        </>
      ) : null}
    </div>
  );
};

export default CommentSection;
