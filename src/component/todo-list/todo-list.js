import { List } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { completeTodo, deleteTodo, editTodo } from '../../logic/actions';

import TodoListItem from '../todo-list-item';


const TodoList = ({todoData}) => {

  const isTodos = Boolean(todoData.length)

  const dispatch = useDispatch()

  const onToggleDone = (id) => dispatch(completeTodo(id))
  const onDeleted = (id) =>  dispatch(deleteTodo(id))
  const onEditSubmit = (value, id) =>  {
    debugger
    dispatch(editTodo(value, id))
  }
  


  const renderElements = (todos) => {
    return todos.map((item) => {
      return (
        <TodoListItem  {...item}
          key={item.id}
          onToggleDone={() => onToggleDone(item.id)}
          onDeleted={()=> onDeleted(item.id)}
          onEditSubmit={onEditSubmit}
        />)
    })
  }

  return (
    <List size="small" bordered>
      {isTodos ?
        renderElements(todoData) :
        <Img src='./assets/nodata.png' />}
    </List>
  );
}

const Img = styled.img`
  width: 100%;
  margin: auto;
`

export default TodoList;