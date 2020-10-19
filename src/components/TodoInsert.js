import React, { useCallback, useState } from 'react';
import {MdAdd} from 'react-icons/md'
import '../css/TodoInsert.scss';

const TodoInsert = props => {
    const {addTodoItem} = props;

    const [text, setText] = useState('');
    const onChange = useCallback(e => {
        setText(e.target.value);
    }, []); // 처음 컴포넌트 생성할 때만 해당 함수를 만든다. 

    const onSubmit = useCallback(e => {
        addTodoItem(text);
        setText('');
        e.preventDefault(); // submit 버튼이 클릭되면 브라우저 새로고침이 발생 -> 이를 제한함.
    }, [addTodoItem, text]);

    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input 
                placeholder="할 일을 입력하세요."
                value={text}
                onChange={onChange}
            />
            <button type="submit">
                <MdAdd />
            </button>
        </form>
    );
};

export default TodoInsert;