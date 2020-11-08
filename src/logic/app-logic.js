import { ADD_TODO, COMPLETE_TODO, DELETE_TODO, EDIT_TODO, LOAD_DATA, PUT_DATA } from "./actions"


const initialState = {
  todos: [],
  isTodosFetching: false

}
console.log(initialState.todos)

export const reducer = (state = initialState, action) => {
  switch (action.type) {

    case PUT_DATA:
      const data = { ...state, todos: action.payload, isTodosFetching: false }
      debugger
      return data

    case COMPLETE_TODO:
      const idx = state.todos.findIndex(el => el.id === action.payload)
      return {
        ...state, todos: [
          ...state.todos.slice(0, idx),
          { ...state.todos[idx], completed: !state.todos[idx].completed && true },
          ...state.todos.slice(idx + 1)
        ]
      }

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

    case LOAD_DATA:
      return {
        ...state,
        isTodosFetching: true
      }

    default: return state
  }
}