/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./YourGroup.css";
import Sidenav from "./SideNav";
import Rightsidenav from "./RightSideNav";
// import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteBorderIcon from "@material-ui/icons/Favorite";

import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
// import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import BookmarkIcon from "@material-ui/icons/Bookmark";

function App({ ...props }) {
  return (
    <div className="App">
      {/* <img className="logo" src={require("./assets/logo_big.svg" )} alt="slooth" /> */}
      <div className="main">
        <Sidenav {...props} />
        {/* ******************* CENTER ********************* */}

        <div className="discover-cntr">
          <div className="heading-logo">
            <h4 className="services-discover">Discover Groups</h4>
          </div>

          <div class="p-1 rounded rounded-pill shadow-sm mb-4 search-bar2 search-discover">
            <div class="input-group">
              <div class="input-group-prepend">
                <button
                  id="button-addon2"
                  type="submit"
                  class="btn btn-link text-secondary"
                >
                  <i class="fa2 fa fa-search"></i>
                </button>
              </div>
              <input
                type="search"
                placeholder="search group"
                aria-describedby="button-addon2"
                class="form-control form-control2 "
              />
            </div>
          </div>

          <hr />

          <ul class="nav market-navtab">
            <li>
              <a className="your-group" href="#">
                Your Groups
              </a>
            </li>
            <li class="dropdown">
              <a className="furniture-discover" href="#">
                Discover
              </a>
            </li>

            <li>
              <a
                className="furniture-discover"
                href="#"
                onClick={() => props.history.push("/creategroup")}
              >
                + Create Group
              </a>
            </li>
            <li>
              <a className="furniture-discover" href="#">
                Another
              </a>
            </li>
          </ul>
          <hr />

          <div className="your-group-see-all">
            <p className="furniture-discover">Your Groups</p>
            <p className="your-group">See All</p>
          </div>

          <div class="container hide-scrollbar">
            <div className="story-div">
              <img
                src={require("./assets/dog-discover2.jpeg")}
                alt="Snow"
                className="story-imgs"
              />

              <div class="bottom-left b-l1">Bottom Left</div>
            </div>

            <div className="story-div">
              <img
                src={require("./assets/puppy-disc.jpg")}
                className="story-imgs"
              />

              <div class="bottom-left b-l2">Mprgan</div>
            </div>

            <div className="story-div">
              <img src={require("./assets/aj.jpg")} className="story-imgs" />

              <div class="bottom-left b-l3">Mprgan</div>
            </div>
          </div>

          <div className="no-comments-yet">Recent Posts</div>
          <div className="individual-posts">
            <div className="post-header">
              <div className="profile-name">
                <div className="pet-discover">
                  <img
                    className="pet-pic"
                    src={require("./assets/profile.jpg")}
                  />
                </div>

                <div className="name-puppy">
                  <h5 className="heading-h4-discover">Puppy</h5>
                  <p className="para-3">@puppypuppy</p>
                </div>
              </div>
              <div>
                <p className="discover-dots">...</p>
              </div>
            </div>

            <div className="post-image-relative">
              <div>
                <img
                  src={require("./assets/flower.jpg")}
                  className="flower-img"
                />
              </div>

              <div class="top-right top-right-fixed">
                <div className="icons-all-disc">
                  <FavoriteBorderIcon
                    className="post-icons"
                    style={{ color: "red" }}
                  />
                </div>
                <div className="icons-all-disc">
                  <ChatOutlinedIcon className="post-icons" />
                </div>
                <div className="icons-all-disc">
                  <ShareOutlinedIcon classNamehom="post-icons" />
                </div>
                <div className="icons-all-disc">
                  <BookmarkIcon
                    style={{ color: "yellow" }}
                    className="post-icons"
                  />
                </div>
              </div>
            </div>

            <div className="no-comments-yet">No Comments yet</div>
          </div>
        </div>
        <Rightsidenav {...props} />
      </div>
    </div>
  );
}

export default App;
