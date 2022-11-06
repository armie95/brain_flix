import React from "react";
import Comment from "../Comment/Comment";
import "./CommentsSection.scss";

const CommentsSection = ({ commentsList }) => {
  return (
    <section className="comments-section">
      {commentsList &&
        commentsList.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
    </section>
  );
};

export default CommentsSection;
