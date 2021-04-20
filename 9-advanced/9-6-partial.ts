{
    type ToDo = {
        titile: string;
        description: string;
        label: string;
        priority: 'high' | 'low';
    };
    
    //부분적으로만 업데이트를 할 때 유용한 partial type
    function updateTodo(todo: ToDo, fieldsTodoUpdate: Partial<ToDo>): ToDo{
        return {...todo, ...fieldsTodoUpdate}//기존에 todo에 있는 spread연산자를 이용해서 복사 후 전달된 firldsTodoUpdate를 덮어씌우면 된다
    };
    const todo: ToDo = {
    titile : 'learn TypeScript',
    description: 'study hard',
    label: 'study',
    priority: 'high',
    };
    const update = updateTodo(todo, {priority: 'low'});
    console.log(update);
    
}
