import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCount,
addTodo,
  changeTodo,
  removeTodo,
} from './Todo';
import styles from './Todo.module.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


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
            <button onClick={() => {
            dispatch(removeTodo(index))
          }}>X</button>
          
            <span className={ item.checked ? styles.strike : ''}>{item.value}</span>
        
           --<input
            type={'Checkbox'} 
            Checked={item.Checked}
            onChange={() => {dispatch(changeTodo(index))}}
          />
        </div>
      })}
      <p className={styles.addTodo}>
        To Do List<br />
        <TextField id="outlined-basic" label="Type new task" variant="outlined"  value={newTodo} onChange={(e) => setNewTodo(e.target.value)} onKeyDown={(e) => {
          if (e.key === 'Enter') {
            addItem();
          }
        }} />
        <Button variant="outlined" onClick={addItem}>Add New Todo</Button>
      </p>
    </div>
  );
}
