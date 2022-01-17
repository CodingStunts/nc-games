import styles from "../Main.module.css";
import { useState } from "react";
import { getReviews } from "../utils/api-reqs";

const SortOrder = ({ updateReviews }) => {
  const [sortBy, setSortBy] = useState(undefined);
  const [order, setOrder] = useState(undefined);

  const handleSortBy = (event) => {
    setSortBy(event.target.value);
  };
  const handleOrder = (event) => {
    setOrder(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getReviews(sortBy, order).then((reviewsData) => {
      updateReviews(reviewsData);
    });
  };

  return (
    <div className={styles.SortOrder}>
      <form onSubmit={handleSubmit}>
        <label className={styles.Sort}>
          Sort by:
          <select id="sort" value={sortBy} onChange={handleSortBy}>
            <option value="created_at">Default - Date</option>
            <option value="votes">Votes</option>
            <option value="category">Category</option>
            <option value="owner">User</option>
            <option value="comment_count">Comment count</option>
          </select>
        </label>

        <label className={styles.Order}>
          Order:
          <select id="order" value={order} onChange={handleOrder}>
            <option value="desc">Default - Descending</option>
            <option value="asc">Ascending</option>
          </select>
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SortOrder;
