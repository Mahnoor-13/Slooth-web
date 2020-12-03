import React from "react";
import "./Message2.css";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import BrokenImageOutlinedIcon from "@material-ui/icons/BrokenImageOutlined";
import SendIcon from "@material-ui/icons/Send";
import MicIcon from "@material-ui/icons/Mic";
import { ReactMic } from "react-mic";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chats: [],
      input: "",
      record: false,
      timer: 0,
      image: false,
      show: false,
    };
    this.messagesEnd = null;
    this.clear = null;
  }

  startRecording = () => {
    this.setState({ record: true });
    this.clear = setInterval(() => {
      this.setState({ timer: this.state.timer + 1 });
    }, 1000);
  };

  stopRecording = () => {
    this.setState({ record: false, show: true, timer: 0 });

    clearInterval(this.clear);
  };

  onData(recordedBlob) {
    console.log("chunk of real-time data is: ", recordedBlob);
  }

  onStop(recordedBlob) {
    console.log("recordedBlob is: ", recordedBlob);
  }

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  };

  send = (text) => {
    if (text !== "") {
      this.setState({
        chats: [...this.state.chats, { text: text, dateTime: new Date() }],
      });
    }
  };

  fileSelectedHandler = (e) => {
    let array = Array.from(e.target.files);
    console.log("----", array);
    setTimeout(() => {
      this.setState({ image: true });
    }, 3000);
    // if (this.state.images) {
    //   array.map((val) => URL.createObjectURL(val));
    //   this.setState({
    //     images: [...this.state.images, ...array],
    //   });
    // } else {
    //   this.setState({ images: array.map((val) => URL.createObjectURL(val)) });
    // }
  };

  render() {
    return (
      <div className="App2">
        {this.props.activeChatValue ? (
          <div>
            <div>
              <div className="main2">
                <div className="msg-icon2">
                  <div className="under-msg-icon2">
                    {this.props.activeChatValue.chatType === "group" ? (
                      <div className="group-chat-images-div set-margin">
                        <img
                          className="msg-pet group-chat-images-message2"
                          src={
                            this.props.activeChatValue.profilePic.split(",")[0]
                          }
                        />
                        <img
                          className="msg-pet"
                          src={
                            this.props.activeChatValue.profilePic.split(",")[1]
                          }
                        />
                      </div>
                    ) : (
                      <img
                        className="msg-pet"
                        src={this.props.activeChatValue.profilePic2}
                      />
                    )}
                    <div className="above-heading-n">
                      <h5 className="heading-n">
                        {this.props.activeChatValue.chatName}
                      </h5>
                      <p className="par-n">
                        {this.props.activeChatValue.chatType === "group"
                          ? "you and " +
                            this.props.activeChatValue.profilePic.split(",")
                              .length +
                            " more"
                          : "you and 1 more"}
                      </p>
                    </div>
                  </div>
                  <InfoOutlinedIcon style={{ color: "#2a2c7c" }} />
                </div>
                <p className="par-n"></p>
              </div>
              <hr />

              <hr />
              <div
                className="chats"
                ref={(el) => {
                  this.messagesEnd = el;
                }}
              >
                <div>
                  <div className="sender-div">
                    <div>
                      <span className="sender-text">Hello</span>
                    </div>
                    <span className="sender-date">19:00</span>
                  </div>

                  <div className="receiver-div">
                    <div>
                      <span className="receiver-text">Test</span>
                    </div>
                    <span className="receiver-date">19:00</span>
                  </div>

                  <div className="receiver-div">
                    <div>
                      <span className="receiver-text">Text Messags ......</span>
                    </div>
                    <span className="receiver-date">19:00</span>
                  </div>
                  <div
                    className={
                      this.state.show ? "audio-container" : "hide-audio-player"
                    }
                  >
                    <AudioPlayer
                      src="https://www.computerhope.com/jargon/m/example.mp3"
                      onPlay={(e) => console.log("onPlay")}
                      customVolumeControls={[]}
                      customAdditionalControls={[]}
                      showJumpControls={false}
                    />
                  </div>
                  {this.state.image ? (
                    <div className="chat-image-div">
                      <div className="chat-image-subdiv">
                        <img
                          className="chat-image"
                          src="https://www.w3schools.com/w3css/img_lights.jpg"
                        />
                        <span className="sender-date">03:30</span>
                      </div>
                    </div>
                  ) : null}
                  {this.state.chats.length > 0
                    ? this.state.chats.map((val, ind) => {
                        return (
                          <div key={ind}>
                            {/* {val. */}
                            <div className="sender-div">
                              <div>
                                <span className="sender-text">{val.text}</span>
                              </div>
                              <span className="sender-date">
                                {val.dateTime.getDate() +
                                  "/" +
                                  (val.dateTime.getMonth() + 1) +
                                  "/" +
                                  val.dateTime.getFullYear() +
                                  " " +
                                  val.dateTime.getHours() +
                                  ":" +
                                  val.dateTime.getMinutes()}
                              </span>
                            </div>
                          </div>
                        );
                      })
                    : null}
                </div>
              </div>

              {/* <div>
                <div className="all-search-icons text-bar">
                  <BrokenImageOutlinedIcon
                    style={{ margin: "0% 6px 7px", color: "#2a2c7c" }}
                  />
                  <MicIcon style={{ color: "#2a2c7c" }} />
                  <div class="form-group has-search input-msg">
                    <span class="fa fa-search form-control-feedback "></span>
                    <input
                      onKeyPress={(e) => this.send(e.target.value)}
                      // onChange={(e)=>{this.setState({input:e.target.value})}}
                      type="text"
                      class="form-control form-msg"
                      placeholder="Type here"
                    />
                  </div>
                  <hr />
                  <div onClick={(e) => this.send()}>
                    <SendIcon style={{ color: "#2a2c7c" }} />
                  </div>
                </div>
              </div> */}

              <div className="abs">
                <div className="all-search-icons">
                  <div>
                    <label for="file-input">
                      <BrokenImageOutlinedIcon
                        style={{ margin: "0% 6px 7px", color: "#2a2c7c" }}
                      />
                    </label>

                    <div style={{ display: "none" }}>
                      <ReactMic
                        record={this.state.record}
                        className="sound-wave"
                        onStop={this.onStop}
                        onData={this.onData}
                        strokeColor="#000000"
                        backgroundColor="#FF4081"
                      />
                      {/* <button onClick={this.startRecording} type="button">Start</button>
        <button onClick={this.stopRecording} type="button">Stop</button> */}
                    </div>

                    <input
                      id="file-input"
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={this.fileSelectedHandler}
                      style={{ display: "none" }}
                      // onMouseOver={() => this.setState({ whiteCamera: true })}
                      // onBlur={()=>this.setState({whiteCamera: false})}
                    />
                  </div>
                  <div
                    onClick={
                      this.state.record
                        ? this.stopRecording
                        : this.startRecording
                    }
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <div className={this.state.record ? "recording" : ""}>
                        <MicIcon
                          style={
                            this.state.record
                              ? { color: "white" }
                              : { color: "#2a2c7c" }
                          }
                        />
                      </div>
                      <p className="stop">stop</p>
                    </div>
                  </div>
                  {!this.state.record ? (
                    <div class="form-group has-search input-msg">
                      <span class="fa fa-search form-control-feedback "></span>
                      <input
                        type="text"
                        class="form-control form-msg"
                        placeholder="Type here"
                      />
                    </div>
                  ) : (
                    <div
                      class="form-group has-search input-msg"
                      style={{ textAlign: "center" }}
                    >
                      <ReactMic
                        record={true}
                        className="sound-wave"
                        onStop={this.onStop}
                        onData={this.onData}
                        strokeColor="#000000"
                        backgroundColor="white"
                        // style={{ width: "20%" }}
                      />
                    </div>
                  )}
                  <hr />
                  <div>
                    {this.state.record ? (
                      <p>{this.state.timer}</p>
                    ) : (
                      <SendIcon style={{ color: "#2a2c7c" }} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div>
              <div className="main2">
                <div className="msg-icon2">
                  <h5 className="heading-n">Blockchain.comSupport</h5>
                  <InfoOutlinedIcon style={{ color: "#2a2c7c" }} />
                </div>
                <p className="par-n">@AskBlockchain</p>
              </div>
              <hr />

              <hr />

              <div style={{ width: "20%" }}></div>
              <div>
                <div className="all-search-icons">
                  <BrokenImageOutlinedIcon
                    style={{ margin: "0% 6px 7px", color: "#2a2c7c" }}
                  />
                  <div
                    onClick={
                      this.state.record
                        ? () => this.stopRecording()
                        : () => this.startRecording()
                    }
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <div className={this.state.record ? "recording" : ""}>
                        <MicIcon
                          style={
                            this.state.record
                              ? { color: "white" }
                              : { color: "#2a2c7c" }
                          }
                        />
                      </div>
                      <p className="stop">stop</p>
                    </div>
                  </div>
                  {!this.state.record ? (
                    <div class="form-group has-search input-msg">
                      <span class="fa fa-search form-control-feedback "></span>
                      <input
                        type="text"
                        class="form-control form-msg"
                        placeholder="Type here"
                      />
                    </div>
                  ) : (
                    <div
                      class="form-group has-search input-msg"
                      style={{ textAlign: "center" }}
                    >
                      <ReactMic
                        record={this.state.record}
                        className="sound-wave"
                        onStop={this.onStop}
                        onData={this.onData}
                        strokeColor="#000000"
                        backgroundColor="white"
                        // style={{ width: "20%" }}
                      />
                    </div>
                  )}
                  <hr />
                  <div>
                    {this.state.record ? (
                      <p>{this.state.timer}</p>
                    ) : (
                      <SendIcon style={{ color: "#2a2c7c" }} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
