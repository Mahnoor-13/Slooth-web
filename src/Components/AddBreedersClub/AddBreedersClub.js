import React from "react";
import "../../sloothAlert2.css";
import Sidenav from "../../SideNav";
import Rightsidenav from "../../RightSideNav";
import * as firebase from "firebase";
import uuid from "uuid";
import { ImagePicker } from "react-file-picker";
import Loader from "react-loader-spinner";
import { NotificationManager } from "react-notifications";
import WheelPicker from "react-simple-wheel-picker";
import PetsIcon from "@material-ui/icons/Pets";
// import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

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
      posted: new Date().getTime(),
      reward: "",
      isModalVisible: false,
      loading: false,
      userId: firebase.auth().currentUser
        ? firebase.auth().currentUser.uid
        : "rC38RLj73eT3yBhiia1xK9Efqwh2",
      image: "",
      isLoading: false,
      isLoading2: false,
      miles: "10 miles",
    };
  }

  sloothAlert = () => {
    console.log(this.state);
    if (
      this.state.alerttitle !== "" &&
      this.state.reward !== "" &&
      this.state.description !== "" &&
      this.state.image !== ""
    ) {
      let state = {
        alerttitle: this.state.alerttitle,
        registeredWithCellPhone: this.state.registeredWithCellPhone,
        digitalpostertype: this.state.digitalpostertype,
        description: this.state.description,
        petname: "kitty",
        selectyourpet: this.state.selectyourpet,
        petType: this.state.petType,
        img: this.state.image,
        color: this.state.color,
        age: this.state.age,
        posted: new Date().getTime(),
        reward: this.state.reward,
        userId: firebase.auth().currentUser
          ? firebase.auth().currentUser.uid
          : "rC38RLj73eT3yBhiia1xK9Efqwh2",
      };
      this.props.history.push("/sloothAlert3", { state: state });
    } else if (this.state.image === "") {
      NotificationManager.warning("Photo not uploaded yet");
    } else {
      NotificationManager.warning("Please complete all the fields");
    }
  };

  componentDidMount() {
    firebase
      .database()
      .ref(`newPet/${this.state.userId}`)
      .on("value", (value) => {
        if (value.val()) {
          this.setState({
            petname: value.val().petName,
            selectyourpet: value.val().petType,
            img: value.val().image,
            color: value.val().color,
            age: value.val().age,
          });
        }
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
    return (
      <div className="App">
        <div className="main">
          <Sidenav {...this.props} />
          {/* ******************* CENTER ********************* */}

          <div className="discover-cntr breeders-club-center">
            <div className="heading-logo">
              <h4 className="services-discover">
                <PetsIcon /> Breeder's Club
              </h4>
            </div>

            <div class="container hide-scrollbar">
              <ul class="nav market-navtab add-breeders-club-bar">
                <li>
                  <a className="furniture-discover" href="#">
                    BreedersClub Home
                  </a>
                </li>

                <li>
                  <a
                    className="furniture-discover"
                    href="#"
                    onClick={() => this.props.history.push("/creategroup")}
                  >
                    Live Pet Auction
                  </a>
                </li>

                <li>
                  <a
                    className="your-group"
                    href="#"
                    onClick={() => this.props.history.push("/creategroup")}
                  >
                    Sell your pet
                  </a>
                </li>
              </ul>
              <hr />
            </div>

            <div>
              <hr />

              <div className="available-pets">
                <p className="furniture-discover">Add pet information</p>
              </div>

              <div className="all-inputs">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control all-forms"
                    id="pwd"
                    placeholder="Pet Type"
                    onChange={(e) =>
                      this.setState({ alerttitle: e.target.value })
                    }
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    className="form-control all-forms"
                    id="pwd"
                    placeholder="Pet Name"
                    onChange={(e) =>
                      this.setState({ alerttitle: e.target.value })
                    }
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    className="form-control all-forms"
                    id="pwd"
                    placeholder="Breed"
                    onChange={(e) =>
                      this.setState({ alerttitle: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control all-forms"
                    id="pwd"
                    placeholder="Color"
                    onChange={(e) =>
                      this.setState({ alerttitle: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control all-forms"
                    id="pwd"
                    placeholder="Age"
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
                    onChange={(e) =>
                      this.setState({ description: e.target.value })
                    }
                  ></textarea>
                </div>

                <div className="form-group" style={{ textAlign: "center" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={true}
                        // onChange={handleChange}
                        name="checkedB"
                        color="primary"
                      />
                    }
                    label="Sell as fixed price"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        // checked={state.checkedB}
                        // onChange={handleChange}
                        name="checkedB"
                        color="primary"
                      />
                    }
                    label="Pet Auction"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    className="form-control all-forms"
                    id="usr"
                    placeholder="Amount"
                    onChange={(e) => this.setState({ reward: e.target.value })}
                  />
                </div>

                {this.state.image === "" ? (
                  <div>
                    {!this.state.isLoading2 ? (
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
                                src={require("../../assets/icon_photo_small.svg")}
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
                    <img className="image-upload-img" src={this.state.image} />
                  </div>
                )}
              </div>
              <br />

              <div className="next-btn1">
                <button
                  type="button"
                  className="next-btn2 btn btn-primary"
                  onClick={() => this.sloothAlert()}
                >
                  ADD PET IN BREEDER'S CLUB
                </button>
              </div>
            </div>
          </div>
          <Rightsidenav {...this.props} />
        </div>
      </div>
    );
  }
}
export default App;
