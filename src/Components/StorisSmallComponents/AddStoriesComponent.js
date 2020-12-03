import React, { useState, useEffect } from "react";
// import logo from './logo.svg';
import "./AddStoriesComponent.css";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";

import FavoriteIcon from "@material-ui/icons/Favorite";
import Stories from "react-insta-stories";
import FacebookEmoji from "react-facebook-emoji";
import PhotoLibraryOutlinedIcon from "@material-ui/icons/PhotoLibraryOutlined";
import VideoLibraryOutlinedIcon from "@material-ui/icons/VideoLibraryOutlined";

function App({ ...props }) {
  const [stories, setStories] = useState([]);
  const [individualStory, setIndividualStory] = useState("");

  return (
    <div className="Addstory">
      <div className="both-borders">
        <div className="first-border">
          <div className="full-div">
            <div className="pic">
              <PhotoLibraryOutlinedIcon />
            </div>
            <div>
              <p className="addphoto">Add photo</p>
            </div>
          </div>
        </div>
        <div className="second-border">
        <div className="full-div2">
          <div className="pic2">
            <PhotoLibraryOutlinedIcon />
          </div>
          <div>
            <p className="addphoto">Add Video</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;

const contentStyle = {
  background: "salmon",
  width: "100%",
  padding: 20,
  color: "white",
};
