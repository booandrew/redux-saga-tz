import { ADD_TODO, COMPLETE_TODO, DELETE_TODO, EDIT_TODO, PUT_DATA } from "./actions"


const initialState = {
  todos: []
}
console.log(initialState.todos)

export const reducer = (state = initialState, action) => {
  switch (action.type) {

    case PUT_DATA:
      return { ...state, todos: action.payload }

    case COMPLETE_TODO:
      const prev = state.todos
      const idx = prev.findIndex(el => el.id === action.payload)
      const updatedItem = { ...prev[idx], completed: !prev[idx].completed && true }

      const newArray = [
        ...prev.slice(0, idx),
        updatedItem,
        ...prev.slice(idx + 1)
      ]
      return { ...state, todos: newArray }

    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, {
          id: Date.now().toString(),
          completed: false,
          title: action.payload,
        }]
      }

    case DELETE_TODO:
      return {
        ...state,
        todos: [...state.todos.filter((todo) => todo.id !== action.payload)]
      }

    case EDIT_TODO:
      const index = state.todos.findIndex(el => el.id === action.id)
      const item = { ...state.todos[index], title: action.value }

      return { ...state, 
          todos: [
        ...state.todos.slice(0, index),
        item,
        ...state.todos.slice(index + 1)
      ] }

    default: return state
  }
}