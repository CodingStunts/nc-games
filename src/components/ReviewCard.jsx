import styles from "../Main.module.css";

const ReviewCard = ({ review }) => {
  return (
    <div className={styles.ReviewCard}>
      <p>Game title: {review.title}</p>
      <p>Game designer: {review.designer}</p>
      <p>Review author: {review.owner}</p>
      <p>👍 {review.votes} </p>
    </div>
  );
};

export default ReviewCard;
