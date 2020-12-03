import React from "react";
// import logo from './logo.svg';
import "./Message2.css";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import BrokenImageOutlinedIcon from "@material-ui/icons/BrokenImageOutlined";
import CardGiftcardOutlinedIcon from "@material-ui/icons/CardGiftcardOutlined";
import SentimentSatisfiedOutlinedIcon from "@material-ui/icons/SentimentSatisfiedOutlined";
import ShareIcon from "@material-ui/icons/Share";

function App({ ...props }) {
  return (
    <div className="App2">
      <div>
        <div>
          <div className="main2">
            <div className="msg-icon2">
              <h5 className="heading-n">Blockchain.comSupport</h5>
              <InfoOutlinedIcon
                style={{ color: "#2a2c7c" }}
 
              />
            </div>
            <p className="par-n">@AskBlockchain</p>
          </div>
          <hr />

          <hr />
          <div className="all-search-icons">
            <BrokenImageOutlinedIcon
              style={{ margin: "0% 6px 7px", color: "#2a2c7c" }}
            />
            <CardGiftcardOutlinedIcon style={{ color: "#2a2c7c" }} />
            <div class="form-group has-search input-msg">
              <span class="fa fa-search form-control-feedback "></span>
              <input
                type="text"
                class="form-control form-msg"
                placeholder="Search"
              />
            </div>
            <hr />

            <ShareIcon style={{ color: "#2a2c7c" }} />
          </div>
        </div>


        
      </div>

    </div>
  );
}

export default App;
