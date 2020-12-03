/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./MarketPlace.css";
import Rightsidenav from "../../RightSideNav";
import Sidenav from "../../SideNav";
// import { ImagePicker } from "react-file-picker";

import Loader from "react-loader-spinner";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import CameraAltIcon from "@material-ui/icons/CameraAltOutlined";
import * as firebase from "firebase";
import { connect } from "react-redux";
import {
  marketPlaceItem,
  getMarketPlaceItem,
} from "../../store/actions/authActions";
import { bindActionCreators } from "redux";
import uuid from "uuid";

class Marketplace extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "Furniture",
      images: null,
      imageIndex: 0,
      imagesDeployed: [],
      isLoadingPost: false,
      uploading: false,
      whiteCamera: false,
      fullName: "",
      email: "",
      phone: "",
      zip: "",
      selectedCategory: "Furniture",
      marketPlaceList: [],

      price: "",
      category: "",
      productName: "",
      description: "",
      userId: firebase.auth().currentUser
        ? firebase.auth().currentUser.uid
        : "rC38RLj73eT3yBhiia1xK9Efqwh2",
    };
  }

  componentDidMount() {
    this.props.getMarketPlaceItem("Furniture");
    firebase
      .database()
      .ref(`users/${this.state.userId}`)
      .on("value", (value) => {
        this.setState({
          fullName: value.val().fullName?value.val().fullName:'',
          email: value.val().email,
          phone: value.val().ProfileDetails
            ? value.val().ProfileDetails.phone
            : "",
          zip: value.val().ProfileDetails ? value.val().ProfileDetails.zip : "",
        });
      });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.state.auth.getMarketPlaceList) {
      console.log(nextProps.state.auth.getMarketPlaceList);
      this.setState({
        marketPlaceList: nextProps.state.auth.getMarketPlaceList,
      });
    }
  }

  fileSelectedHandler = (e) => {
    let array = Array.from(e.target.files);
    if (this.state.images) {
      array.map((val) => URL.createObjectURL(val));
      this.setState({
        images: [...this.state.images, ...array],
      });
    } else {
      this.setState({ images: array.map((val) => URL.createObjectURL(val)) });
    }
  };
  handleChange = (event) => {
    this.setState({ category: event.target.value });
  };
  remove = (ind) => {
    this.state.images.splice(ind, 1);
    this.setState({ images: this.state.images });
  };

  post = () => {
    this.setState({ uploading: true });

    this.setState({ imageIndex: 0 });
    this.state.images.map((image, ind) => {
      this._handleImagePicked(image, ind);
    });
  };

  _handleImagePicked = async (image, ind) => {
    this.setState({
      isLoadingPost: true,
    });
    try {
      let uploadUrl = await this.uploadImageAsync(image);
      this.setState({
        imageIndex: this.state.imageIndex + 1,
      });
      console.log(uploadUrl);
      this.setState({
        imagesDeployed: [...this.state.imagesDeployed, uploadUrl],
        isLoadingPost: false,
      });

      if (this.state.imageIndex === this.state.images.length) {
        this.uploadToDb();
      }
    } catch (e) {
      this.setState({ isLoadingPost: false, uploading: false });
    } finally {
      this.setState({ isLoadingPost: false, uploading: false });
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

  uploadToDb = () => {
    let obj = {
      price: this.state.price,
      category: this.state.category,
      productName: this.state.productName,
      description: this.state.description,
      images: this.state.imagesDeployed,
      userId: this.state.userId,
      fullName: this.state.fullName,
      phone: this.state.phone,
      zip: this.state.zip,
      email: this.state.email,
    };

    this.props.marketPlaceItem(obj, this.state.userId);
    this.setState({ uploading: false });
  };

  render() {
    const { email, fullName, phone, zip } = this.state;
    return (
      <div className="App">
        <div className="main">
          <Sidenav {...this.props} />
          {/* ******************* CENTER ********************* */}
          <div className="marketPlace">
            <div className="marketplace-heading-logo">
              <div />
              <h4 className="services">Marketplace</h4>
              <div
                type="button"
                className="sell"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                <CameraAltIcon style={{ color: "#2a2c7c" }} />
                <div style={{ color: "#2a2c7c" }}>sell</div>
              </div>
            </div>

            <div className="p-1 rounded rounded-pill shadow-sm mb-4 marketplace-search-bar">
              <div className="input-group">
                <div className="input-group-prepend">
                  <button
                    id="button-addon2"
                    type="submit"
                    className="btn btn-link text-secondary"
                  >
                    <i className="fa2 fa fa-search"></i>
                  </button>
                </div>
                <input
                  type="search"
                  placeholder="Enter your Zip code to see services nearby..."
                  aria-describedby="button-addon2"
                  className="form-control form-control2 "
                />
              </div>
            </div>

            <div className="all-images-paragraphs">
              <div className="image-showfilter image-showfilter-nomargin ">
                <img src={require("../../assets/icon_filter.svg")} />
                <p className="showfilter">Show Filter</p>
              </div>

              <div className="sortby-image-nomargin">
                <p className="showfilter">Sort by:Price</p>
                <img src={require("../../assets/icon_dropdown_white.svg")} />
              </div>
            </div>

            <hr />

            <ul className="nav market-navtab">
              <li>
                <a
                  className="furniture"
                  onClick={() =>
                    this.props.getMarketPlaceItem("Pet ToysFurniture")
                  }
                >
                  Furniture
                </a>
              </li>
              <li className="dropdown">
                <a
                  className="houses"
                  onClick={() =>
                    this.props.getMarketPlaceItem("Kennels/houses")
                  }
                >
                  Kennels/houses
                </a>
              </li>

              <li>
                <a
                  className="furniture"
                  onClick={() => this.props.getMarketPlaceItem("Pet Toys")}
                >
                  Pet Toys
                </a>
              </li>
              <li>
                <a
                  className="furniture"
                  onClick={() => this.props.getMarketPlaceItem("Accessories")}
                >
                  Accessories
                </a>
              </li>
            </ul>
            <hr />

            <div className="container">
              <div className="all-left-doghouses">
                {this.state.marketPlaceList.length > 0
                  ? this.state.marketPlaceList.map((val, ind) => {
                      return (
                        <div
                          key={ind}
                          className="marketplace-item"
                          onClick={() =>
                            this.props.history.push("MarketPlaceItem", {
                              marketPlaceItem: val,
                            })
                          }
                        >
                          <img className="doghouses" src={val.images[0]} />
                          <div className="petname-doghouses">${val.price}</div>
                        </div>
                      );
                    })
                  : null}
              </div>
            </div>
          </div>
          <div>
            <Rightsidenav {...this.props} />
          </div>
        </div>

        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
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
                      src={require("../../assets/logo_big.svg")}
                    ></img>
                  </div>
                </div>
                <div>
                  <button
                    style={{ visibility: "hidden" }}
                    type="button"
                    className="btn btn-primary mb-2 button"
                    // onClick={() => this.SignUp()}
                  >
                    Next
                  </button>
                </div>
              </div>
              <div className="modal-body">
                <div className="main-form">
                  <form className="add-new-item-form">
                    <div className="add-new-item">
                      Add new items in marketplace
                    </div>

                    <div className="form-row align-items-center">
                      <div className="main-input-modal">
                        <div className="portion-headings">
                          Enter Item Details
                        </div>
                        <div className="col-auto input-modal">
                          <FormControl style={{ width: "100%" }}>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={this.state.type}
                              onChange={(e) => this.handleChange(e)}
                              className="marketplace-select-box"
                            >
                              <MenuItem value={"Furniture"}>Furniture</MenuItem>
                              <MenuItem value={"Kennels/Houses"}>
                                Kennels/Houses
                              </MenuItem>
                              <MenuItem value={"Pet Toys"}>Pet Toys</MenuItem>
                              <MenuItem value={"Accessories"}>
                                Accessories
                              </MenuItem>
                            </Select>
                          </FormControl>
                        </div>
                        <div className="col-auto input-modal">
                          <label for="inlineFormInput" className="labels">
                            Price,$
                          </label>
                          <input
                            onChange={(e) =>
                              this.setState({ price: e.target.value })
                            }
                            type="text"
                            className="form-control mb-2 input"
                            id="inlineFormInput"
                          />
                        </div>

                        <div className="col-auto input-modal">
                          <label for="inlineFormInput" className="labels">
                            Title
                          </label>
                          <input
                            onChange={(e) =>
                              this.setState({ productName: e.target.value })
                            }
                            type="text"
                            className="form-control mb-2 input"
                            id="inlineFormInput"
                          />
                        </div>
                        <div className="col-auto input-modal">
                          <div className="form-group">
                            <label for="inlineFormInput" className="labels">
                              Description
                            </label>
                            <textarea
                              style={{
                                border: 0,
                                borderBottom: "3px solid rgb(129, 133, 129)",
                              }}
                              className="form-control comment-form marketplace-text-area"
                              rows="5"
                              id="comment"
                              onChange={(e) =>
                                this.setState({ description: e.target.value })
                              }
                            ></textarea>
                          </div>
                        </div>

                        <div className="main-input-modal">
                          <div className="portion-headings">Seller Details</div>
                          <div className="col-auto input-modal">
                            <label for="inlineFormInput" className="labels">
                              Seller Name
                            </label>
                            <input
                              onChange={(e) =>
                                this.setState({ sellerName: e.target.value })
                              }
                              type="text"
                              className="form-control mb-2 input"
                              id="inlineFormInput"
                              defaultValue={fullName}
                            />
                          </div>
                          <div className="col-auto input-modal">
                            <label for="inlineFormInput" className="labels">
                              Seller Email
                            </label>
                            <input
                              onChange={(e) =>
                                this.setState({ sellerEmail: e.target.value })
                              }
                              type="text"
                              className="form-control mb-2 input"
                              id="inlineFormInput"
                              defaultValue={email}
                            />
                          </div>

                          <div className="col-auto input-modal">
                            <label for="inlineFormInput" className="labels">
                              Seller Phone Number
                            </label>
                            <input
                              onChange={(e) =>
                                this.setState({
                                  sellerPhoneNumber: e.target.value,
                                })
                              }
                              type="text"
                              className="form-control mb-2 input"
                              id="inlineFormInput"
                              defaultValue={phone}
                            />
                          </div>

                          <div className="col-auto input-modal">
                            <label for="inlineFormInput" className="labels">
                              Seller Zip Code
                            </label>
                            <input
                              onChange={(e) =>
                                this.setState({ sellerZipCode: e.target.value })
                              }
                              type="text"
                              className="form-control mb-2 input"
                              id="inlineFormInput"
                              defaultValue={zip}
                            />
                          </div>
                        </div>

                        {this.state.images === null ? (
                          <div className="upload-photos-div">
                            {!this.state.isLoading ? null : (
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
                          <div>
                            <div className="add-new-item">Selected photos</div>
                            <div
                              className={
                                this.state.images === null
                                  ? "image-upload"
                                  : "image-uploaded"
                              }
                            >
                              {this.state.images.map((val, ind) => (
                                <div className="selected-images-div" key={ind}>
                                  <div>
                                    <img
                                      className="selected-images"
                                      src={val}
                                    />
                                  </div>
                                  <div
                                    onClick={() => this.remove(ind)}
                                    className="image-cross"
                                  >
                                    <span>x</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="button-div">
                          <label class="btn btn-outline-primary upload-photos btn-file">
                            <CameraAltIcon
                              style={
                                this.state.whiteCamera
                                  ? { color: "white" }
                                  : { color: "#2a2c7c" }
                              }
                            />
                            Upload photos
                            <input
                              type="file"
                              accept="image/*"
                              multiple
                              onChange={this.fileSelectedHandler}
                              style={{ display: "none" }}
                              onMouseOver={() =>
                                this.setState({ whiteCamera: true })
                              }
                              // onBlur={()=>this.setState({whiteCamera: false})}
                            />
                          </label>
                        </div>
                        {!this.state.uploading ? (
                          <div style={{ margin: "5% 0%" }}>
                            <div className="button-div">
                              <button
                                onClick={() => this.post()}
                                // onClick={() => this.uploadToDb()}
                                type="button"
                                class="btn btn-outline-primary marketplace-post"
                              >
                                POST
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div className="post-marketplace">
                            <Loader
                              type="Circles"
                              color="#00BFFF"
                              height={50}
                              width={50}
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
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state: state,
});
const mapDispatchToProps = (dispatch) => ({
  marketPlaceItem: bindActionCreators(marketPlaceItem, dispatch),
  getMarketPlaceItem: bindActionCreators(getMarketPlaceItem, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Marketplace);
