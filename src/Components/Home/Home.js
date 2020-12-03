import React from "react";
import "./Home.css";
import Sidenav from "../../SideNav";
import RightSideNav from "../../RightSideNav";
import * as firebase from "firebase";
import PhotoSizeSelectActualIcon from "@material-ui/icons/PhotoSizeSelectActual";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import PinDropIcon from "@material-ui/icons/PinDrop";
import HomeIcon from "@material-ui/icons/Home";
import FavoriteBorderIcon from "@material-ui/icons/Favorite";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import NewPost from "./NewPost";
import ReactPlayer from "react-player";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { Waypoint } from "react-waypoint";
import HomeVideo from "./HomeVideo";
import HomeRecommendations from "./HomeRecommendations";
import { userStories, getUserStories } from "../../store/actions/authActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Story from "../Story/Story";

const img = [
  "data:image/jpeg;base64,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",
  "data:image/jpeg;base64,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",
  "https://cdn.pixabay.com/photo/2016/11/21/14/53/adult-1845814__340.jpg",
];

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      watched: true,
      checked: true,
      isLiked: false,
      postImage: "",
      isLoading: false,
      imageIndex: 0,
      images: [],
      selected: [],
      modalVisible: false,
      postImageSelected: "",
      posts: [],
      tempPosts: [],
      postsKeys: [],
      like: false,
      bookmark: false,
      joinGroup: false,
      showPosts: false,
      isReportOpen: true,
      iconColor: "",
      iconText: "",
      iconName: "",
      user: "",
      profilePic: "",
      getUserStories: [],

      isModelOpen: false,
      currentUserIndex: 0,
      currentScrollValue: 0,
      // AllStories: AllStories,

      hashtags: "",
      isPaused: true,

      userId: firebase.auth().currentUser
        ? firebase.auth().currentUser.uid
        : "8DvD5iJe5KWhh6vQ6W0MT8JeQnF2",

      limitToLast: 2,
      scrollEnd: false,
      tempArray: [],
      onEndReachedCalledDuringMomentum: true,

      userId: firebase.auth().currentUser
        ? firebase.auth().currentUser.uid
        : "rC38RLj73eT3yBhiia1xK9Efqwh2",

      fullName: "Puppy",
      profilePic: "",
      open: false,
      images: null,
      video: null,
      shouldPlay: false,
      stories: [],
    };
  }

  componentDidMount() {
    // if (!firebase.auth().currentUser) {
    //   this.props.history.pop();
    // }

    this.props.getUserStories();
    this.getPosts();

    firebase
      .database()
      .ref(`users/${this.state.userId}/`)
      .on("value", (val) => {
        // console.log(val);
        // this.setState({
        //   fullName: val.val().fullName ? val.val().fullName : "",
        //   profilePic: val.val().profilePic,
        // });
      });
  }
  // componentDidMount() {
  //   // this.props.getPSosts();
  //   this.getPosts();
  // }

  getPosts = () => {
    let array = [];
    let arrayKeys = [];

    firebase
      .database()
      .ref(`posts/`)
      // .limitToLast(this.state.limitToLast)
      .on("child_added", (val, ind) => {
        console.log(val);

        firebase
          .firestore()
          .collection("UserFriends")
          // .where("myId", "==", this.state.userId)
          // .where("userId", "==", val.val().posterId)?
          // .where('userId', '==', '8DvD5iJe5KWhh6vQ6W0MT8JeQnF2')
          .get()
          .then((doc) => {
            array.push(val.val());
            arrayKeys.push(val.key);
            this.setState({
              posts: array.reverse(),
              postsKeys: arrayKeys.reverse(),
            });
            if (
              this.state.tempPosts.length < 1 ||
              this.state.tempPosts.length < 2
            ) {
              this.setState({
                tempPosts: array.reverse(),
                // postsKeys: arrayKeys.reverse(),
              });
            }
          });
      });

    this.setState({ scrollEnd: false });
  };

  componentWillReceiveProps(nextProps) {
    // console.log(
    //   "nextProps.state.auth.getUserStories",
    //   nextProps.state.auth.getUserStories
    // );
    this.setState({
      stories: nextProps.state.auth.getUserStories,
    });
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false, video: null, images: null });
  };

  fileSelectedHandler = (e) => {
    let array = Array.from(e.target.files);
    if (this.state.images) {
      array.map((val) => URL.createObjectURL(val));
      // console.log(array);
      this.setState({
        images: [...this.state.images, ...array],
      });
    } else {
      // console.log("URL.createObjectURL(val",URL.createObjectURL(val))
      array.map((val) => console.log(URL.createObjectURL(val)));
      this.setState({ images: array.map((val) => URL.createObjectURL(val)) });
    }
  };

  fileSelectedHandler2 = (e) => {
    let array = Array.from(e.target.files);
    if (this.state.video) {
      array.map((val) => URL.createObjectURL(val));
      // console.log(array);
      this.setState({
        video: [...this.state.video, ...array],
      });
    } else {
      array.map((val) => console.log(URL.createObjectURL(val)));
      this.setState({ video: array.map((val) => URL.createObjectURL(val)) });
    }
  };

  refresh = () => {
    this.setState({
      video: null,
      images: null,
    });
  };

  handleEnterViewport = () => {
    console.log("working");
    this.setState({ shouldPlay: true });
  };
  handleExitViewport = () => {
    console.log("-working");

    this.setState({ shouldPlay: false });
  };

  gotoStory = (ind) => {
    this.props.history.push("Story", { stories: this.state.stories, ind: ind });
  };

  render() {
    return (
      <div className="App">
        {/* <img className="logo" src={require("../../assets/logo_big.svg" )} alt="slooth" /> */}
        <div className="main">
          <Sidenav {...this.props} profilePic={this.state.profilePic} />
          {/* ******************* CENTER ********************* */}

          <div className="home-center">
            <div className="home-heading">
              <div className="parent">
                <div className="child">
                  <HomeIcon style={{ color: "#3aa1f2" }} />
                </div>
              </div>
            </div>

            {this.state.stories !== null && this.state.stories.length > 0 ? (
              <Story gotoStory={this.gotoStory} stories={this.state.stories} />
            ) : null}
            <div>
              <div className="sub-post">
                <div class="input-group mb-3" onClick={() => this.handleOpen()}>
                  <div class="input-group-prepend">
                    <img src={img[0]} alt="Snow" class="profile-img" />
                  </div>
                  <input
                    type="text"
                    class="form-control post"
                    placeholder="What's on your mind ?"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>

                <hr />
                <div className="buttons">
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <PhotoSizeSelectActualIcon style={{ color: "#60be63" }} />
                    <div className="photos-feelings-heading">Photos</div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <PinDropIcon style={{ color: "#1977f2" }} />
                    <div className="photos-feelings-heading">Checkin</div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <EmojiEmotionsIcon style={{ color: "#f6ba33" }} />
                    <div className="photos-feelings-heading">
                      Feeling/Activity
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <HomeRecommendations />
            </div>
            {this.state.posts.map((val, ind) => {
              return (
                <div key={ind}>
                  {val.postType === "photos" ? (
                    <div className="sub-post-3">
                      <div className="individual-posts">
                        <div className="post-header">
                          <div className="profile-name">
                            <div className="pet-discover">
                              <img className="pet-pic" src={val.images[0]} />
                            </div>

                            <div className="name-puppy">
                              <h5 className="heading-h4-discover">Puppy</h5>
                              <p className="para-3">Wed 9, 2020</p>
                            </div>
                          </div>
                          <div>
                            <p className="discover-dots">...</p>
                          </div>
                        </div>

                        <div className="no-comments-yet">No Comments yet</div>
                      </div>
                    </div>
                  ) : null}

                  <div className="sub-post-3">
                    <div className="individual-posts">
                      <div className="post-header">
                        <div className="profile-name">
                          <div className="pet-discover">
                            <img className="pet-pic" src={img[0]} />
                          </div>

                          <div className="name-puppy">
                            <h5 className="heading-h4-discover">Puppy</h5>
                            <p className="para-3">Wed 9, 2020</p>
                          </div>
                        </div>
                        <div>
                          <p className="discover-dots">...</p>
                        </div>
                      </div>

                      <div className="post-image-relative">
                        <div class="top-right top-right-fixed-icons">
                          <div className="icons-all-disc">
                            <FavoriteBorderIcon
                              className="post-icons"
                              style={{ color: "red" }}
                            />
                          </div>
                          <div className="icons-all-disc">
                            <ChatOutlinedIcon
                              className="post-icons"
                              style={{ color: "blue" }}
                            />
                          </div>
                          <div className="icons-all-disc">
                            <ShareOutlinedIcon
                              className="post-icons"
                              style={{ color: "green" }}
                            />
                          </div>
                          <div className="icons-all-disc">
                            <BookmarkIcon
                              style={{ color: "yellow" }}
                              className="post-icons"
                            />
                          </div>
                        </div>

                        <div>
                          <HomeVideo />
                          {/* <Waypoint
                      onEnter={()=>this.handleEnterViewport()}
                      onLeave={()=>this.handleExitViewport()}
                    >
                      <ReactPlayer
                        playing={this.state.shouldPlay}
                        {...this.props}
                        url="https://www.youtube.com/watch?v=28xjtYY3V3Q"
                        className="d-block width"
                      />
                    </Waypoint> */}
                        </div>
                      </div>

                      <div className="no-comments-yet">No Comments yet</div>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="home2">
              <div className="down-icons">
                <div className="side-icons2">
                  <img
                    className="user-profile"
                    src={
                      this.props.profilePic !== "" &&
                      this.props.profilePic !== undefined
                        ? this.props.profilePic
                        : require("../../assets/profile.jpg")
                    }
                  ></img>{" "}
                </div>

                <div
                  className="sidenav2 sidenav-group2"
                  onClick={() => this.props.history.push("/discovergroups")}
                >
                  <div className="side-icons2">
                    <i className="fa fa-user-o user2" aria-hidden="true"></i>
                  </div>
                </div>

                <div
                  className="sidenav2 sidenav-alert2"
                  onClick={() => this.props.history.push("/sloothAlert4")}
                >
                  <div className="side-icons2">
                    <i className="fa fa-bell-o user2" aria-hidden="true"></i>
                  </div>
                </div>

                <div
                  className="sidenav2 sidenav-missing2"
                  onClick={() => this.props.history.push("/missingpets")}
                >
                  <div className="side-icons2">
                    <i className="fa fa-comment-o user2" aria-hidden="true"></i>
                  </div>
                </div>
                <div
                  className="sidenav2 sidenav-missing2"
                  onClick={() => this.props.history.push("/missingpets")}
                ></div>
              </div>

              {
                //   <div className="map">
                //   <Map google={this.props.google} zoom={14} className="mapu">
                //   <Marker
                //     onClick={this.onMarkerClick}
                //     name={"Current location"}
                //   />
                //   <InfoWindow onClose={this.onInfoWindowClose}>
                //   </InfoWindow>
                // </Map>
                // </div>
              }
              {/* <div className="no-comments-yet">No Comments yet</div> */}
            </div>
          </div>

          <NewPost
            handleOpen={this.handleOpen}
            handleClose={this.handleClose}
            open={this.state.open}
            fileSelectedHandler={this.fileSelectedHandler}
            fileSelectedHandler2={this.fileSelectedHandler2}
            images={this.state.images}
            video={this.state.video}
            refresh={this.refresh}
          />

          {/* right hand side */}
          <RightSideNav {...this.props} />
        </div>
      </div>
    );
  }
}

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyAHj8z9KrqWFPNt6YfEFKTtfVw6f2v_UHo",
// })(App);

const mapStateToProps = (state) => ({
  state: state,
});
const mapDispatchToProps = (dispatch) => ({
  userStories: bindActionCreators(userStories, dispatch),
  getUserStories: bindActionCreators(getUserStories, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
