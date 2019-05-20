import React, { Component } from 'react';
import store from '../reducers/todo';

let nextTodoId = 1;  

const Todo = ({
  onClick,
  completed,
  text
}) => (
  <li
    onClick={onClick}
    style={{
      textDecoration:
        completed ?
          'line-through' :
          'none'
    }}
  >
    {text}
  </li>
);

function TodoList ({ todos, onTodoClick }) {
  return (
    <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>
  );

}


export default class ToDo extends Component {
  

  addToDo(event) {
    if(event.key === 'Enter'){
      store.dispatch({
        type: 'ADD_TODO',
        text: event.target.value,
        id: nextTodoId++
      });
      event.target.value = ''; 
    }
  }

  render() {
    return (
      <div className="ToDo">
        <section>
          <input type="text" 
            placeholder="What's need to be done?"
            onKeyPress={(event) => this.addToDo(event)}/>
        </section>
        <ul>
          { store.getState().todos.map(todo =>
            <li key={todo.id}>
              {todo.text}
            </li>
          ) }
        </ul>
      </div>
    );
  }
}  

