import React, { useState } from "react";
import "./Story.css";
// import StorisSmallComponents from "./StorisSmallComponents";
import AddStoriesComponent from "../StorisSmallComponents/AddStoriesComponent";
import CloseIcon from "@material-ui/icons/Close";
import AddIcon from "@material-ui/icons/Add";
import Stories from "react-insta-stories";

function App({ ...props }) {
  const [selectedStories, setSelectedStories] = useState(null);

  console.log(props);

  return (
    <div className="App">
      {/* <img className="logo" src={require("../../assets/logo_big.svg" )} alt="slooth" /> */}
      <div className="main">
        {/* *******************CENTER****************** */}

        <div className="story-center">
          <div className="stori-div">
            <div className="story-back">
              <CloseIcon />
            </div>
            <div className="story-logo">
              <img
                onClick={() => this.props.history.push("/home")}
                className="logo-stori"
                src={require("../../assets/logo_big.svg")}
                alt="slooth"
              />
            </div>
          </div>
          <hr />

          <div className="stories-set">
            <div>
              <h5>Stories</h5>
            </div>
            <div>
              <a href="#" className="setting">
                Setting
              </a>
            </div>
          </div>

          <p className="stories-set">Your story</p>

          <div className="add-div"   onClick={() => this.props.history.push("/addstory")}>
            <div className="story-add">
              <AddIcon />
            </div>
            <div className="add-logo">
              <div className="addtoyourstory">
                <p>Add to your story</p>
              </div>

              <div className="addtoyourstory">
                <p className="writesome">
                  share a photo or video or write some thing
                </p>
              </div>
            </div>
          </div>

          <p className="stories-set">All story</p>
          <br />

          
        </div>

        <AddStoriesComponent  />
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
