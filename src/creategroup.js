import React from "react";
import "./creategroup.css";
import Sidenav from "./SideNav"
import Rightsidenav from "./RightSideNav"

function App({...props}) {
  return (
    <div className="App">
      {/* <img className="logo" src={require("./assets/logo_big.svg" )} alt="slooth" /> */}
      <div className="main">
        <Sidenav {...props} />

        {/* ******************* CENTER ********************* */}

        <div className="creategroup-center">
          <div className="create">
            <h4 className="group-heading">Create Group</h4>
          </div>
          <hr/>






                   
          <div className="p-1 rounded rounded-pill shadow-sm mb-4 search-bar-discover-group search-group-create">
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
                placeholder="search group"
                aria-describedby="button-addon2"
                className="form-control form-control2 "
              />
            </div>
          </div>

          

              <hr/>

          <ul className="nav market-navtab-create">
              <li >
                <a className="furniture-create" href="#">Your Groups</a>
              </li>
              <li className="dropdown">
                <a  className="furniture-create" href="#">
                  Discover
                </a>
              </li>
              
              <li>
                <a className="furniture-create-group" href="#" onClick={() => props.history.push("/creategroup")}> + Create Group</a>
              </li>
              <li>
                <a className="furniture-create" href="#">Another</a>
              </li>
            </ul>
            <hr/>









          <div className="foam-div form-group">
          <input type="text" className="group-foam form-control" id="usr" placeholder="Name Your Group"/>
        </div>

        <div className="slooth-dashed-group text-center">
        <button type="button" className="para-alert-group btn">
        <img className="create-camera-photo" src={require("./assets/icon_photo_small.svg")}/>
        UPLOAD PHOTO / TAKE PICTURE
        </button>
      </div>


      <div>
      <p className="members">Members</p>

      </div>
      <hr />

      <div className="add-friends-div">

        <span className="add-friends">+</span> Invite Friends
            {/* <span className="add-friends">+</span> <span className="invite-friends">Invite friends</span> */}
      </div>
      <hr />

      <p className="privacy">Privacy</p>

      <div className="all-images-of-bottom-group">
      <div>
      <img src={require("./assets/icon_earth2.svg")}/>  <span className="public">Public</span>
      </div>

      <div>
      <img src={require("./assets/icon_closed.svg")}/>  <span className="closed">Closed</span>
      </div>

      <div>
      <img src={require("./assets/icon_secret.svg")}/>  <span className="secret">Secret</span>
      </div>
      </div>


      <div style={{ margin: "5% 0%" }}>
      <div className="button-div">
        <button
          // onClick={() => this.post()}
          type="button"
          class="btn btn-outline-primary marketplace-post"
        >
          Create Group
        </button>
      </div>
    </div>

        
        </div>


        <Rightsidenav {...props} />
        
      </div>
    </div>
  );
}

export default App;
