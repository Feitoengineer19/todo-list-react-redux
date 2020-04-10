import React from 'react';
import { connect } from 'react-redux' 

import TodoItem from './Components/TodoItem';
import { setInputTodo } from './actions'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './App.scss';

library.add(faTrash)

const mapStateToProps = state => ({
  todos: state.todos,
  currentItem: state.currentItem
})

const mapDispatchToProps = dispatch => ({
  handleInput: (e) => dispatch(setInputTodo(e.target.value))
})


class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     todos: [{
  //       text: '測試的代辦清單',
  //       key: '2343289405235',
  //     },{
  //       text: '測試的代辦清單',
  //       key: '452352352624',
  //     }],
  //     currentItem: {
  //       text: '',
  //       key: '',
  //     },
  //   };
  // }

  // handleInput = (e) => {
  //   this.setState({
  //     currentItem: {
  //       text: e.target.value,
  //       key: Date.now(),
  //     },
  //   });
  // };

  addItem = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text) {
      const newTodos = [...this.state.todos, newItem];
      this.setState({
        todos: newTodos,
        currentItem: {
          text: '',
          key: '',
        },
      });
    }
  };

  deleteItem = key => {
    const filteredTodos = this.state.todos.filter(item => item.key !== key)
    this.setState({
      todos: filteredTodos
    })
  }

  editItem = (text, key) => {
    const todos = this.state.todos
    todos.forEach(item => item.text = item.key === key ? text : item.text)
    this.setState({
      todos: todos
    })
  }

  render() {
    const { todos, currentItem, handleInput } = this.props
    console.log(this.props)
    const today = new Date()
    
    return (
      <div className='todoList'>
        <h1>Todo List</h1>
        <h5>{ `${today.getFullYear()} 年 ${today.getMonth() + 1} 月 ${today.getDate()} 日`}</h5>
        <p>Get thing done, and enjoy the life!</p>
        <header>
          <form className="header__form" onSubmit={this.addItem}>
            <input
              className="header__input"
              type='text'
              placeholder='WHAT TO DO?'
              value={currentItem.text}
              onChange={handleInput}
            />
            <button 
              className="header__btn"
              type='submit'
            >
              Add
            </button>
          </form>
        </header>
        <div className="list">
          <TodoItem 
            todos={todos} 
            deleteItem={this.deleteItem}
            editItem={this.editItem}
          />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
