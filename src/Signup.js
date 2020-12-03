import React from "react";
import "./Login.css";
import { withRouter } from "react-router-dom";
import Petprofile1 from "./petprofile1";
import Petprofile2 from "./petprofile2";
import Petprofile3 from "./petprofile3";
import Petprofile4 from "./petprofile4";
import Petprofile5 from "./petprofile5";
import Petprofile6 from "./petprofile6";
import Petprofile7 from "./petprofile7";
import * as firebase from "firebase";
import uuid from "uuid";
import { ImagePicker } from "react-file-picker";
import Loader from "react-loader-spinner";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      check: "usertype",
      isClicked: "",
      petprofile1: true,
      petprofile2: false,
      petprofile3: false,
      petprofile4: false,
      petprofile5: false,
      petprofile6: false,
      petprofile7: false,

      isLoading: false,

      email: "",
      password: "",
      confrimPass: "",
      fullName: "",
      image: "",

      firstName: "",
      lastName: "",
      phone: "",
      zip: "",
      location: "",

      companyName: "",
      city: "",
      state: "",
      zipCode: "",
      phone: "",
      contactName: "",
      dropdown1: "health/medical",

      petType: "male",

      petName: "",
      age: "",
      breed: "",
      color: "",
      petImage: "",

      selectedPet: "dog",
      noBusinessProfile: false,
      bProfileCompleted: false,

      logInEmail: "",
      logInpassword: "",

      isLoading2: false,
      petProfileImage: "",

      userId: firebase.auth().currentUser
        ? firebase.auth().currentUser.uid
        : "rC38RLj73eT3yBhiia1xK9Efqwh2",
    };
  }

  petprofile1 = () => {
    // firebase
    //   .database()
    //   .ref(`newPet/${this.state.userId}/`)
    //   .update({ petType: this.state.petType })
    //   .then((res) => {
    this.setState({
      petprofile1: false,
      petprofile2: true,
      petprofile3: false,
    });
    // })
    // .catch((e) => console.log(e));
  };

  petprofile2 = () => {
    // firebase
    //   .database()
    //   .ref(`newPetTypes/`)
    //   .push({
    //     image: this.state.postImage,
    //     Name: this.state.Name,
    //     key: this.state.Name
    //   })
    //   .then(s => {
    //     this.props.navigation.goBack();
    //   });

    this.setState({
      petprofile1: false,
      petprofile2: false,
      petprofile3: true,
    });
  };

  petprofile3 = () => {
    if (
      (this.state.petName === "" ||
        this.state.age === "" ||
        this.state.color === "",
      this.state.breed === "")
    ) {
      NotificationManager.warning("Please complete all the fields");
    } else {
      this.setState({
        petprofile1: false,
        petprofile2: false,
        petprofile3: false,
        petprofile4: true,
      });
    }
  };
  petprofile4 = () => {
    firebase
      .database()
      .ref(`newPet/${this.state.userId}/`)
      .update({
        petName: this.state.petName,
        age: this.state.age,
        color: this.state.color,
        image: this.state.petImage,
        breed: this.state.breed,
        petGender: this.state.petType,
        selectedPet: this.state.selectedPet,
      })
      .then((res) => {
        this.props.history.push("/home");
      })
      .catch((e) => console.log(e));
  };
  petprofile5 = () => {
    this.setState({
      petprofile1: false,
      petprofile2: false,
      petprofile3: false,
      petprofile4: false,
      petprofile5: false,
      petprofile6: true,
    });
  };
  petprofile6 = () => {
    this.setState({
      petprofile1: false,
      petprofile2: false,
      petprofile3: false,
      petprofile4: false,
      petprofile5: false,
      petprofile6: false,
      petprofile7: true,
    });
  };

  SignUp = () => {
    // this.props.navigation.navigate("Createaccountname");
    this.setState({ loader: true });
    if (
      this.state.email !== "" &&
      this.state.password !== "" &&
      this.state.fullName !== "" &&
      this.state.confrimPass !== ""
    ) {
      if (this.state.confrimPass === this.state.password) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.state.email, this.state.password)
          .then((data) => {
            console.log(data);
            // this.setState({ loader: false });
            firebase
              .database()
              .ref(`users/${data.user.uid}`)
              .set({
                email: this.state.email,
                type: this.state.isClicked,
                fullName: this.state.fullName.toLowerCase(),
                profilePic: this.state.image,
              })
              .then(() => {
                this.setState({ check: "profile", userId: data.user.uid });
              })
              .catch((e) => console.log(e));
          })
          .catch((error) => {
            this.setState({ loader: false });
            NotificationManager.warning(error.message);
          });
      } else {
        this.setState({ loader: false });
        NotificationManager.warning(
          "Password and confirm password not matched"
        );
      }
    } else {
      this.setState({ loader: false });
      NotificationManager.warning("Please complete all the fields");
    }
  };

  update = () => {
    // console.log("" + 2);
    if (this.state.zip !== "") {
      firebase
        .database()
        .ref(`users/${this.state.userId}/`)
        .update({
          phone: this.state.phone,
          zip: this.state.zip,
          location: this.state.location,
        })
        .then((s) => {
          if (this.state.isClicked === "petparent") {
            alert("working");
            this.setState({
              check: "",
              // petprofile1: true,
              // noBusinessProfile: true,
            });
          }
          if (this.state.isClicked === "businessowner") {
            this.setState({ check: "business" });
          }
          if (this.state.isClicked === "petpatron") {
            this.setState({ check: "", petprofile1: false });
            this.props.history.push("home");
          }
        })
        .catch((e) => {
          NotificationManager.warning(e.message);
        });
    } else {
      NotificationManager.warning("Please enter zip code");
    }
  };

  updateBusinessProfile = () => {
    if (
      this.state.companyName !== "" &&
      this.state.city !== "" &&
      this.state.state !== "" &&
      this.state.zipCode !== "" &&
      this.state.phone !== "" &&
      this.state.contactName !== "" &&
      this.state.dropdown1 !== ""
    ) {
      firebase
        .database()
        .ref(`users/${this.state.userId}/BusinessDetails/`)
        .update({
          companyName: this.state.companyName,
          city: this.state.city,
          state: this.state.state,
          zipCode: this.state.zipCode,
          phone: this.state.phone,
          contactName: this.state.contactName,
          dropdown1: this.state.dropdown1,
        })
        .then((s) => {
          this.setState({
            bProfileCompleted: true,
            check: "",
            petprofile1: true,
          });
        })
        .catch((e) => {
          NotificationManager.warning(e.message);
        });
    } else {
      // NotificationManager.warning("Please complete all the fields");
    }
  };

  petType = (petType) => {
    this.setState({ petType: petType });
  };

  petProfileDetails = (key, value) => {
    this.setState({ [key]: value });
  };

  _handleImagePicked = async (img) => {
    this.setState({ isLoading: true });
    try {
      let uploadUrl = await this.uploadImageAsync(img);
      console.log("uploadUrl", uploadUrl);
      this.setState({ image: uploadUrl, isLoading: false });
    } catch (e) {
      this.setState({ isLoading: false });
      console.log(e);
      // alert("Upload failed, sorry :(");
    } finally {
      this.setState({ isLoading: false });
    }
  };

  _handleImagePickedPetProfile = async (img) => {
    this.setState({ isLoading2: true });
    try {
      let uploadUrl = await this.uploadImageAsync(img);
      console.log("uploadUrl", uploadUrl);
      this.setState({ petProfileImage: uploadUrl, isLoading2: false });
    } catch (e) {
      this.setState({ isLoading2: false });
      console.log(e);
      // alert("Upload failed, sorry :(");
    } finally {
      this.setState({ isLoading2: false });
    }
  };

  uploadImageAsync = async (uri) => {
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", uri, true);
      xhr.send(null);
    });

    const ref = firebase.storage().ref().child(uuid.v4());
    const snapshot = await ref.put(blob);
    return await snapshot.ref.getDownloadURL();
  };

  selected = (select) => {
    this.setState({ selectedPet: select });
  };

  imageError = (imageError) => {
    NotificationManager.warning(imageError);
  };

  login = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(
        this.state.logInEmail,
        this.state.logInpassword
      )
      .then(() => {
        this.props.history.push("home");
      })
      .catch((e) => {
        NotificationManager.warning(e.message);
      });
  };

  render() {
    return (
      <div className="App" style={{ overflow: "hidden" }}>
        <NotificationContainer />
        <div className="">
          <div className="row">
            <div className="left-div col-6 col-sm">
              <div className="main-icons">
                <div className="all-icons">
                  <i className="fa fa-search font" aria-hidden="true"></i>
                  <p className="all-para"> Follow your pet.</p>
                </div>

                <div className="all-icons marg">
                  <i className="fa fa-users font" aria-hidden="true"></i>
                  <p className="all-para">Hear what people are sharing.</p>
                </div>

                <div className="all-icons marg">
                  <i className="fa fa-comment-o font" aria-hidden="true"></i>
                  <p className="all-para">Join the conversation.</p>
                </div>
              </div>
              <div className="rights">
                &#9400; All right reserved to Slooth inc
              </div>
            </div>
            <div className="col-6 col-sm">
              <div className="mainform-div">
                <div className="main-form">
                  <div className="">
                    <div className="form-row align-items-center">
                      <div className="main-input">
                        <div className="col-auto">
                          <label for="inlineFormInput" className="labels">
                            Email
                          </label>
                          <input
                            onChange={(e) =>
                              this.setState({ logInEmail: e.target.value })
                            }
                            type="text"
                            className="form-control mb-2 input"
                            id="inlineFormInput"
                          />
                        </div>
                        <div className="col-auto">
                          <label for="inlineFormInput" className="labels">
                            Password
                          </label>
                          <div className="input-group mb-2">
                            <input
                              onChange={(e) =>
                                this.setState({ logInpassword: e.target.value })
                              }
                              type="password"
                              className="form-control input"
                              id="inlineFormInputGroup"
                            />
                          </div>
                          <a className="anchor-pass" href="#">
                            forgotten password?
                          </a>
                        </div>
                      </div>
                      <div className="login-btn-div">
                        <div className="col-auto">
                          <button
                            className="btn btn-outline-primary"
                            onClick={() => this.login()}
                          >
                            Login
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="title">
                  <div>
                    <img
                      className="logo-big"
                      src={require("../src/assets/logo_big.svg")}
                    ></img>
                  </div>
                  <span className="title-text">
                    See what’s happening in the world right now
                  </span>
                  <div className="join">
                    <span className="join-now">Join Slooth now</span>
                  </div>
                  <div className="btns">
                    <button
                      type="button"
                      className="btn btn-primary mb-2 button"
                      onClick={() => this.props.history.push("login")}
                    >
                      Login
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary mb-2 button signup"
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      Join Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Code */}

        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          {/* User Type */}

          {this.state.check === "usertype" ? (
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
                        className="logo-big-2"
                        src={require("../src/assets/logo_big.svg")}
                      ></img>
                    </div>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="btn btn-primary mb-2 button"
                      disabled={this.state.isClicked !== "" ? false : true}
                      onClick={() => {
                        this.setState({ check: "signup" });
                      }}
                      // onClick={() => this.props.history.push("petprofile1")}
                    >
                      Next
                    </button>
                  </div>
                </div>
                <div className="modal-body">
                  <div className="main-form">
                    <form className="">
                      <div className="new-account">
                        <div className="create-new-account">
                          Create New Account
                        </div>
                        <div className="btns">
                          <button
                            type="button"
                            className={
                              this.state.isClicked === "petparent"
                                ? "btn btn-primary mb-2 button usertype-button"
                                : "btn btn-primary mb-2 button signup usertype-button"
                            }
                            onClick={() =>
                              this.setState({ isClicked: "petparent" })
                            }
                          >
                            PET PARENT
                          </button>
                          <div className="detail-signup">
                            You have a furry/feathered/coated/scaled, etc...
                            family member
                          </div>
                          <button
                            type="button"
                            className={
                              this.state.isClicked === "businessowner"
                                ? "btn btn-primary mb-2 button usertype-button"
                                : "btn btn-primary mb-2 button signup usertype-button"
                            }
                            onClick={() =>
                              this.setState({ isClicked: "businessowner" })
                            }
                          >
                            BUSINESS OWNER
                          </button>
                          <div className="detail-signup">
                            You offer products and/or services for Pets
                          </div>
                          <button
                            type="button"
                            className={
                              this.state.isClicked === "petpatron"
                                ? "btn btn-primary mb-2 button usertype-button"
                                : "btn btn-primary mb-2 button signup usertype-button"
                            }
                            onClick={() =>
                              this.setState({ isClicked: "petpatron" })
                            }
                          >
                            PET PATRON
                          </button>
                          <div className="detail-signup">
                            You don't have a Pet,nut just love hanging out with
                            us!
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          ) : null}

          {/* Signup */}

          {this.state.check === "signup" ? (
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
                        className="logo-big-2"
                        src={require("../src/assets/logo_big.svg")}
                      ></img>
                    </div>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="btn btn-primary mb-2 button"
                      onClick={() => this.SignUp()}
                    >
                      Next
                    </button>
                  </div>
                </div>
                <div className="modal-body">
                  <div className="main-form">
                    <form className="">
                      <div className="form-row align-items-center">
                        <div className="main-input-modal">
                          <div className="col-auto input-modal">
                            <label for="inlineFormInput" className="labels">
                              Full Name
                            </label>
                            <input
                              onChange={(e) =>
                                this.setState({ fullName: e.target.value })
                              }
                              type="text"
                              className="form-control mb-2 input"
                              id="inlineFormInput"
                            />
                          </div>

                          <div className="col-auto input-modal">
                            <label for="inlineFormInput" className="labels">
                              Email
                            </label>
                            <input
                              onChange={(e) =>
                                this.setState({ email: e.target.value })
                              }
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

                          <div className="col-auto input-modal">
                            <label for="inlineFormInput" className="labels">
                              Confirm Password
                            </label>
                            <div className="input-group mb-2">
                              <input
                                onChange={(e) =>
                                  this.setState({ confrimPass: e.target.value })
                                }
                                type="password"
                                className="form-control input"
                                id="inlineFormInputGroup"
                              />
                            </div>
                          </div>
                          {this.state.image === "" ? (
                            <div>
                              {!this.state.isLoading ? (
                                <ImagePicker
                                  extensions={["jpg", "jpeg", "png"]}
                                  dims={{
                                    minWidth: 50,
                                    maxWidth: 10000,
                                    minHeight: 50,
                                    maxHeight: 10000,
                                  }}
                                  onChange={(base64) => {
                                    // this.setState({ image: base64 });
                                    this._handleImagePicked(base64);
                                  }}
                                  onError={(errMsg) => {
                                    this.imageError(errMsg);

                                    // console.log(errMsg);
                                  }}
                                >
                                  <div className="image-upload1">
                                    <label
                                      for="file-input"
                                      className="file-input"
                                    >
                                      <img
                                        className="camera"
                                        src={require("../src/assets/camera.svg")}
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
                              <img
                                className="image-upload-img"
                                src={this.state.image}
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          ) : null}

          {/* Complete your Profile */}

          {this.state.check === "profile" &&
          this.state.isClicked === "petparent" ? (
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
                        className="logo-big-2"
                        src={require("../src/assets/logo_big.svg")}
                      ></img>
                    </div>
                  </div>
                  <div>
                
                    {this.state.zip !== "" ? (
                      <button
                        className=" btn btn-primary mb-2 button"
                        type="button"
                        type="button"
                        // className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                        data-toggle="modal"
                        data-target="#myModal"
                        onClick={() => {
                          this.setState({ petprofile1: true });
                          this.update();
                        }}
                      >
                        Next
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="btn btn-primary mb-2 button"
                        onClick={() => this.update()}
                      >
                        Next
                      </button>
                    )}
                  </div>
                </div>
                <div className="modal-body">
                  <div className="main-form">
                    <form className="">
                      <div className="form-row align-items-center">
                        <div className="main-input-modal">
                          <div className="create-new-account align-center">
                            Complete your profile
                          </div>
                          <div className="profile-div">
                            <img
                              className="profile"
                              src={
                                this.state.image !== ""
                                  ? this.state.image
                                  : require("../src/assets/profile.jpg")
                              }
                            ></img>
                          </div>

                          <div className="col-auto input-modal">
                            <label for="inlineFormInput" className="labels">
                              Full Name
                            </label>
                            <input
                              onChange={(e) =>
                                this.setState({ fullName: e.target.value })
                              }
                              value={this.state.fullName}
                              type="text"
                              className="form-control mb-2 input"
                              id="inlineFormInput"
                            />
                          </div>

                          <div className="col-auto input-modal">
                            <label for="inlineFormInput" className="labels">
                              Email
                            </label>
                            <input
                              onChange={(e) =>
                                this.setState({ confrimPass: e.target.value })
                              }
                              value={this.state.email}
                              type="text"
                              className="form-control mb-2 input"
                              id="inlineFormInput"
                            />
                          </div>

                          <div className="col-auto input-modal">
                            <label for="inlineFormInput" className="labels">
                              Phone (optional)
                            </label>
                            <div className="input-group mb-2">
                              <input
                                onChange={(e) =>
                                  this.setState({ phone: e.target.value })
                                }
                                type="number"
                                className="form-control input"
                                id="inlineFormInputGroup"
                              />
                            </div>
                            <div className="allow">
                              Alows Pet Parent to receive SLOOTH Alerts through
                              their phone’s Notification Tray
                            </div>
                          </div>

                          <div className="col-auto input-modal">
                            <label for="inlineFormInput" className="labels">
                              Zip Code
                            </label>
                            <div className="input-group mb-2">
                              <input
                                onChange={(e) =>
                                  this.setState({ zip: e.target.value })
                                }
                                type="text"
                                className="form-control input"
                                id="inlineFormInputGroup"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          ) : null}

          {this.state.check === "profile" &&
          this.state.isClicked === "businessowner" ? (
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-heading">
                  <div>
                    <button
                      type="button"
                      className="close"
                      aria-hidden="true"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div>
                    <div>
                      <img
                        className="logo-big-2"
                        src={require("../src/assets/logo_big.svg")}
                      ></img>
                    </div>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="btn btn-primary mb-2 button"
                      onClick={() => this.update()}
                    >
                      Next
                    </button>
                  </div>
                </div>
                <div className="modal-body">
                  <div className="main-form">
                    <form className="">
                      <div className="form-row align-items-center">
                        <div className="main-input-modal">
                          <div className="create-new-account align-center">
                            Complete your profile
                          </div>
                          <div className="profile-div">
                            <img
                              className="profile"
                              src={
                                this.state.image !== ""
                                  ? this.state.image
                                  : require("../src/assets/profile.jpg")
                              }
                            ></img>
                          </div>

                          <div className="col-auto input-modal">
                            <label for="inlineFormInput" className="labels">
                              Full Name
                            </label>
                            <input
                              onChange={(e) =>
                                this.setState({ fullName: e.target.value })
                              }
                              value={this.state.fullName}
                              type="text"
                              className="form-control mb-2 input"
                              id="inlineFormInput"
                            />
                          </div>

                          <div className="col-auto input-modal">
                            <label for="inlineFormInput" className="labels">
                              Email
                            </label>
                            <input
                              onChange={(e) =>
                                this.setState({ confrimPass: e.target.value })
                              }
                              value={this.state.email}
                              type="text"
                              className="form-control mb-2 input"
                              id="inlineFormInput"
                            />
                          </div>

                          <div className="col-auto input-modal">
                            <label for="inlineFormInput" className="labels">
                              Phone (optional)
                            </label>
                            <div className="input-group mb-2">
                              <input
                                onChange={(e) =>
                                  this.setState({ phone: e.target.value })
                                }
                                type="number"
                                className="form-control input"
                                id="inlineFormInputGroup"
                              />
                            </div>
                            <div className="allow">
                              Alows Pet Parent to receive SLOOTH Alerts through
                              their phone’s Notification Tray
                            </div>
                          </div>

                          <div className="col-auto input-modal">
                            <label for="inlineFormInput" className="labels">
                              Zip Code
                            </label>
                            <div className="input-group mb-2">
                              <input
                                onChange={(e) =>
                                  this.setState({ zip: e.target.value })
                                }
                                type="text"
                                className="form-control input"
                                id="inlineFormInputGroup"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          ) : null}

          {this.state.check === "profile" &&
          this.state.isClicked === "petpatron" ? (
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
                        className="logo-big-2"
                        src={require("../src/assets/logo_big.svg")}
                      ></img>
                    </div>
                  </div>
                  <div>
                    {this.state.zip !== "" ? (
                      <button
                        className=" btn btn-primary mb-2 button"
                        type="button"
                        // className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                        onClick={() => {
                          this.setState({ petprofile1: false });
                          this.update();
                        }}
                      >
                        Next
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="btn btn-primary mb-2 button"
                        onClick={() => this.update()}
                      >
                        Next
                      </button>
                    )}
                  </div>
                </div>
                <div className="modal-body">
                  <div className="main-form">
                    <form className="">
                      <div className="form-row align-items-center">
                        <div className="main-input-modal">
                          <div className="create-new-account align-center">
                            Complete your profile
                          </div>
                          <div className="profile-div">
                            <img
                              className="profile"
                              src={
                                this.state.image !== ""
                                  ? this.state.image
                                  : require("../src/assets/profile.jpg")
                              }
                            ></img>
                          </div>

                          <div className="col-auto input-modal">
                            <label for="inlineFormInput" className="labels">
                              Full Name
                            </label>
                            <input
                              onChange={(e) =>
                                this.setState({ fullName: e.target.value })
                              }
                              value={this.state.fullName}
                              type="text"
                              className="form-control mb-2 input"
                              id="inlineFormInput"
                            />
                          </div>

                          <div className="col-auto input-modal">
                            <label for="inlineFormInput" className="labels">
                              Email
                            </label>
                            <input
                              onChange={(e) =>
                                this.setState({ confrimPass: e.target.value })
                              }
                              value={this.state.email}
                              type="text"
                              className="form-control mb-2 input"
                              id="inlineFormInput"
                            />
                          </div>

                          <div className="col-auto input-modal">
                            <label for="inlineFormInput" className="labels">
                              Phone (optional)
                            </label>
                            <div className="input-group mb-2">
                              <input
                                onChange={(e) =>
                                  this.setState({ phone: e.target.value })
                                }
                                type="number"
                                className="form-control input"
                                id="inlineFormInputGroup"
                              />
                            </div>
                            <div className="allow">
                              Alows Pet Parent to receive SLOOTH Alerts through
                              their phone’s Notification Tray
                            </div>
                          </div>

                          <div className="col-auto input-modal">
                            <label for="inlineFormInput" className="labels">
                              Zip Code
                            </label>
                            <div className="input-group mb-2">
                              <input
                                onChange={(e) =>
                                  this.setState({ zip: e.target.value })
                                }
                                type="text"
                                className="form-control input"
                                id="inlineFormInputGroup"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          ) : null}

          {/* Business Profile */}

          {this.state.check === "business" ? (
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
                        className="logo-big-2"
                        src={require("../src/assets/logo_big.svg")}
                      ></img>
                    </div>
                  </div>
                  <div>
                    <button
                      data-dismiss="modal"
                      type="button"
                      className="btn btn-primary mb-2 button"
                      data-toggle="modal"
                      data-target="#myModal"
                      // onClick={() => this.setState({ check: "usertype" })}
                      onClick={() => this.updateBusinessProfile()}
                    >
                      Next
                    </button>
                  </div>
                </div>

                <div className="modal-body">
                  <div className="main-form">
                    <form className="">
                      <div className="form-row align-items-center">
                        <div className="main-input-modal">
                          <div className="create-new-account align-center">
                            Business profile details
                          </div>

                          <div className="col-auto input-modal">
                            <label for="inlineFormInput" className="labels">
                              Company Name
                            </label>
                            <input
                              onChange={(e) =>
                                this.setState({ companyName: e.target.value })
                              }
                              type="text"
                              className="form-control mb-2 input"
                              id="inlineFormInput"
                            />
                          </div>

                          <div className="col-auto input-modal">
                            <label for="inlineFormInput" className="labels">
                              City
                            </label>
                            <input
                              onChange={(e) =>
                                this.setState({ city: e.target.value })
                              }
                              type="text"
                              className="form-control mb-2 input"
                              id="inlineFormInput"
                            />
                          </div>

                          <div className="col-auto input-modal">
                            <label for="inlineFormInput" className="labels">
                              State
                            </label>
                            <div className="input-group mb-2">
                              <input
                                onChange={(e) =>
                                  this.setState({ state: e.target.value })
                                }
                                type="text"
                                className="form-control input"
                                id="inlineFormInputGroup"
                              />
                            </div>
                          </div>

                          <div className="col-auto input-modal">
                            <label for="inlineFormInput" className="labels">
                              Zip Code
                            </label>
                            <div className="input-group mb-2">
                              <input
                                onChange={(e) =>
                                  this.setState({ zipCode: e.target.value })
                                }
                                type="text"
                                className="form-control input"
                                id="inlineFormInputGroup"
                              />
                            </div>
                          </div>

                          <div className="col-auto input-modal">
                            <label for="inlineFormInput" className="labels">
                              Phone
                            </label>
                            <div className="input-group mb-2">
                              <input
                                onChange={(e) =>
                                  this.setState({ phone: e.target.value })
                                }
                                type="text"
                                className="form-control input"
                                id="inlineFormInputGroup"
                              />
                            </div>
                          </div>

                          <div className="col-auto input-modal">
                            <label for="inlineFormInput" className="labels">
                              Contact Name
                            </label>
                            <div className="input-group mb-2">
                              <input
                                onChange={(e) =>
                                  this.setState({ contactName: e.target.value })
                                }
                                type="text"
                                className="form-control input"
                                id="inlineFormInputGroup"
                              />
                            </div>
                          </div>

                          <div className="dropdown">
                            <button
                              className="btn btn-outline-primary dropdown-toggle dropdowns"
                              type="button"
                              id="dropdownMenuButton"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              {this.state.dropdown1 === ""
                                ? "Business Category"
                                : this.state.dropdown1}
                            </button>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuButton"
                              defaultValue={this.state.dropdown1}
                              onChange={(e) => console.log(e)}
                            >
                              <a
                                onClick={() =>
                                  this.setState({ dropdown1: "food" })
                                }
                                className="dropdown-item"
                                style={{ cursor: "pointer" }}
                              >
                                {/* {console.log(this.state.dropdown1)} */}
                                Food
                              </a>
                              <a
                                onClick={() =>
                                  this.setState({ dropdown1: "services" })
                                }
                                className="dropdown-item"
                                style={{ cursor: "pointer" }}
                              >
                                Services
                              </a>
                              <a
                                onClick={() =>
                                  this.setState({ dropdown1: "health/medical" })
                                }
                                className="dropdown-item"
                                style={{ cursor: "pointer" }}
                              >
                                Health/Medical
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>

        <div className="modal fade" id="myModal" role="dialog">
          <div className="modal-dialog">
            {this.state.petprofile1 === true ? (
              <Petprofile1
                petprofile1={this.petprofile1}
                selected={this.selected}
                selectedPet={this.state.selectedPet}
              />
            ) : null}

            {this.state.petprofile2 === true ? (
              <Petprofile2
                petprofile2={this.petprofile2}
                petType={this.petType}
                petTypeValue={this.state.petType}
              />
            ) : null}

            {this.state.petprofile3 === true ? (
              <Petprofile3
                petprofile3={this.petprofile3}
                petProfileDetails={this.petProfileDetails}
                petProfileImage={this.state.petProfileImage}
                isLoading2={this.state.isLoading2}
                _handleImagePicked={this._handleImagePickedPetProfile}
                imageError={this.imageError}
              />
            ) : null}

            {this.state.petprofile4 === true ? (
              <Petprofile4 petprofile4={this.petprofile4} state={this.state} />
            ) : null}
            {this.state.petprofile5 === true ? (
              <Petprofile5 petprofile5={this.petprofile5} />
            ) : null}

            {this.state.petprofile6 === true ? (
              <Petprofile6 petprofile6={this.petprofile6} />
            ) : null}

            {this.state.petprofile7 === true ? <Petprofile7 /> : null}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
