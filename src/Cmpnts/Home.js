import React, { useState } from 'react';
import Navbar from './Navbar';
import Post from './Post';

const Home = () => {
    const [post, setPost] = useState([]);
    const [url, setUrl] = useState("");
  
    const makePost = () => {
      setPost([...post, url]);
      setUrl(' ');
    };
  
    console.log(post);
   
    return(
        <div className="App">
      <Navbar/>
      <>
      <div>
        <h4>Copy and paste image URLs to create a collection of your favorite kitteh pics!</h4>
      <input 
        type = 'text' 
        onChange={(e) => setUrl(e.target.value)} 
        placeholder = "type url here"
        value={url}/>
      <button className ="submit" onClick={makePost}>
        Post
        </button>
      </div>
      {post === " " ? (
        <div>no posts</div>
      ) : (
        <div>
          {post.map((item) => (<Post post={item}/>))}
        </div>
      )}
      </>
    </div>
    )
}
export default Home; 