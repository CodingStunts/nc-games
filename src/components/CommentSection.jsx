import { getCommentsByReview } from "../utils/api-reqs";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "../Main.module.css";
import CommentCard from "./CommentCard";

const CommentSection = () => {
  const { review_id } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getCommentsByReview(review_id).then((commentData) => {
      setComments(commentData);
    });
  }, [comments, review_id]);

  return (
    <div className={styles.CommentSection}>
      {comments ? (
        <>
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
