import React from "react";
import "./PodcastDiscussion.css";
import Sidenav from "../../SideNav";
import RightSideNav from "../../RightSideNav";
import BarChartOutlinedIcon from "@material-ui/icons/BarChartOutlined";
import PlayArrowOutlinedIcon from "@material-ui/icons/PlayArrowOutlined";
import SendIcon from "@material-ui/icons/Send";
import PauseIcon from "@material-ui/icons/Pause";
import * as firebase from "firebase";
import { connect } from "react-redux";
import {
  podcast,
  podcastComments,
  getPodcastComments,
  updatePodcastComments,
} from "../../store/actions/authActions";
import { bindActionCreators } from "redux";
import AudioPlayer from "react-h5-audio-player";
import "rc-slider/assets/index.css";

class PodcastDiscussion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: this.props.location.state.podcast.key,
      podcast: this.props.location.state.podcast,
      comments: [],
      userProfileId: "",
      user: "",
      profilePic: "",
      text: "",
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
        // alert(JSON.stringify(val.val()))
        this.setState({
          userProfileId: val.key,
          user: val.val().fullName,
          profilePic: val.val().profilePic,
        });
      });

    this.props.getPodcastComments(this.state.key);
  }

  componentWillReceiveProps(nextProps) {
    console.log("nextProps.state.auth.getPodcastComments)", nextProps);
    this.setState({
      comments: nextProps.state.auth.getPodcastComments,
    });
  }

  send = () => {
    this.props.podcastComments({
      podcastId: this.state.key,
      comment: this.state.text,
      name: this.state.user,
      date: `${new Date().getTime()}`,
      profilePic: this.state.profilePic,
    });
    this.props.getPodcastComments(this.state.key);

    this.props.updatePodcastComments(
      this.state.comments.length,
      this.state.key
    );
  };
  render() {
    return (
      <div className="App">
        {/* <img className="logo" src={require("../../assets/logo_big.svg" )} alt="slooth" /> */}
        <div className="main">
          <Sidenav {...this.props} />
          {/* ******************* CENTER ********************* */}

          <div
            className="discussCenter"
            style={
              this.props.location.state.themeBackground === ""
                ? { backgroundColor: this.props.location.state.themeColor }
                : {
                    backgroundImage: `url(${this.props.location.state.themeBackground})`,
                  }
            }
          >
            <div className="discuss-heading">
              <h4 className="discuss">Podcast & Discussion</h4>
            </div>

            <div className="pup-para-discuss">
              <div
                className="discuss-br"
                style={{
                  backgroundImage: `url(${this.state.podcast.profilePic})`,
                  opacity: "0.8",
                }}
              >
                <BarChartOutlinedIcon className="pet3-discuss" />
              </div>
            </div>

            <div className="above-podcast-information">
              <div className="podcast-information">Podcast Information: </div>
              <div>
                <div className="">
                  <div className="anc-y-podcast anc-y1">
                    <span
                      className="small-podcastm"
                      style={{ color: "white", marginLeft: 10 }}
                    >
                      Podcast By: {this.state.podcast.name}
                    </span>
                  </div>
                </div>
                <div className="anc-y-podcast anc-y2">
                  <span
                    className="small-podcastm"
                    style={{ color: "white", marginLeft: 10 }}
                  >
                    Description: {this.state.podcast.description}
                  </span>
                </div>
              </div>
            </div>
            <div className="audio-player-div">
              <AudioPlayer
                src={this.state.podcast.podcastUrl}
                onPlay={(e) => console.log("onPlay")}
                customVolumeControls={[]}
                customAdditionalControls={[]}
                showJumpControls={false}
                className="audio audio-in-discussion"
                style={
                  this.props.location.state.themeBackground === ""
                    ? { backgroundColor: this.props.location.state.themeColor,boxShadow: "none !important" }
                    : {
                        backgroundImage: `url(${this.props.location.state.themeBackground})`,
                        boxShadow: "none !important"
                      }
                }
              />
            </div>

            <div>
              <p className="dis-p">Discussion</p>
            </div>
            <div
            className="chats-div"
            >
              {this.state.comments.length > 0
                ? this.state.comments.map((val, ind) => {
                    return (
                      <div key={ind} className="image-name-p">
                        <div>
                          <img
                            className="img-discussion"
                            src={val.profilePic}
                          />
                        </div>
                        &nbsp;&nbsp;&nbsp;
                        <div>
                          <span className="name-p">{val.name}</span>
                          <p className="name-p">{val.comment}</p>
                        </div>
                      </div>
                    );
                  })
                : null}
            </div>

            {/* <div className="image-name-p">
              <div>
                <img
                  className="img-discussion"
                  src={require("../../assets/dog-pod.jpeg")}
                />
              </div>
              &nbsp;&nbsp;&nbsp;
              <div>
                <span className="name-p">testuser and parent</span>
                <p className="name-p">Hello</p>
              </div>
            </div> */}
            <div className="input-icon-disc">
              <div>
                <input
                  className=""
                  class="form-control form-control input-discuss"
                  type="text"
                  placeholder="write here..."
                  onChange={(e) => this.setState({ text: e.target.value })}
                />
              </div>
              <div onClick={() => this.send()}>
                <SendIcon className="icon-pod-dis" />
              </div>
            </div>
          </div>
          <RightSideNav {...this.props} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state: state,
});
const mapDispatchToProps = (dispatch) => ({
  podcast: bindActionCreators(podcast, dispatch),
  podcastComments: bindActionCreators(podcastComments, dispatch),
  getPodcastComments: bindActionCreators(getPodcastComments, dispatch),
  updatePodcastComments: bindActionCreators(updatePodcastComments, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PodcastDiscussion);
