import React, { useRef } from 'react';
import {MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline} from 'react-icons/md';
import '../css/TodoListItem.scss';
import cn from 'classnames';

const TodoListItem = props => {
    const {todo, deleteTodoItem, checkTodoItem, style} = props;
    const {id, text, checked} = todo;
    
    return (
        <div className='TodoListItem-virtualized' style={style}>
        <div className="TodoListItem">
            <div className={cn('checkbox', {checked})} onClick={()=>checkTodoItem(id)}>
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank /> }
                <div className="text">{text}</div>
            </div>
            <div className="remove" onClick={()=>deleteTodoItem(id)}>
                <MdRemoveCircleOutline/>
            </div>
        </div>
        </div>
    );
};

export default React.memo(TodoListItem);