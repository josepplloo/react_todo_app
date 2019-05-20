import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import store from './reducers/todo';

//ReactDOM.render(<App />, document.getElementById('App'));

const render = function (){
  ReactDOM.render(
    <App
      {...store.getState()}
    />,
    document.getElementById('App')
  );
};


store.subscribe(render);

console.log('Initial state:');
console.log(store.getState());
console.log('--------------');

console.log('Dispatching ADD_TODO.');
store.dispatch({
  type: 'ADD_TODO',
  id: 0,
  text: 'Learn Redux'
});
console.log('Current state:');
console.log(store.getState());
console.log('--------------');

render();