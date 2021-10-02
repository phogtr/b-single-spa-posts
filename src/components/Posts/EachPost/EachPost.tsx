import React from "react";
import { Link } from "react-router-dom";
import { IPostData } from "../../../api/post.api";
import "./EachPost.style.css";

interface IEachPostProps {
  postData: IPostData;
}

export const EachPost: React.FC<IEachPostProps> = ({ postData }) => {
  return (
    <li>
      <Link to={`/posts/${postData.id}`}>
        <div className="box">
          <h3>{postData.title}</h3>
          <p>{postData.body}</p>
        </div>
      </Link>
    </li>
  );
};
