import Likes from './Components/Likes'
const Post = (props) => {
  return ( 
    <>
      {props.post == ' ' ? <div>no post </div> : <div> <div className="postDiv"> 
      <img src={props.post} alt="ginger-kitten" className="images" />
      <Likes />
    </div> </div>}
    </>
  );
};

export default Post;