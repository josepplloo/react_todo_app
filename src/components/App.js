import React, { Component, Fragment } from 'react';
import  {BrowserRouter as Router,
  Route, Switch, Redirect} from "react-router-dom";

import Login from './Login';
import ToDo from './ToDo';
import store from '../reducers/todo';
  
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
    };
  }

  login() {
    return (<Login />);
  }

  todo() {
    return (<ToDo />);
  }

  handleAutentication(userName) {
    this.setState({userName});
  }

  selectAPage() {
    if (!this.state.userName) {
      return (<Login 
        onAutenticated={(user) => this.handleAutentication(user)}
      />);
    }
    else {
      return (<ToDo />);
    }
  }

  render() {
    return (
      <Router>
        <Fragment>
            <Switch>
              <Route exact path="/" render={() => this.selectAPage()}/>
              <Route path="/login" render={() => (this.state.userName ?
                <Redirect to="/todo" />
                : this.login() )}/>
              <Route render={() => <h1>404 Page not found</h1>}/>
            </Switch>
        </Fragment>      
      </Router> 
    );
  }
}