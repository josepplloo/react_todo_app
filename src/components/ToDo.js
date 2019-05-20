import React, { Component } from 'react';
import store from '../reducers/todo';
import '../index.scss';

let nextTodoId = 1;  

const Todo = ({
  onClick,
  completed,
  text
}) => (
  <li className={completed?"todo--completed":"todo"}
    onClick={onClick}
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
        <TodoList
          todos={store.getState().todos}
          onTodoClick={id =>
            store.dispatch({
              type: 'TOGGLE_TODO',
              id
            })
          }
        />
      </div>
    );
  }
}  

