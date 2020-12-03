import React from "react";
import "./petprofile1.css";
import { withRouter } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      check: "usertype",
      isClicked: "",
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
                  <img
                    className="logo-modal"
                    src={require("../src/assets/logo_big.svg")}
                  />
                </div>
              </div>
              <div className="modal-body">
                <h3 className="heading-h3">Select pet Type</h3>
                <hr />

                <div className="container">
                  <div className="all-left">
                    <div
                      onClick={() => this.props.selected("dog")}
                      style={
                        this.props.selectedPet === "dog"
                          ? { border: "4px solid goldenrod", borderRadius: "20px", cursor:"pointer" }
                          : {cursor:"pointer"}
                      }
                    >
                      <img className="dog" src={require("./assets/dog.png")} />
                      <div className="petname">dog</div>
                    </div>
                    <div
                      onClick={() => this.props.selected("rabbit")}
                      style={
                        this.props.selectedPet === "rabbit"
                          ? { border: "4px solid goldenrod", borderRadius: "20px", cursor:"pointer" }
                          : {cursor:"pointer"}
                      }
                    >
                      <img
                        className="dog"
                        src={require("./assets/rabbit.jpg")}
                      />
                      <div className="petname">rabbit</div>
                    </div>
                    <div
                      onClick={() => this.props.selected("hampster")}
                      style={
                        this.props.selectedPet === "hampster"
                          ? { border: "4px solid goldenrod", borderRadius: "20px", cursor:"pointer" }
                          : {cursor:"pointer"}
                      }
                    >
                      <img
                        className="dog"
                        src={require("./assets/hampster.jpeg")}
                      />
                      <div className="petname">hampster</div>
                    </div>
                  </div>

                  <div className="all-right">
                    <div
                      onClick={() => this.props.selected("cat")}
                      style={
                        this.props.selectedPet === "cat"
                          ? { border: "4px solid goldenrod", borderRadius: "20px", cursor:"pointer" }
                          : {cursor:"pointer"}
                      }
                    >
                      <img className="dog" src={require("./assets/cat.png")} />
                      <div className="petname">cat</div>
                    </div>
                    <div
                      onClick={() => this.props.selected("parrot")}
                      style={
                        this.props.selectedPet === "parrot"
                          ? { border: "4px solid goldenrod", borderRadius: "20px", cursor:"pointer" }
                          : {cursor:"pointer"}
                      }
                    >
                      <img
                        className="dog"
                        src={require("./assets/parrot.jpeg")}
                      />
                      <div className="petname">parrot</div>
                    </div>
                    <div
                      onClick={() => this.props.selected("fish")}
                      style={
                        this.props.selectedPet === "fish"
                          ? { border: "4px solid goldenrod", borderRadius: "20px", cursor:"pointer" }
                          : {cursor:"pointer"}
                      }
                    >
                      <img
                        className="dog"
                        src={require("./assets/ifsh.jpeg")}
                      />
                      <div className="petname">fish</div>
                    </div>
                  </div>
                </div>

                {/* <div className="dashed-div text-center"> */}
                  {/* <button
                    type="button"
                    className="para-dashed btn"
                    // onClick={() => this.props.petprofile1()}
                  >
                    + ADD NEW PETTYPE
                  </button> */}
                {/* </div> */}
                <div className="simple-div">
                  <button type="button" className="button2 btn btn-primary"
                                      onClick={() => this.props.petprofile1()}
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
