import React, { Component } from 'react';
import { FacebookLogin } from 'react-facebook-login-component';
import { Redirect } from 'react-router-dom';

import './App.css';
class FBLogin extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loggedin: false
    }
  }

  responseFacebook = (response) => {
    this.setState({
      loggedin: true
    })
  }

  render() {
    if (this.state.loggedin) {
      return <Redirect to="/register" />
    }

    return (
      <div>
        <FacebookLogin socialId="134507363878115"
                       language="en_US"
                       scope="public_profile,email"
                       responseHandler={this.responseFacebook}
                       xfbml={true}
                       fields="id,email,name"
                       version="v2.5"
                       className="btn btn-success"
                       buttonText="Login With Facebook"/>
      </div>
    );
  }
}

export default  FBLogin;
