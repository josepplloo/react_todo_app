import React, {Component, Fragment} from 'react';

export default class Login extends Component {

  handleSubmit(event) {
    event.preventDefault();
    let autenticated = true;

    const {email, password} = event.target.elements;

    if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/ig.test(email.value.trim())) {
      email.focus();
      autenticated = false;
    }

    if (!/(?=.{8,})/ig.test(password.value.trim())) {
      password.focus();
      autenticated = false;
    }

    if (autenticated){
      this.props.onAutenticated(email.value.trim());
    }
  }

  render() {
    return (
      <Fragment>
        <h1 className="login-title">Sign in to do.</h1>
        <form onSubmit={(event) => this.handleSubmit(event)} className="login-container">
          <div>
            <label htmlFor="email">Email: </label>
            <input id="email"  type="email" placeholder="name@example.co" required/>
          </div>
          <div>
            <label htmlFor="password">Pass: </label>
            <input id="password"  type="password" placeholder="more than 8 chars" required/>
          </div>
          <input id="submit" type="submit" value="Login ›" />
        </form>
      </Fragment>
    );
  }
}