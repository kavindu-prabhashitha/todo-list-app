function Todo(props){

    function deleteHandler(){
        console.log("Clicked !")
    }

    return(
        <div className="card">
        <h2>{props.title}</h2>
        <div>
        <button className="btn" onClick={deleteHandler}>delete</button>
        </div>
      </div>
    )
}

export default Todo;