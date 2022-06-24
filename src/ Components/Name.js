const Name = (props) =>{
    console.log(props);

    return (
    <> 
    <h1>Name: {props.name} </h1>
    <p>Age: {props.age > 18 ? props.age: 'null'}</p>
    <p>Description: {props.description}</p>
    <img src = {props.url} alt = ' '/>
    </>
    )
}

export default Name; 