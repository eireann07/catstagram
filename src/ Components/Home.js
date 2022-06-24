import Post from './Components/Post'

const Home = () => {
    return(
        <div className="App">
      <Navbar/>
      {/* <Likes/>
      <Dislikes/>  */}
      <>
      <div>
      <input 
        type = 'text' 
        onChange={(e) => setUrl(e.target.value)} 
        placeholder = "type url here"
        value={url}/>
      <button className ="submit" onClick={makePost}>
        Submit
        </button>
      </div>
      {post == " "? (
        <div>no posts</div>
      ) : (
        <div>
          {post.map((item) => (<Post post={item}/>))}
        </div>
      )}

      {/* <img src='https://catadoptionteam.org/wp-content/uploads/2019/07/Leo-DSC_1551-used-for-postcard-2017.jpg' alt='ginger-kitten' class='images'/> */}
      
      

      </>
        
      {/* Class 4: <form onSubmit={submitFun}>
        <input type ="text" placeholder ="email" onChange={setEmail}/>
        <input type ="password" placeholder="password" onChange={setPassword}/>

        <button type = 'submit'>submit</button>
      </form> */}
      
    </div>
    )
}
export default Home;
