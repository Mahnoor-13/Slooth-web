import React, { useState, useEffect } from "react";
// import logo from './logo.svg';
import "./StoriesSmallComponents.css";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";

import FavoriteIcon from "@material-ui/icons/Favorite";
import Stories from "react-insta-stories";
import FacebookEmoji from 'react-facebook-emoji';



function App({ ...props }) {
  const [stories, setStories] = useState([]);
  const [individualStory, setIndividualStory] = useState("");

  // useEffect(() => {

  // if (props.stories2.length > 0) {
  //   let array = [];
  //   props.stories2.stories.map((val) => {
  //     if (val.type === "image") {
  //       array.push(val.url);
  //     } else if (val.type === "video") {
  //       array.push({ url: val.url, type: val.type });
  //     }
  //   });

  //   setStories(array);

  //   console.log("stories", stories);
  // }
  // }, [props.stories2]);

  if (props.stories2 !== undefined && props.stories2 !== null && props.stories2.key !== individualStory) {
    let array = [];
    setIndividualStory(props.stories2.key);
    props.stories2.stories.map((val) => {
      if (val.type === "image") {
        array.push(val.url);
      } else if (val.type === "video") {
        array.push({ url: val.url, type: val.type });
      }
    });
    console.log(array);
    setStories(array);
  } else {
    console.log(props.stories2);
  }

  // if(props.stories2.)
  //   setStories(array);

  return (
    <div className="Story">
      <div>
        <div className="story2-display">
          {/* <img src={require("../../assets/stori-dog.jpg")} className="stori-dog" /> */}

          <div className="stories">
            <Stories
              loop
              defaultInterval={8000}
              stories={stories}
              onStoryEnd={(s, st) => console.log("story ended", s, st)}
              onAllStoriesEnd={(s, st) =>
                console.log("all stories ended", s, st)
              }
              onStoryStart={(s, st) => console.log("story started", s, st)}
            />
          </div>
        </div>

        <div className="story-sound">
          <div className="story-play">
            <img className="story2-dog" src={require("../../assets/jp.jpg")} />
            <p className="name-sto">sdnassfjnasf...1h</p>
            <PlayArrowIcon className="name-sto" />
            <VolumeUpIcon className="name-sto" />
            <MoreHorizIcon className="name-sto" />
          </div>
        </div>
        <div className="all-emojis-input">
          <div class="input-group mb-3 stori-input">
            <input
              type="text"
              class="form-control inputsto"
              placeholder="Reply....."
              id="demo"
              name="email"
            />
            {/* <div class="input-group-append iga">
              <span class="input-group-text inpt-grp">
                <CardGiftcardIcon />
              </span>
            </div> */}
          </div>
          <div className="reaction-emojis-div">
        {/* <FacebookEmoji type="like" size="xs"/> */}
        <FacebookEmoji type="love" size="xs"/>
        <FacebookEmoji type="wow" size="xs"/>
        <FacebookEmoji type="yay" size="xs"/>
        <FacebookEmoji type="angry" size="xs"/>
        <FacebookEmoji type="haha" size="xs"/>
        <FacebookEmoji type="sad" size="xs"/>
    </div>
          {/* <div>
            <ThumbUpAltIcon className="thumbsupemoji like" />
            <FavoriteIcon className="thumbsupemoji heart" />
            <EmojiEmotionsIcon className="thumbsupemoji emoji" />
            <EmojiEmotionsIcon className="thumbsupemoji emoji" />
            <EmojiEmotionsIcon className="thumbsupemoji emoji" />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;

const Story2 = ({ action, isPaused }) => {
  return (
    <div
      style={{ ...contentStyle, background: "Aquamarine", color: "#16161d" }}
    >
      <h1>You get the control of the story.</h1>
      <p>
        Render your custom JSX by passing just a{" "}
        <code style={{ fontStyle: "italic" }}>content</code> property inside
        your story object.
      </p>
      <p>
        You get a <code style={{ fontStyle: "italic" }}>action</code> prop as an
        input to your content function, that can be used to play or pause the
        story.
      </p>
      <h1>{isPaused ? "Paused" : "Playing"}</h1>
      <h4>v2 is out 🎉</h4>
      <p>React Native version coming soon.</p>
    </div>
  );
};

const stories2 = [
  {
    content: (props) => {
      return (
        <div style={{ background: "pink", padding: 20 }}>
          <h1 style={{ marginTop: "100%", marginBottom: 0 }}>🌝</h1>
          <h1 style={{ marginTop: 5 }}>
            We have our good old image and video stories, just the same.
          </h1>
        </div>
      );
    },
    seeMore: ({ close }) => (
      <div
        style={{
          maxWidth: "100%",
          height: "100%",
          padding: 40,
          background: "white",
        }}
      >
        <h2>Just checking the see more feature.</h2>
        <p style={{ textDecoration: "underline" }} onClick={close}>
          Go on, close this popup.
        </p>
      </div>
    ),
    duration: 5000,
  },
  "https://picsum.photos/1080/1920",
  {
    url: "https://storage.googleapis.com/coverr-main/mp4/Footboys.mp4",
    type: "video",
  },
  {
    content: Story2,
  },
];

const contentStyle = {
  background: "salmon",
  width: "100%",
  padding: 20,
  color: "white",
};
