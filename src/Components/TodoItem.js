import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FlipMove from 'react-flip-move';

function ListItem(props) {
  const todos = props.todos
  const itemList = todos.map((item, index) => {
    return (
      <div 
        className="list__item"
        key={item.key}
      >
        <span style={{ paddingRight: '10px', fontWeight: 'bold'}}>＊</span>
        <input 
          className="list__input"
          type="text" 
          value={item.text}
          id={item.key}
          onChange={(e) => props.editItem(e.target.value, item.key)}
        />
        <span 
          className="list__delItemBtn"
          onClick={() => props.deleteItem(item.key)}
        >
          <FontAwesomeIcon icon="trash" />
        </span>
      </div>
    )
  });
  
  return (
    <FlipMove enterAnimation="fade" leaveAnimation="fade">
      {itemList}
    </FlipMove>
  )
}

export default ListItem