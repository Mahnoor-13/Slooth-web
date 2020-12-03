import React from "react";
import "./petprofile6.css";
import { withRouter } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      check: "usertype",
      isClicked: ""
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
                <div className="pet-img-div-modal">
                <img className="pet-modal" src={require("./assets/fox.jpg")}/>
                <div>
                  <div className="bottom-left-modal">LOREM IPSUM</div>

                  <p className="lorem-ipsum">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>

                  <small className="learn-more">Learn more...</small>
                  </div>
                </div>

            <div className="bottom-right-modal"  onClick={()=>this.props.petprofile6()}><i className="fa fa-arrow-right" aria-hidden="true"></i>
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
