import React from "react";
import "./Login.css";
import { withRouter } from "react-router-dom";
import * as firebase from "firebase";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  login = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        this.props.history.push("home");
      })
      .catch((e) => {
        NotificationManager.warning(e.message);
      });
  };
  render() {
    return (
      <div className="App">
                <NotificationContainer />
        <div style={{ textAlign: "center", margin: "2% 0%" }}>
          <img
            style={{ width: "4rem" }}
            src={require("../src/assets/logo_big.svg")}
          ></img>
        </div>
        <div
          className="create-new-account"
          style={{ fontSize: "22px", textAlign: "center" }}
        >
          Log in to Slooth
        </div>
        <div
          className="modal-body"
          style={{ width: "50%", margin: "0 auto", overflow: "hidden" }}
        >
          <div className="main-form">
            <form className="">
              <div className="form-row align-items-center">
                <div className="main-input-modal">
                  <div className="col-auto input-modal">
                    <label for="inlineFormInput" className="labels">
                      Email
                    </label>
                    <input
                      onChange={(e) => this.setState({ email: e.target.value })}
                      type="text"
                      className="form-control mb-2 input"
                      id="inlineFormInput"
                    />
                  </div>

                  <div className="col-auto input-modal">
                    <label for="inlineFormInput" className="labels">
                      Password
                    </label>
                    <div className="input-group mb-2">
                      <input
                        onChange={(e) =>
                          this.setState({ password: e.target.value })
                        }
                        type="password"
                        className="form-control input"
                        id="inlineFormInputGroup"
                      />
                    </div>
                  </div>

                  <button
                    type="button"
                    className="btn btn-primary mb-2 button"
                    onClick={() => {
                      this.login();
                    }}
                  >
                    Login
                  </button>
                  <div style={{ textAlign: "center", margin: "5% 0%" }}>
                    <a href="">Forgot Password ?</a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
