import React from "react";
import "./petprofile2.css";
import { withRouter } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      check: "usertype",
      isClicked: false,
    };
    console.log(props);
  }
  render() {
    return (
      <div className="App">
        <div className="pettype">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-heading">
                <div>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div>
                  <div>
                    <img
                      className="logo-modal"
                      src={require("../src/assets/logo_big.svg")}
                    ></img>
                  </div>
                </div>
              </div>
              <div className="modal-body">
                <h3 className="head-h3">Select pet Type</h3>
                <hr />

                <div className="main-div">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      margin: "3%",
                    }}
                  >
                    <div
                      className="main"
                      style={
                        this.props.petTypeValue === "male"
                          ? {
                              border: "2px solid green",
                              borderRadius: " 50%",
                              padding: "0%",
                            }
                          : {}
                      }
                      onClick={() => this.props.petType("male")}
                    >
                      <div className="main-content">
                        <div className="icon-content">
                          <div className="male">
                            <img src={require("./assets/icon_male.svg")} />
                          </div>
                        </div>
                      </div>
                    </div>

                    <p
                      className="para-male"
                      style={
                        this.props.petTypeValue === "female"
                          ? { color: "green" }
                          : {}
                      }
                    >
                      Male
                    </p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      margin: "3%",
                    }}
                  >
                    <div
                      className="main2"
                      style={
                        this.props.petTypeValue === "female"
                          ? {
                              border: "2px solid green",
                              borderRadius: " 50%",
                              padding: "0%",
                              display: "flex",
                            }
                          : {}
                      }
                      onClick={() => {
                        this.props.petType("female");
                      }}
                    >
                      <div className="main-content2">
                        <div className="icon-content2">
                          <div className="female">
                            <img
                              src={require("./assets/icon_female (1).svg")}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <p
                      className="para-male"
                      style={
                        this.props.petTypeValue === "female"
                          ? { color: "green" }
                          : {}
                      }
                    >
                      Female
                    </p>
                  </div>
                </div>

                <div className="main-rectangle" onClick={()=>{this.setState({isClicked:!this.state.isClicked})}}>
                  <div className="rectangle"  
                    style={
                      this.state.isClicked ? { background: "#2a2e7c" } : {}
                    }
                  
                  ></div>
                  <p
                    className="neutered"
                  
                  >
                    Neutered
                  </p>
                </div>

                <div className="simple-div">
                  <button
                    type="button"
                    className="button3 btn btn-primary"
                    onClick={() => this.props.petprofile2()}
                  >
                    NEXT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
