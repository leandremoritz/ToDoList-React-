import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCount,
addTodo,
  changeTodo,
  removeTodo,
} from './Todo';
import styles from './Todo.module.css';

export function TodoList() {
  const todos = useSelector(selectCount);
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState('');

  const addItem = () => {
    dispatch (addTodo({ value: newTodo, checked: false }));
    setNewTodo('');
  }


  return (
  
    <div>
      {todos.map((item, index) => {
        return <div key={'todo' + index} className={styles.todos}>
          <input
            type={'checkbox'} 
            checked={item.checked}
            onChange={() => {dispatch(changeTodo(index))}}
          />
            <span className={ item.checked ? styles.strike : ''}>{item.value}</span>
          - <button onClick={() => {
            dispatch(removeTodo(index))
          }}>X</button>
        </div>
      })}
      <p className={styles.addTodo}>
        To Do List<br />
        <input placeholder='Add New Task' type='textbox' value={newTodo} onChange={(e) => setNewTodo(e.target.value)} onKeyDown={(e) => {
          if (e.key === 'Enter') {
            addItem();
          }

        }} />
        <button onClick={addItem}>Add new</button>
      </p>
      
    </div>
  );
}
