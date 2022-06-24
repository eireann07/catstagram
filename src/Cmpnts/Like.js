import React, { useState } from 'react'; 

const Like = () => {
    const [count, setCount] = useState(0);
    return (
        <div className='captions boxed flex-gap'>
        <p>{count} Likes</p>
        <button onClick={() => setCount(count + 1)}>Like</button> 
        </div>
        
        )
    }
    
    export default Like;