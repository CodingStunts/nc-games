import axios from "axios";

export const myAPI = axios.create({
  baseURL: `https://jays-games-review-site.herokuapp.com/api`,
});

//GET ALL REQS
export const getCategories = () => {
  return myAPI.get("/categories").then(({ data }) => {
    return data.categories;
  });
};
export const getUsers = () => {
  return myAPI.get("/users").then(({ data }) => {
    return data.users;
  });
};
export const getReviews = (sort_by, order) => {
  return myAPI
    .get("/reviews", { params: { sort_by, order } })
    .then(({ data }) => {
      return data.reviews;
    });
};
export const getCatReviews = (category) => {
  return myAPI.get(`/reviews/?category=${category}`).then(({ data }) => {
    return data.reviews;
  });
};

export const getComments = () => {
  return myAPI.get("/comments").then(({ data }) => {
    return data.comments;
  });
};

//Get most popular reviews specifically
export const getPopReviews = () => {
  return myAPI.get("/reviews?sort_by=votes").then(({ data }) => {
    return data.reviews;
  });
};

//GET BY ID REQS
export const getUserByID = (username) => {
  return myAPI.get(`/users/${username}`).then(({ data }) => {
    return data.user;
  });
};
export const getReviewByID = (review_id) => {
  return myAPI.get(`/reviews/${review_id}`).then(({ data }) => {
    return data.review;
  });
};
export const getCommentsByReview = (review_id) => {
  return myAPI.get(`/reviews/${review_id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

//PATCH REQS - Upvote by 1.
export const patchReviewVotes = (review_id) => {
  return myAPI.patch(`/reviews/${review_id}`, { inc_votes: 1 });
};

export const patchCommentVotes = (comment_id) => {
  return myAPI.patch(`/comments/${comment_id}`, { inc_votes: 1 });
};

//POST REQS
export const postComment = (review_id, username, comment) => {
  return myAPI.post(`reviews/${review_id}/comments`, {
    username: username,
    comment: comment,
  });
};

//DELETE REQS
export const deleteComment = (comment_id) => {
  return myAPI.delete(`comments/${comment_id}`).then(({ data }) => {
    return data.comment;
  });
};
