import { 
  INPUT_TODO,
  ADD_TODO,
  DELETE_TODO
} from './constants'

export const setInputTodo = (text, key=Date.now()) => ({
  type: INPUT_TODO,
  text,
  key
})

export const addTodo = () => ({
  type: ADD_TODO,
})

export const deleteTodo = () => ({
  type: DELETE_TODO,
})