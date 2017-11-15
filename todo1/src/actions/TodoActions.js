import dispatcher from "../dispatcher";
export function createTodo(text){
	dispatcher.dispatch({
		type : "CREATE_TODO",
		text,
	});
}
export function deleteTodo(id){
	dispatcher.dispatch({
		type : "DELETE_TODO",
		id,
	});
}
export function reloadTodos(id){
	// axios("http://some-url").then((data) => {
		// console.log(data);
	// }
	dispatcher.dispatch({type : "FETCH_TODOS"});
	setTimeout(()=>{
		dispatcher.dispatch({type : "RECEIVE_TODOS", todos : [

			{
        id: 9776937973,
        text: "Go Grocery Shopping Again",
        complete: true
      },
      {
        id: 98279103,
        text: "Pay Phone Bill",
        complete: false
      },
    ]});
		if(false){
			dispatcher.dispatch({type : "FETCH_TODOS_ERR"});
		}
	}, 1000);
}