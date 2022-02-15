import styles from "../Main.module.css";
import { deleteComment, patchCommentVotes } from "../utils/api-reqs";
import { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const CommentCard = ({ comment }) => {
  const [likes, setLikes] = useState(comment.votes);
  const { user } = useContext(UserContext);
  const commentDate = comment.created_at.slice(0, 10);

  const handleUpVote = () => {
    setLikes((currLikes) => {
      return currLikes + 1;
    });
    patchCommentVotes(comment.comment_id);
  };

  const handleDelete = (event) => {
    deleteComment(comment.comment_id);
    event.preventDefault();
  };

  return (
    <div className={styles.Comment}>
      <div className={styles.a}>
        <p>{comment.body}</p>
        <p>By @{comment.author}</p>
        <p>Posted on {commentDate}</p>
        <p>👍 {likes}</p>
        <button onClick={handleUpVote}>Like</button>
        {comment.author === user ? (
          <>
            <button onClick={handleDelete}>Delete</button>
          </>
        ) : null}
      </div>
    </div>
  );
};
export default CommentCard;
