import React, { useCallback, useReducer, useRef, useState } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';


const createBulkTodos = () => {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    })
  }
  return array;
}

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'INSERT' :
      return state.concat(action.todo);
    case 'REMOVE' :
      return state.filter(todo => todo.id !== action.id);
    case 'UPDATE' :
      return state.map(todo => todo.id === action.id? { ...todo, checked: !todo.checked} : todo);
    default :
      return state;
  }
}


const App = () => {

  const nextId = useRef(2501); //고유값으로 사용될 id

  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

  const addTodoItem = useCallback(text => {
    const todo = {
      id: nextId,
      text: text,
      checked: false
    };
    dispatch({type: 'INSERT', todo: todo});
  }, []);

  const deleteTodoItem = useCallback(id => {
    dispatch({type: 'REMOVE', id: id})
  }, [])

  const checkTodoItem = useCallback(id => {
    dispatch({type: 'UPDATE', id: id})
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert 
        addTodoItem={addTodoItem}
      />
      <TodoList 
        deleteTodoItem={deleteTodoItem}
        checkTodoItem={checkTodoItem}
        todos={todos}
      />
    </TodoTemplate>
  );
};

export default App;