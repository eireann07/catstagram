import React from 'react';
import Like from './Like'

const Post = (props) => {
  return ( 
    <>
      {props.post === ' ' ? <div>no post </div> : <div> <div className="postDiv"> 
      <img src={props.post} alt="ruh-roh!" className="images" />
      <Like/>
    </div> </div>}
    </>
  );
};

export default Post;

// import Likes from './ Cmpnts/Likes';