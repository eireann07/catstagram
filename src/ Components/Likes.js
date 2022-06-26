import React, { useState } from 'react'; 
//Class 5 work
const Likes = () => {
    const [count, setCount] = useState(0); //always pass an initial value to your state
    //let count = 0
    //let i = 0

    // const incCount = () => {
    //         //let inc = count + 1 //sets the variable that will be taken by setCount
    //     setCount(count +1) //cleaner code
    //cleanest code in HTML section
        
        // count = count++;
        // //for (i=0; i<1; i++) count += 1;
        // console.log(`You have ${count} likes!`)
    //}
    return (
        <div className='captions boxed flex-gap'>
        <p>{count} Likes</p>
        <button onClick={() => setCount(count + 1)}>Like</button> 
        {/* <button onClick={() => setCount(count - 1)}>DISLIKE</button> */}
        </div>
        
    )
}

export default Likes;