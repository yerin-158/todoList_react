import React, { useCallback, useRef, useState } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';


const App = () => {

  const init = [
    {
      id: 1,
      text: '리액트 기초 알아보기',
      checked: true
    },
    {
      id: 2,
      text: '컴포넌트 스타일링 알아보기',
      checked: true
    },
    {
      id: 3,
      text: '일정 관리 앱 만들기',
      checked: false
    }
  ];

  const nextId = useRef(4); //고유값으로 사용될 id

  const [todos, setTodos] = useState(init);
  const addTodoItem = useCallback( text => {
    const nextTodos = todos.concat({
        id: nextId.current,
        text: text,
        checked: false
    });
    setTodos(nextTodos);
    nextId.current += 1;
  },[todos]);

  const deleteTodoItem = useCallback( id => {
    const nextTodos = todos.filter(todo => todo.id !== id);
    setTodos(nextTodos);
  },[todos]);

  const checkTodoItem = useCallback( id => {
    const nextTodos = todos.map(todo => todo.id === id? { ...todo, checked: !todo.checked} : todo);
    setTodos(nextTodos);
  },[todos]);

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