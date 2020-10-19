import React, { useCallback } from 'react';
import {List} from 'react-virtualized';
import TodoListItem from './TodoListItem';
import '../css/TodoListItem.scss';

const TodoList = props => {
    const {todos, deleteTodoItem, checkTodoItem} = props;
    
    const rowRenderer = useCallback(
        ({index, key, style}) => {
            const todo = todos[index]; //todos에서 다음에 보여줄 항목만 가져온다.
            return (
                <TodoListItem 
                    key={todo.id}
                    todo={todo} 
                    deleteTodoItem={deleteTodoItem}
                    checkTodoItem={checkTodoItem}
                    style={style} // css도 함께 랜더링 될 수 있도록 한다.
                />
            )
        },
        [todos, deleteTodoItem, checkTodoItem]
    );

    return (
        <List
            className='TodoList'
            width={512} // 최대 넓이
            height={513} // 최대 높이
            rowCount={todos.length} // 항목 수
            rowHeight={57} // 항목 높이
            rowRenderer={rowRenderer} // 항목 랜더링에 쓰이는 함수
            list={todos} // 랜더링할 데이터
            style={{outline: 'none'}} // List에 기본으로 적용되는 outline 스타일 제거
        />
    );
};


export default React.memo(TodoList);