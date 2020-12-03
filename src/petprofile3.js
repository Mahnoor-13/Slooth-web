import React from "react";
import "./petprofile3.css";
import { withRouter } from "react-router-dom";
import { ImagePicker } from "react-file-picker";
import Loader from "react-loader-spinner";

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
                  <div>
                    <img
                      className="logo-modal"
                      src={require("../src/assets/logo_big.svg")}
                    ></img>
                  </div>
                </div>
              </div>
              <div className="modal-body">
                <h3 className="main-h3">Add Pet Profile Details</h3>
                <hr />

                <form action="/action_page.php">
                  <div className="form-group">
                    <input
                      onChange={(e) =>
                        this.props.petProfileDetails("petName", e.target.value)
                      }
                      type="text"
                      className="main-form form-control"
                      id="email"
                      placeholder="PET NAME"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      onChange={(e) =>
                        this.props.petProfileDetails("age", e.target.value)
                      }
                      type="text"
                      className="main-form form-control"
                      id="pwd"
                      placeholder="AGE"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      onChange={(e) =>
                        this.props.petProfileDetails("breed", e.target.value)
                      }
                      type="text"
                      className="main-form form-control"
                      id="pwd"
                      placeholder="BREED"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      onChange={(e) =>
                        this.props.petProfileDetails("color", e.target.value)
                      }
                      type="text"
                      className="main-form form-control"
                      id="pwd"
                      placeholder="COLOR"
                    />
                  </div>
                </form>

                {/* <div className="main-camera">
                  <div className="cam">
                    <div className="cam-content">
                      <div className="camera">
                        <img
                          src={require("./assets/icon_photo_white (1).svg")}
                        />
                      </div>
                    </div>
                  </div>
                </div> */}

                {this.props.petProfileImage === "" ? (
                  <div>
                    {!this.props.isLoading2 ? (
                      <ImagePicker
                        extensions={["jpg", "jpeg", "png"]}
                        dims={{
                          minWidth: 50,
                          maxWidth: 10000,
                          minHeight: 50,
                          maxHeight: 10000,
                        }}
                        onChange={(base64) => {
                          // // this.setState({ image: base64 });
                          this.props._handleImagePicked(base64);
                        }}
                        onError={(errMsg) => {
                          this.props.imageError(errMsg)
                          console.log(errMsg);
                        }}
                      >
                        <div className="image-upload-pet">
                          <label for="file-input" className="file-input">
                            <img
                              className="camera"
                              src={require("./assets/icon_photo_white (1).svg")}
                            ></img>
                          </label>
                          <div>Add a profile picture</div>
                        </div>
                      </ImagePicker>
                    ) : (
                      <div className="image-upload">
                        <Loader
                          type="Circles"
                          color="#00BFFF"
                          height={50}
                          width={50}
                        />
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="image-upload">
                    <img className="image-upload-img" src={this.props.petProfileImage} />
                  </div>
                )}

                <div className="camera-div">
                  <button
                    type="button"
                    className="button3 btn btn-primary"
                    onClick={() => this.props.petprofile3()}
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
