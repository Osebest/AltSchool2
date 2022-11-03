import React from "react";
import { Link } from "react-router-dom";

export const PostItem = ({ post }) => {
  const {name , cell} = post;
  return (
    <Link to={`/user/${cell}`} className="link">
      <li className="list-group-item">
        {name.title}"." {name.first} {name.last}
      </li>
    </Link>
  );
};
