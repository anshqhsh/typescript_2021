{
    type Todo = {
        titile: string;
        description: string;
    };
    
    //타입들에 불변성을 줘서 마구마구 변경할 수 없게끔 만들어야한다.
    function display(todo: Readonly<Todo>){
        //todo.title = 'jaja';
    }
}