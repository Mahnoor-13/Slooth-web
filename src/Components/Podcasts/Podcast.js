import React from "react";
import "./Podcast.css";
import Sidenav from "../../SideNav";
import RightSideNav from "../../RightSideNav";
import FavoriteOutlinedIcon from "@material-ui/icons/FavoriteOutlined";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ChatBubbleOutlineRoundedIcon from "@material-ui/icons/ChatBubbleOutlineRounded";
import PlayArrowOutlinedIcon from "@material-ui/icons/PlayArrowOutlined";

import PodcastThemeToolTip from "./PodcastThemeTooltip";
import AddIcon from "@material-ui/icons/Add";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

import { connect } from "react-redux";
import {
  changeThemeColor,
  getPodcast,
  updatePodcast,
  searchPodcast,
} from "../../store/actions/authActions";
import { bindActionCreators } from "redux";
import ActivePodcast from "./ActivePodcast";
import * as firebase from "firebase";
import AudioPlayer from "react-h5-audio-player";
import SearchIcon from "@material-ui/icons/Search";

class Podcasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: "cafelist",
      type: "cart",
      themeColor: "",
      themeBackground: "",
      index: 0,
      isPlaying: false,
      podcastList: [],
      currentPodcast: "",
      searchPodcast: "",
      selectedPodcast: null,
      userId: firebase.auth().currentUser
        ? firebase.auth().currentUser.uid
        : "rC38RLj73eT3yBhiia1xK9Efqwh2",
    };
    this.intervalId = null;
  }

  componentDidMount() {
    this.props.changeThemeColor("#333");
    this.props.getPodcast();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.state.auth.themeBackground === "") {
      this.setState({
        themeColor: nextProps.state.auth.themeColor,
      });
    } else {
      this.setState({
        themeBackground: nextProps.state.auth.themeBackground,
      });
    }
    if (nextProps.state.auth.getPodcast) {
      console.log(nextProps.state.auth.getPodcast);
      this.setState({ podcastList: nextProps.state.auth.getPodcast });
    }
  }

  likePodcast = (val) => {
    this.props.updatePodcast(
      val.likesBy,
      val.totalLikes,
      val.key,
      this.state.userId
    );
    this.props.getPodcast();
  };

  isPlaying = (currentPodcast, selectedPodcast) => {
    this.setState({
      selectedPodcast: selectedPodcast,
      isPlaying: true,
      currentPodcast: currentPodcast,
    });
  };

  close = () => {
    this.setState({ isPlaying: false });
  };

  searchPodcast = () => {
    console.log("ad", this.state.searchPodcast)
    this.props.searchPodcast(this.state.searchPodcast);
  };

  render() {
    return (
      <div className="App">
        {/* <img className="logo" src={require("../../assets/logo_big.svg" )} alt="slooth" /> */}
        <div className="main">
          <Sidenav {...this.props} />
          {/* ******************* CENTER ********************* */}

          <div className="podcastCenter">
            <div className="podcast-heading">
              <div>
                <KeyboardBackspaceIcon
                  style={{ width: "50px" }}
                  className="podcasts-top-icons"
                />
              </div>
              <h4 className="podcast">Podcast</h4>
              <div className="setting-plus-icon">
                <div
                  onClick={() =>
                    this.props.history.push("RecordPodcast", {
                      themeColor: this.state.themeColor,
                      themeBackground: this.state.themeBackground,
                    })
                  }
                >
                  <AddIcon className="podcasts-top-icons" />
                </div>
                <div>
                  <PodcastThemeToolTip />
                </div>
              </div>
            </div>
            <hr />
            <div
              className="podcast-background-color"
              style={
                this.state.themeBackground === ""
                  ? { backgroundColor: this.state.themeColor }
                  : { backgroundImage: `url(${this.state.themeBackground})` }
              }
            >
              <form className="search-podcast">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search"
                    onChange={(e) =>
                      this.setState({ searchPodcast: e.target.value })
                    }
                  />
                  <div class="input-group-btn srch-btn" onClick={()=>this.searchPodcast()}>
                    <SearchIcon className="srch-icon" />
                  </div>
                </div>
              </form>
              <div className="podcast-btns-div">
                <div class="input-group-btn srch-btn podcast-btns">
                  New Podcasts
                </div>

                <div class="input-group-btn srch-btn podcast-btns">
                  Top podcasts
                </div>
                <div class="input-group-btn srch-btn podcast-btns">All</div>
              </div>
              {this.state.podcastList.length > 0 ? (
                <div class="input-group-btn srch-btn podcast-btns showing-heading">
                  Total Podcast Results: "{this.state.podcastList.length}"
                  podcasts
                </div>
              ) : null}
              {this.state.podcastList.length > 0
                ? this.state.podcastList.map((val, ind) => {
                    return (
                      <div key={ind} className="podcast-borders">
                        <div className="all-border-pod">
                          <div className="pup-para-podcast">
                            <div>
                              <img
                                className="pet3-podcast"
                                src={val.profilePic}
                              />
                            </div>

                            <div className="anc-y-podcast">
                              <span className="small-podcastm">{val.name}</span>
                              <p className="pup-podcast">
                                {new Date(val.date).toDateString()}
                              </p>
                            </div>
                          </div>
                          <hr />
                          <div>
                            <p>Description</p>
                            <p>{val.description}</p>
                          </div>
                          <div className="podcast-icons">
                            <div className="like-comment-div">
                              <div className="like-div">
                                {val.likesBy[this.state.userId] ? (
                                  <div className="podcasts-list-icon">
                                    <FavoriteOutlinedIcon
                                      style={{ color: "red" }}
                                    />
                                  </div>
                                ) : (
                                  <FavoriteBorderIcon
                                    onClick={() => this.likePodcast(val)}
                                    className="podcasts-list-icon"
                                    style={{ color: "black" }}
                                  />
                                )}
                                <span className="play">{val.totalLikes}</span>
                              </div>
                              &nbsp; &nbsp; &nbsp;
                              <div className="like-div">
                                <ChatBubbleOutlineRoundedIcon
                                  onClick={() =>
                                    this.props.history.push(
                                      "PodcastDiscussion",
                                      {
                                        podcast: val,
                                        themeColor: this.state.themeColor,
                                        themeBackground: this.state
                                          .themeBackground,
                                      }
                                    )
                                  }
                                  className="podcasts-list-icon"
                                  style={{
                                    color:
                                      val.totalComments === 0
                                        ? "black"
                                        : "green",
                                    cursor: "pointer",
                                  }}
                                />
                                <span className="play">
                                  {val.totalComments}
                                </span>
                              </div>
                            </div>
                            <div
                              className="podcasts-list-icon"
                              onClick={() =>
                                this.isPlaying(val.podcastUrl, val)
                              }
                            >
                              <PlayArrowOutlinedIcon />
                              <span className="play">Play</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                : null}
              {/* <div className="podcast-borders">
                <div className="all-border-pod">
                  <div className="pup-para-podcast">
                    <div>
                      <img
                        className="pet3-podcast"
                        src={require("../../assets/bird.jpeg")}
                      />
                    </div>

                    <div className="anc-y-podcast">
                      <span className="small-podcastm">
                        testUser pet parent
                      </span>
                      <p className="pup-podcast">Tue Apr 23 2020</p>
                    </div>
                  </div>
                  <hr />
                  <div>
                    <p>Description</p>
                    <p>Cat - Topics</p>
                  </div>
                  <div className="podcast-icons">
                    <div>
                      <FavoriteOutlinedIcon style={{ color: "red" }} />
                      <span className="play">1</span> &nbsp; &nbsp; &nbsp;
                      <ChatBubbleOutlineRoundedIcon
                        style={{ color: "green" }}
                        className="chat-podcast-icons"
                        onClick={() =>
                          this.props.history.push("PodcastDiscussion", {
                            themeColor: this.state.themeColor,
                            themeBackground: this.state.themeBackground,
                          })
                        }
                      />
                      <span className="play">3</span>
                    </div>
                    <div onClick={() => this.isPlaying()}>
                      <PlayArrowOutlinedIcon />
                      <span className="play">Play</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="podcast-borders">
                <div className="all-border-pod">
                  <div className="pup-para-podcast">
                    <div>
                      <img
                        className="pet3-podcast"
                        src={require("../../assets/dog-pod2.jpg")}
                      />
                    </div>

                    <div className="anc-y-podcast">
                      <span className="small-podcastm">
                        testUser pet parent
                      </span>
                      <p className="pup-podcast">Tue Apr 23 2020</p>
                    </div>
                  </div>
                  <hr />
                  <div>
                    <p>Description</p>
                    <p>Cat - Topics</p>
                  </div>
                  <div className="podcast-icons">
                    <div>
                      <FavoriteOutlinedIcon style={{ color: "red" }} />
                      <span className="play">1</span> &nbsp; &nbsp; &nbsp;
                      <ChatBubbleOutlineRoundedIcon
                        style={{ color: "green" }}
                      />
                      <span className="play">3</span>
                    </div>
                    <div>
                      <PlayArrowOutlinedIcon />
                      <span className="play">Play</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="podcast-borders">
                <div className="all-border-pod">
                  <div className="pup-para-podcast">
                    <div>
                      <img
                        className="pet3-podcast"
                        src={require("../../assets/dog-pod.jpeg")}
                      />
                    </div>

                    <div className="anc-y-podcast">
                      <span className="small-podcastm">
                        testUser pet parent
                      </span>
                      <p className="pup-podcast">Tue Apr 23 2020</p>
                    </div>
                  </div>
                  <hr />
                  <div>
                    <p>Description</p>
                    <p>Cat - Topics</p>
                  </div>
                  <div className="podcast-icons">
                    <div>
                      <FavoriteOutlinedIcon style={{ color: "red" }} />
                      <span className="play">1</span> &nbsp; &nbsp; &nbsp;
                      <ChatBubbleOutlineRoundedIcon
                        style={{ color: "green" }}
                      />
                      <span className="play">3</span>
                    </div>
                    <div>
                      <PlayArrowOutlinedIcon />
                      <span className="play">Play</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="podcast-borders">
                <div className="all-border-pod">
                  <div className="pup-para-podcast">
                    <div>
                      <img
                        className="pet3-podcast"
                        src={require("../../assets/kitten.jpg")}
                      />
                    </div>

                    <div className="anc-y-podcast">
                      <span className="small-podcastm">
                        testUser pet parent
                      </span>
                      <p className="pup-podcast">Tue Apr 23 2020</p>
                    </div>
                  </div>
                  <hr />
                  <div>
                    <p>Description</p>
                    <p>Cat - Topics</p>
                  </div>
                  <div className="podcast-icons">
                    <div>
                      <FavoriteOutlinedIcon style={{ color: "red" }} />
                      <span className="play">1</span> &nbsp; &nbsp; &nbsp;
                      <ChatBubbleOutlineRoundedIcon
                        style={{ color: "green" }}
                      />
                      <span className="play">3</span>
                    </div>
                    <div>
                      <PlayArrowOutlinedIcon />
                      <span className="play">Play</span>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
            {this.state.isPlaying ? (
              <div
                className="fixed-div-podcasts"
                style={
                  this.state.themeBackground === ""
                    ? { backgroundColor: this.state.themeColor }
                    : { backgroundImage: `url(${this.state.themeBackground})` }
                }
              >
                <ActivePodcast
                  close={this.close}
                  selectedPodcast={this.state.selectedPodcast}
                />
                <div className="podcast-list-play">
                  <AudioPlayer
                    src={this.state.currentPodcast}
                    onPlay={(e) => console.log("onPlay")}
                    customVolumeControls={[]}
                    customAdditionalControls={[]}
                    showJumpControls={false}
                    className="audio"
                    style={
                      this.state.themeBackground === ""
                        ? { backgroundColor: this.state.themeColor }
                        : {
                            backgroundImage: `url(${this.state.themeBackground})`,
                          }
                    }
                  />
                </div>
              </div>
            ) : null}
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
  changeThemeColor: bindActionCreators(changeThemeColor, dispatch),
  getPodcast: bindActionCreators(getPodcast, dispatch),
  updatePodcast: bindActionCreators(updatePodcast, dispatch),
  searchPodcast: bindActionCreators(searchPodcast, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Podcasts);
