import React from "react";
import "./RecordPodcast.css";
import Sidenav from "../../SideNav";
import RightSideNav from "../../RightSideNav";
import MicNoneOutlinedIcon from "@material-ui/icons/MicNoneOutlined";
import PublishOutlinedIcon from "@material-ui/icons/PublishOutlined";
import * as firebase from "firebase";
import { connect } from "react-redux";
import { podcast } from "../../store/actions/authActions";
import { bindActionCreators } from "redux";
import uuid from "uuid";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

class RecordPodcast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: "cafelist",
      type: "cart",
      userProfileId: "",
      user: "",
      profilePic: "",
      description: "",
      image: "",
      userId: firebase.auth().currentUser
        ? firebase.auth().currentUser.uid
        : "rC38RLj73eT3yBhiia1xK9Efqwh2",
    };
  }

  componentDidMount() {
    firebase
      .database()
      .ref(`users/${this.state.userId}/`)
      .on("value", (val) => {
        this.setState({
          userProfileId: val.key,
          user: val.val().fullName,
          profilePic: val.val().profilePic,
        });
      });
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  fileSelectedHandler = (e) => {
    const file = URL.createObjectURL(e.target.files[0]);
    this.setState({ open: true, image: file });
  };

  _handleImagePicked = async () => {
    this.setState({ isLoading: true });
    try {
      let uploadUrl = await this.uploadImageAsync(this.state.image);
      this.setState({ isLoading: true });
      let obj = {
        podcastUrl: uploadUrl,
        postedBy: this.state.userId,
        date: new Date().getTime(),
        name: this.state.user,
        profilePic: this.state.profilePic,
        description: this.state.description,
        likesBy: {},
        totalLikes: 0,
        totalComments: 0,
      };
      this.props.podcast(obj);
      this.setState({ url: uploadUrl, isLoading: false, open: false });
      NotificationManager.warning("Podcast successfully uploaded");

      setTimeout(() => {
        this.props.history.goBack();
      }, 3000);
    } catch (e) {
      this.setState({ isLoading: false, open: false });
      alert("Upload failed, sorry :(");
      console.log(e);
    } finally {
      this.setState({ isLoading: false, open: false });
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

    const ref = firebase.storage().ref().child(`${uuid.v4()}/audio.mp3`);
    const snapshot = await ref.put(blob);
    // blob.close();

    return await snapshot.ref.getDownloadURL();
  };

  render() {
    return (
      <div className="App">
        {/* <img className="logo" src={require("./assets/logo_big.svg" )} alt="slooth" /> */}
        <div className="main">
          <Sidenav {...this.props} />
          {/* ******************* CENTER ********************* */}

          <div
            className="recordCenter"
            style={
              this.props.location.state.themeBackground === ""
                ? { backgroundColor: this.props.location.state.themeColor }
                : {
                    backgroundImage: `url(${this.props.location.state.themeBackground})`,
                  }
            }
          >
            <div className="image-record">
              <div>
                <img
                  className="img-record"
                  src={require("../../assets/dog-pod.jpeg")}
                />
              </div>
              &nbsp;&nbsp;&nbsp;
              <div className="name-record-pod">
                <span className="name-record">User Name</span>
              </div>
            </div>
            <div className="record-heading">
              <h4 className="record">Record or upload your podcast</h4>
            </div>

            <div className="pup-para-record">
              <div>
                <div>
                  <div
                    className="upload-options-div"
                    onClick={() =>
                      this.props.history.push("Recording", {
                        themeColor: this.props.location.state.themeColor,
                        themeBackground: this.props.location.state
                          .themeBackground,
                      })
                    }
                  >
                    <div className="mic-icon">
                      <div className="record-br">
                        <MicNoneOutlinedIcon className="pet3-record" />
                      </div>
                    </div>

                    <div className="record-podcast">
                      <h3>Record</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="upload-options-div btn-file">
                <label className="upload-options-div">
                  <input
                    type="file"
                    accept="audio/*"
                    onChange={this.fileSelectedHandler}
                    style={{ display: "none" }}
                    onMouseOver={() => this.setState({ whiteCamera: true })}
                  />

                  <div>
                    <div className="record-br">
                      <PublishOutlinedIcon className="pet3-record" />
                    </div>
                  </div>
                  <div className="record-podcast">
                    <h3> Upload</h3>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <RightSideNav {...this.props} />
        </div>
        <Modal
          open={this.state.open}
          onClose={() => this.handleClose()}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <div className="input-div uploaded-audio">
            <div className="addpodcast-heading">Add podcast description</div>
            <input
              className="form-control form-control input-record"
              type="text"
              placeholder="write here..."
              onChange={(e) => this.setState({ description: e.target.value })}
            />
            <div className="upload-podcast-btn">
              <Button
                onClick={this._handleImagePicked.bind(this)}
                variant="contained"
                color="secondary"
              >
                Upload Podcast
              </Button>
            </div>
          </div>
        </Modal>
        <NotificationContainer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  podcast: bindActionCreators(podcast, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecordPodcast);
