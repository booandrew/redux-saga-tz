export const PUT_DATA = "PUT_DATA"
export const LOAD_DATA = "LOAD_DATA"
export const ADD_TODO = "ADD_TODO"
export const COMPLETE_TODO = "COMPLETE_TODO"
export const DELETE_TODO = "DELETE_TODO"
export const EDIT_TODO = "EDIT_TODO"


export const putData = (dataFromServer) => {
  return {
    type: PUT_DATA,
    payload: dataFromServer
  }
}

export const loadData = () => {
  return { type: LOAD_DATA }
}

export const addTodo = (label) => {
  return {
    type: ADD_TODO,
    payload: label,
  }
}

export const completeTodo = (id) => {
  return {
    type: COMPLETE_TODO,
    payload: id,
  }
}

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  }
}

export const editTodo = (value,id) => {
  debugger
  return {
    type: EDIT_TODO,
    value,
    id
  }
}