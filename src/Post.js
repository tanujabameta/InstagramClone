import React from "react";
import "./Post.css";
import Avatar from "@mui/material/Avatar";

const Post = ({ imgUrl, userName, caption }) => {
  return (
    <div className="post">
      {/* header {avatar + username} */}
      <div className="post_header">
        <Avatar
          className="post_avatar"
          alt="Tanuja"
          src="/static/images/avatar/1.jpg"
        />
        <h3>{userName}</h3>
      </div>

      {/* image */}
      <img src= {imgUrl} alt="" className="post_image" />

      {/* username + caption */}
      <h4 className="post_text">
        <strong>{userName}</strong> {caption}
      </h4>
    </div>
  );
};

export default Post;
