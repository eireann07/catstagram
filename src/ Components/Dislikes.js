const Dislikes = () => {
    let count = 0
    let i = 0

    const increaseCount = () => {
        for (i=0; i<1; i++) count += 1;
        console.log(`You have ${count} dislikes!`)
    }
    return (
        <>
        <h1>Dislike = {count}</h1>
        <button onClick={increaseCount}>DISLIKE</button>
        </>
    )
}

export default Dislikes;