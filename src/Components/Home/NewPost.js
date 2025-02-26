import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import "./NewPost.css";
import SentimentSatisfiedOutlinedIcon from "@material-ui/icons/SentimentSatisfiedOutlined";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ReactPlayer from "react-player";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import GroupIcon from "@material-ui/icons/Group";
import KeyboardBackspaceOutlinedIcon from "@material-ui/icons/KeyboardBackspaceOutlined";
import VideocamIcon from "@material-ui/icons/Videocam";
import Loader from "react-loader-spinner";
import Emoji from "../Emoji/Emoji";
import HomeBackground from "../HomeBackground/HomeBackground";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "37%",
  },
}));

export default function TransitionsModal({ ...props }) {
  const classes = useStyles();
  const [isLoading, setIsLoading] = React.useState(false);
  const [secondModal, setSecondModal] = React.useState(false);
  const [emoji, showEmoji] = React.useState(false);
  const [selectedEmoji, setSelectedEmoji] = React.useState("");
  const [showBackground, setShowBackground] = React.useState(false);
  const [backgroundPost, setBackgroundPost] = React.useState(true);
  const [selected, setSelected] = React.useState("");
  const close = () => {
    showEmoji(false);
  };

  const selectedEmojiFunc = (em) => {
    setSelectedEmoji(em);
    showEmoji(false);
    console.log("==", em);
  };
  const selectedFunc = (key) => {
    setSelected(key);
  };
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.open}
        onClose={() => props.handleClose()}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          {!secondModal ? (
            <div className={classes.paper}>
              <h2
                id="transition-modal-title"
                className="createpost"
                style={{ fontSize: "1.6rem" }}
              >
                Create Post
              </h2>
              <hr />
              <div className="pic-drop">
                <div>
                  <img
                    className="post-pet"
                    src={require("../../assets/bird2.jpeg")}
                  />
                </div>
                <div className="name-drop">
                  <div className="name-emoji">
                    <p>Mza Abd</p>
                    {selectedEmoji !== "" ? (
                      <div><span className="isfeeling">is feeling</span> {selectedEmoji}</div>
                    ) : null}
                  </div>
                  <div class="dropdown">
                    <button
                      type="button"
                      class="btn btn-primary dropdown-toggle btnNew"
                      onClick={() => setSecondModal(true)}
                    >
                      <GroupIcon style={{ fontSize: "0.7rem" }} />
                      friends to friends
                    </button>
                  </div>
                </div>
              </div>

              {backgroundPost ? (
                <div>
                  <div class="form-group">
                    <textarea
                      placeholder="Whats On Your Mind, MZA?"
                      class="form-control input-post"
                      rows="5"
                      id="comment"
                      style={{ fontSize: "16px" }}
                    ></textarea>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    {props.images
                      ? props.images.map((val, ind) => {
                          return (
                            <div key={ind} style={{ margin: "2%" }}>
                              <img
                                style={{ width: "100px", height: "100px" }}
                                src={val}
                              />
                            </div>
                          );
                        })
                      : null}
                  </div>
                  {props.video
                    ? props.video.map((val, ind) => {
                        return (
                          <div className="react-player-video">
                            <ReactPlayer
                              url="https://www.youtube.com/watch?v=28xjtYY3V3Q"
                              className="react-player-video2"
                            />
                          </div>
                        );
                      })
                    : null}
                </div>
              ) : (
                <div
                  className="background-div"
                  style={{
                    backgroundImage: `url(${selected})`,
                  }}
                >
                  <textarea
                    placeholder="Whats On Your Mind, MZA?"
                    class="background-div-text"
                    rows="5"
                    id="comment"
                  ></textarea>
                </div>
              )}
              <div className="emoji-color">
                {console.log(emoji)}
                {emoji ? (
                  <Emoji close={close} selectedEmoji={selectedEmojiFunc} />
                ) : null}
                <div onClick={() => setBackgroundPost(!backgroundPost)}>
                  <img
                    className="color"
                    src={require("../../assets/color.jpg")}
                  />
                </div>
                <div onClick={() => showEmoji(true)}>
                  <SentimentSatisfiedOutlinedIcon style={{ color: "gray" }} />
                </div>
              </div>

              {!backgroundPost?
              <div>
                <HomeBackground selectedFunc={selectedFunc} />
              </div>
:null}
              <div className="icons-addpost">
                <div className="icons-flex">
                  <p>Add to Your Post</p>
                </div>
                <div className="icons-flex">
                  <div>
                    <label class="btn">
                      <PhotoLibraryIcon
                        style={{ color: "lightgreen" }}
                        className="photoLibrary"
                      />
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={props.fileSelectedHandler}
                        style={{ display: "none" }}
                      />
                    </label>
                  </div>

                  <div>
                    <label class="btn">
                      <VideocamIcon
                        style={{ color: "gray" }}
                        className="photoLibrary"
                      />
                      <input
                        type="file"
                        accept="video/*"
                        multiple
                        onChange={props.fileSelectedHandler2}
                        style={{ display: "none" }}
                      />
                    </label>
                  </div>

                  <div>
                    <PersonAddIcon
                      style={{ color: "blue" }}
                      className="photoLibrary"
                    />
                  </div>
                  <div>
                    <LocationOnIcon
                      style={{ color: "red" }}
                      className="photoLibrary"
                    />
                  </div>
                  {
                    //   <div>
                    //   <EmojiEmotionsIcon
                    //     style={{ color: "yellow" }}
                    //     className="photoLibrary"
                    //   />
                    // </div>
                  }
                  <div>
                    <MoreHorizIcon
                      style={{ color: "gray" }}
                      className="photoLibrary"
                    />
                  </div>
                </div>
              </div>

              <div
                onClick={() => {
                  setIsLoading(true);
                  setTimeout(() => {
                    setIsLoading(false);
                    props.refresh();
                    props.handleClose();
                  }, 4000);
                }}
              >
                {!isLoading ? (
                  <button type="button" class="btn btn-primary post-button">
                    Post
                  </button>
                ) : (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                    }}
                  >
                    <Loader
                      type="Circles"
                      color="#00BFFF"
                      height={20}
                      width={20}
                    />
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className={classes.paper}>
              <div className="back-p" onClick={() => setSecondModal(false)}>
                <div className="back-icon">
                  <KeyboardBackspaceOutlinedIcon />
                </div>
                <div className="select-privacydiv">
                  <h2 id="transition-modal-title" className="selectprivacy">
                    Select Privacy
                  </h2>
                </div>
              </div>
              <hr />
              <div>
                <h6>Who can see your post?</h6>
                <p>
                  Your post will appear in News Feed, on your profile and in
                  search results
                </p>
              </div>
              friends
              <div className="all-privacy-icon-1">
                <div className="group-icon-privacy">
                  <GroupIcon />
                </div>
                <div className="para-friends">
                  <p>Friends of Friends</p>
                  <p>Your Friends on Facebook</p>
                </div>
                <div className="radio">
                  <label class="radio-inline">
                    <input type="radio" name="optradio" checked />
                  </label>
                </div>
              </div>
              <div className="all-privacy-icon-1">
                <div className="group-icon-privacy-expcep">
                  <GroupIcon />
                </div>
                <div className="para-friends">
                  <p>Friends expcep...</p>
                  <p>Don't show some friends</p>
                </div>
                <div className="radio">
                  <label class="radio-inline">
                    <input type="radio" name="optradio" checked />
                  </label>
                </div>
              </div>
              <div className="all-privacy-icon-1">
                <div className="group-icon-privacy">
                  <GroupIcon />
                </div>
                <div className="para-friends-readonly">
                  <p>Only me</p>
                  <p>only me</p>
                </div>
                <div className="radio">
                  <label class="radio-inline">
                    <input type="radio" name="optradio" checked />
                  </label>
                </div>
              </div>
              <div className="all-privacy-icon-1">
                <div className="group-icon-privacy">
                  <GroupIcon />
                </div>
                <div className="para-friends-specific">
                  <p>Specific friends</p>
                  <p> Friends of friends</p>
                </div>
                <div className="radio">
                  <label class="radio-inline">
                    <input type="radio" name="optradio" checked />
                  </label>
                </div>
              </div>
            </div>
          )}
        </Fade>
      </Modal>
    </div>
  );
}
