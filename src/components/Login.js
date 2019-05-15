import React, {Fragment} from 'react';

export default class Login extends React.Component {
  render() {
    return (
      <Fragment>
        <h1 className="login-title">Sign in ;)</h1>
        <form onSubmit={(event) => this.handleSubmit(event)} className="login-container">
          <div>
            <label htmlFor="email">Email: </label>
            <input id="email"  type="email" required/>
          </div>
          <div>
            <label htmlFor="password">Pass: </label>
            <input id="password"  type="password" required/>
          </div>
          <input id="submit" type="submit" value="Login" />
        </form>
      </Fragment>
    );
  }
}