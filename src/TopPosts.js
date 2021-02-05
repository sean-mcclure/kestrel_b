import React from 'react';
import "./css/posts_and_headlines.css";
import avatar from "./img/avatar.png";

import { style } from './style.js';

const top_posts = ["This is a Headline Title.", 
                    "This is a Headline Title.",
                    "This is a Headline Title.", 
                    "This is a Headline Title.",
                    "This is a Headline Title."]

export var list_of_top_posts = top_posts.map((post, i) => 
      <div className="top_post_wrapper" key={i.toString()}>
          <img className="avatar top_posts_avatar" src={avatar} alt="avatar_img" onClick={(event) => {
        event.preventDefault();
        style.visible("avatar_icon");
      }}></img>
          <h4 className="top_post_title">{post}</h4>         
      </div>    
);

class TopPosts extends React.Component {
  render() {
    return (
         <>
         {list_of_top_posts}
         </>
    );
  }
}

export default TopPosts