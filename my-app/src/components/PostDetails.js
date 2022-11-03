import React from "react";
import { useParams } from "react-router-dom";

export const PostDetails = ({ posts }) => {
  const { cell } = useParams();

  let content = <h2>Loading...</h2>;
  const details = posts.filter(post => post.cell === cell)
  
  const sortContent = () => {
      if (details[0].cell === cell) {
        content = (
          <div className="d-flex justify-content-center mt-5">
            <div className="card">
              <img
                src={details[0].picture.medium}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h2 className="card-title">
                  {details[0].name.title} {details[0].name.first} {details[0].name.last}
                </h2>
                <p className="card-text">{details[0].email}</p>
              </div>
            </div>
          </div>
        );
      }
  };

  sortContent();

  return <>{content}</>;
};
