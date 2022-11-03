import React from "react";
import { PostItem } from "./PostItem";

export const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className="list-group mb-4">
      {posts.map((post) => (
        <PostItem post={post} key={post.cell}/>
      ))}
    </ul>
  );
};
