import { INPUT_TODO } from './constants'

const initialStateTodos = {
  todos: [{
    text: '測試的代辦清單',
    key: '2343289405235',
  },{
    text: '測試的代辦清單',
    key: '452352352624',
  }],
  currentItem: {
    text: '',
    key: '',
  },
}

export const inputTodo = (prevState=initialStateTodos, action={}) => {
  switch(action.type) {
    case INPUT_TODO:
      return { 
        ...prevState, 
        currentItem: {
        text: action.text,
        key: action.key
      },
    }
    default:
      return prevState
  }
}
