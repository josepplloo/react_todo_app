import React, { Component } from 'react';
import store from '../reducers/todo';
import '../index.scss';

let nextTodoId = 1;  


const FilterLink = ({
  filter,
  currentFilter,
  children
}) => {
  if (filter === currentFilter) {
    return <span>{children}</span>;
  }

  return (
    <a href='#'
       onClick={e => {
         e.preventDefault();
         store.dispatch({
           type: 'SET_VISIBILITY_FILTER',
           filter
         });
       }}
    >
      {children}
    </a>
  );
};

const getVisibleTodos = (
  todos,
  filter
) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(
        t => t.completed
      );
    case 'SHOW_ACTIVE':
      return todos.filter(
        t => !t.completed
      );
  }
};

const Todo = ({ onClick, completed, text }) => (
  <li className={completed?"todo--completed":"todo"}
    onClick={onClick}
  >
    {text}
  </li>
);

const TodoList = ({ todos , onTodoClick }) => {
  return (
    <ul className="todo-list">
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>
  );

};


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

      const {
        todos,
        visibilityFilter
      } = store.getState();
      const visibleTodos = getVisibleTodos(
        todos,
        visibilityFilter
      );      

    return (
      <div className="app-container">
        <section>
          <input type="text" 
            placeholder="What's need to be done?"
            onKeyPress={(event) => this.addToDo(event)}/>
        </section>
        <TodoList
          todos={visibleTodos}
          onTodoClick={id =>
            store.dispatch({
              type: 'TOGGLE_TODO',
              id
            })
          }
        />
        <p>
          Show:
          {' '}
          <FilterLink
            filter='SHOW_ALL'
            currentFilter={visibilityFilter}
          >
            All
          </FilterLink>
          {', '}
          <FilterLink
            filter='SHOW_ACTIVE'
            currentFilter={visibilityFilter}
          >
            Active
          </FilterLink>
          {', '}
          <FilterLink
            filter='SHOW_COMPLETED'
            currentFilter={visibilityFilter}
          >
            Completed
          </FilterLink>
        </p>
      </div>
    );
  }
}  

