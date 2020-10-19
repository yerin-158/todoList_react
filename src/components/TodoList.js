import React from 'react';
import TodoListItem from './TodoListItem';
import '../css/TodoListItem.scss';

const TodoList = props => {
    const {todos, deleteTodoItem, checkTodoItem} = props;
    
    return (
        <div className="TodoList">
            {todos.map(todo => 
                <TodoListItem 
                    key={todo.id}
                    todo={todo} 
                    deleteTodoItem={deleteTodoItem}
                    checkTodoItem={checkTodoItem}
                />
                )}
        </div>
    );
};


export default TodoList;