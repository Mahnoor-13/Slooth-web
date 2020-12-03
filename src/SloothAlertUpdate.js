import React from "react";
import "./sloothAlert2.css";
import Sidenav from "./SideNav";
import Rightsidenav from "./RightSideNav";
import * as firebase from "firebase";
import uuid from "uuid";
import { ImagePicker } from "react-file-picker";
import Loader from "react-loader-spinner";
import { NotificationManager } from "react-notifications";
import WheelPicker from "react-simple-wheel-picker";

const data = [
  {
    id: "1",
    value: "10 miles",
  },
  {
    id: "2",
    value: "25 miles",
  },
  {
    id: "3",
    value: "50 miles",
  },
  {
    id: "4",
    value: "100 miles",
  },
  {
    id: "5",
    value: "200 miles",
  },
];
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alerttitle: undefined,
      registeredWithCellPhone: false,
      digitalpostertype: "Advertising",
      description: "",
      petname: "",
      selectyourpet: "",
      selectedIndex: 1,
      petType: "",
      img: "",
      color: "",
      age: "",
      reward: "",
      isModalVisible: false,
      loading: false,
      userId: firebase.auth().currentUser
        ? firebase.auth().currentUser.uid
        : "rC38RLj73eT3yBhiia1xK9Efqwh2",
      image: "",
      isLoading: false,
      isLoading2: false,
    };
    console.log("props", props);
  }

  sloothAlert = () => {
    let state = {
      alerttitle: this.state.alerttitle,
      registeredWithCellPhone: this.state.registeredWithCellPhone,
      digitalpostertype: this.state.digitalpostertype,
      description: this.state.description,
      petname: "kitty",
      selectyourpet: this.state.selectyourpet,
      petType: this.state.petType,
      img:
        this.state.image === null || this.state.image === undefined
          ? ""
          : this.state.image,
      color: this.state.color,
      age: this.state.age,
      updated: new Date().getTime(),
      reward: this.state.reward,
    };

    firebase
      .database()
      .ref(`sloothAlert/${this.props.history.location.state.state.key}/data`)
      .update(state)
      .then((s) => {
        console.log("console.log(s);", s);
        this.props.history.goBack();
      })
      .catch((e) => {
        this.setState({ isLoading: false });
        // Alert.alert(e);
      });
  };

  componentDidMount() {
    let state = this.props.history.location.state.state;
    console.log(state.data);
    this.setState({
      alerttitle: state.data.alerttitle,
      registeredWithCellPhone: state.data.registeredWithCellPhone,
      digitalpostertype: state.data.digitalpostertype,
      description: state.data.description,
      petname: state.data.petname,
      selectyourpet: state.data.selectyourpet,
      img: state.data.img,
      image: state.data.img,
      color: state.data.color,
      age: state.data.age,
      posted: state.data.posted,
      reward: state.data.reward,
    });
  }

  _handleImagePicked = async (img) => {
    this.setState({ isLoading2: true });
    try {
      let uploadUrl = await this.uploadImageAsync(img);
      console.log("uploadUrl", uploadUrl);
      this.setState({ image: uploadUrl, img: uploadUrl, isLoading2: false });
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

  imageError = (imageError) => {
    NotificationManager.warning(imageError);
  };

  render() {
    console.log(this.state.image);
    return (
      <div className="App">
        {/* <img className="logo" src={require("./assets/logo_big.svg" )} alt="slooth" /> */}
        <div className="main">
          <Sidenav {...this.props} />
          {/* ******************* CENTER ********************* */}

          <div className="slooth2-center">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                padding: "3% 0 0%",
              }}
            >
              <img
                src={require("./assets/sloothalert.svg")}
                style={{
                  width: "4%",
                  marginRight: "2%",
                }}
              />
              <h3
                className="sloothalert"
                style={{
                  marginTop: 0,
                }}
              >
                SLOOTH ALERT
              </h3>
            </div>
            <hr />

            <div className="all-inputs">
              <div className="dropdown">
                <button
                  className="btn btn-outline-primary dropdown-toggle dropdowns dropdownsloothalert"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {this.state.digitalpostertype === ""
                    ? "Business Category"
                    : this.state.digitalpostertype}
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                  defaultValue={this.state.digitalpostertype}
                  onChange={(e) => console.log(e)}
                >
                  <a
                    onClick={() =>
                      this.setState({ digitalpostertype: "Affirmative" })
                    }
                    className="dropdown-item"
                    style={{ cursor: "pointer" }}
                  >
                    Affirmative
                  </a>
                  <a
                    onClick={() =>
                      this.setState({ digitalpostertype: "Advertising" })
                    }
                    className="dropdown-item"
                    style={{ cursor: "pointer" }}
                  >
                    Advertising
                  </a>
                  <a
                    onClick={() =>
                      this.setState({ digitalpostertype: "Missingposter" })
                    }
                    className="dropdown-item"
                    style={{ cursor: "pointer" }}
                  >
                    Missing Poster
                  </a>
                </div>
              </div>

              <div className="dropdown">
                <button
                  className="btn btn-outline-primary dropdown-toggle dropdowns dropdownsloothalert"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  placeholder="Select Your Pet"
                >
                  {this.state.petname === ""
                    ? "No Pets available"
                    : this.state.petname}
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                  defaultValue={this.state.selectyourpet}
                >
                  <a
                    onClick={() =>
                      this.setState({ selectyourpet: this.state.petname })
                    }
                    className="dropdown-item"
                    style={{ cursor: "pointer" }}
                  >
                    {this.state.petname}
                  </a>
                </div>
              </div>

              <div className="form-group">
                <input
                  type="text"
                  className="form-control all-forms"
                  id="pwd"
                  placeholder="Alert Title"
                  defaultValue={this.state.alerttitle}
                  onChange={(e) =>
                    this.setState({ alerttitle: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control comment-form"
                  rows="5"
                  id="comment"
                  placeholder="Description"
                  defaultValue={this.state.description}
                  onChange={(e) =>
                    this.setState({ description: e.target.value })
                  }
                ></textarea>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control all-forms"
                  id="usr"
                  placeholder="Reward Amount"
                  defaultValue={this.state.reward}
                  onChange={(e) => this.setState({ reward: e.target.value })}
                />
              </div>

              {this.state.image === "" ? (
                <div style={{ height: "100%" }}>
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
                      <div className="slooth-dashed2 text-center">
                        <div className="full-btn">
                          <button type="button" className="para-alert2 btn">
                            <img
                              src={require("./assets/icon_photo_small.svg")}
                            />
                            UPLOAD PHOTO
                          </button>
                        </div>
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
                  <ImagePicker
                    extensions={["jpg", "jpeg", "png"]}
                    dims={{
                      minWidth: 100,
                      maxWidth: 10000,
                      minHeight: 100,
                      maxHeight: 10000,
                    }}
                    onChange={(base64) => {
                      this._handleImagePicked(base64);
                    }}
                    onError={(errMsg) => {
                      this.imageError(errMsg);
                    }}
                  >
                    <img style={{height:"120px"}} className="image-upload-img" src={this.state.image} />
                  </ImagePicker>
                </div>
              )}
            </div>
            <br />

            <div className="zip-code">
              <p className="zip-code-based-alert">
                Zip Code Based Alert Radius: {this.state.miles}
              </p>
            </div>

            <div className="form-group wheel-div">
              <WheelPicker
                data={data}
                onChange={(e) => {
                  console.log(e);

                  this.setState({ miles: e.value });
                }}
                height={150}
                width={"100%"}
                titleText="Enter value same as aria-label"
                itemHeight={30}
                selectedID={data[0].id}
                color="#ccc"
                activeColor="#333"
                // backgroundColor="#fff"
              />
            </div>
            <div
              className="checkbox"
              onClick={() =>
                this.setState({
                  registeredWithCellPhone: !this.state.registeredWithCellPhone,
                })
              }
            >
              <div
                className="form-check"
                style={
                  this.state.registeredWithCellPhone
                    ? { backgroundColor: "#2a2c7c" }
                    : { backgroundColor: "white" }
                }
              ></div>
              &nbsp;
              <p className="registered-with-a-cell-phone-number">
                Registered with a cell phone number
              </p>
            </div>

            {/* <div className="zip-code">
              <p className="zip-code-based-alert">
                Zip Code Based Alert Radius: 50 miles
              </p>
            </div>

            <div className="checkbox">
              <div className="form-check"></div>
              &nbsp;
              <p className="registered-with-a-cell-phone-number">
                Registered with a cell phone number
              </p>
            </div> */}
            <div className="next-btn1">
              <button
                type="button"
                className="next-btn2 btn btn-primary"
                onClick={() => this.sloothAlert()}
                // onClick={() => this.props.history.push("/sloothAlert3",{})}
              >
                Update
              </button>
            </div>
          </div>

          <Rightsidenav {...this.props} />
        </div>
      </div>
    );
  }
}
export default App;
