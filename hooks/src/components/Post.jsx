import React from "react";

const Post = ({ posts }) => {
  return (
    <ul>
      {posts.map((post) => {
        const { id, title, body } = post;
        return (
          <li key={id}>
            <h2>{title}</h2>
            <p>{body}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Post;
