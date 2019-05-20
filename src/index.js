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

render();