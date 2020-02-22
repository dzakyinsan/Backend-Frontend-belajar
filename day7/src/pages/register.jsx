import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { onUserRegister } from "./../redux/actions";

class Register extends Component {
  onBtnRegisterClick = () => {
    var username = this.refs.username.value;
    var email = this.refs.email.value;
    var password = this.refs.password.value;
    // console.log(username)
    this.props.onUserRegister(username, email, password);
  };

  renderError = () => {
    if (this.props.error.length > 0) {
      return <p className="alert alert-danger">{this.props.error}</p>;
    }
  };

  renderButton = () => {
    if (this.props.loading) {
      return <i className="fa fa-spinner fa-spin" style={{ fontSize: "54px" }} />;
    }
    return <input type="button" name="submit" id="submit" className="submit" defaultValue="Register" onClick={this.onBtnRegisterClick} />;
  };

  render() {
    if (this.props.register) {
      return <Redirect to="/" />;
    } else {
      return (
        <div className="bodyRegister">
          <div className="main">
            <div className="container">
              <form className="appointment-form" id="appointment-form">
                <h2>Welcome to the Hokage Club</h2>
                <div className="form-group-1">
                  <input ref="username" type="text" name="name" id="name" placeholder="Username" required />
                  <input ref="email" type="email" name="email" id="email" placeholder="Email" required />

                  <input ref="password" type="text" name="password" id="password" placeholder="Password" required />
                </div>
                <div>{this.renderError()}</div>
                <div className="form-submit">{this.renderButton()}</div>
              </form>
            </div>
          </div>
        </div>
      );
    }
  }
}

const register = state => state.auth.register
const loading = state => state.auth.loading
const error = state => state.auth.error

export default connect({ register, loading, error}, { onUserRegister })(Register);


// const mapStateToProps = state => {
//   return {
//     register: state.auth.register,
//     loading: state.auth.loading,
//     error: state.auth.error
//   };
// };

// export default connect(mapStateToProps, { onUserRegister })(Register);
