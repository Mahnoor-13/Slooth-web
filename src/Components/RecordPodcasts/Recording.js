import React from "react";
import "./RecordPodcast.css";
import Sidenav from "../../SideNav";
import RightSideNav from "../../RightSideNav";
import MicNoneOutlinedIcon from "@material-ui/icons/MicNoneOutlined";
import Button from "@material-ui/core/Button";
import UseAnimations from "react-useanimations";
import AudioPlayer from "react-h5-audio-player";
import "rc-slider/assets/index.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: "cafelist",
      type: "cart",
      isRecording: false,
      record: false,
      recorded:false,
      time: {},
      seconds: 5,
    };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  secondsToTime(secs) {
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      h: hours,
      m: minutes,
      s: seconds,
    };
    return obj;
  }

  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    console.log(timeLeftVar);
    this.setState({ time: timeLeftVar });
  }

  startTimer() {
    this.setState({ isRecording: true });
    if (this.timer == 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds + 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });

    // Check if we're at zero.
    if (seconds == 0) {
      clearInterval(this.timer);
    }
  }

  onData(recordedBlob) {
    console.log("chunk of real-time data is: ", recordedBlob);
  }

  onStop(recordedBlob) {
    console.log("recordedBlob is: ", recordedBlob);
  }

  render() {
    console.log(this.state.time);
    return (
      <div className="App recording-component">
        {/* <img className="logo" src={require("./assets/logo_big.svg" )} alt="slooth" /> */}
        <div className="main">
          <Sidenav {...this.props} />
          {/* ******************* CENTER ********************* */}

          <div
            className="recordCenter"
            style={
              this.props.location.state.themeBackground === ""
                ? { backgroundColor: this.props.location.state.themeColor }
                : {
                    backgroundImage: `url(${this.props.location.state.themeBackground})`,
                  }
            }
          >
            <div className="image-record">
              <div>
                <img
                  className="img-record"
                  src={require("../../assets/dog-pod.jpeg")}
                />
              </div>
              &nbsp;&nbsp;&nbsp;
              <div className="name-record-pod">
                <span className="name-record">User Name</span>
              </div>
            </div>
            <div className="record-heading">
              <h4 className="record">Record Podcast</h4>
            </div>

            <div className="pup-para-record">
              <div>
                <div className="mic-icon">
                  <div className="record-br">
                    <MicNoneOutlinedIcon className="pet3-record" />
                  </div>
                </div>
              </div>
            </div>
            {!this.state.isRecording ? (
              <div className="record-button">
                                  {this.state.recorded?

                <div>
                    <div className="play-podcast">Play Podcast</div>
                  <div className="audioplayer-div">
                    <AudioPlayer
                      src="https://www.computerhope.com/jargon/m/example.mp3"
                      onPlay={(e) => console.log("onPlay")}
                      customVolumeControls={[]}
                      customAdditionalControls={[]}
                      showJumpControls={false}
                    />
                  </div>

                  <div className="input-div">
                    <div className="addpodcast-heading">Add podcast description</div>
                    <input
                      className="form-control form-control input-record"
                      type="text"
                      placeholder="write here..."
                      onChange={(e) => this.setState({ text: e.target.value })}
                    />
                  </div>
                </div>
                :null}
                {this.state.recorded?
                <div className="after-recorded">
                    <Button
                  onClick={()=>this.setState({recorded:false})}
                  variant="outlined"
                  color="secondary"
                >
                  Reset Podcast
                </Button>
                <Button
                  onClick={this.startTimer}
                  variant="contained"
                  color="secondary"
                >
                  Upload Podcast
                </Button>
                    </div>:
                <Button
                  onClick={this.startTimer}
                  variant="outlined"
                  color="secondary"
                >
                  Start Recording
                </Button>
  }
              </div>
            ) : (
              <div>
                <div>
                  {/* <div style={{ display: "none" }}>
                      <ReactMic
                        record={this.state.isRecording}
                        className="sound-wave"
                        onStop={this.onStop}
                        onData={this.onData}
                        strokeColor="#000000"
                        backgroundColor="#FF4081"
                      />
                    </div> */}
                  {/* <ReactMic
                        record={this.state.isRecording}
                        className="sound-wave"
                        onStop={this.onStop}
                        onData={this.onData}
                        strokeColor="#000000"
                        backgroundColor="white"
                      />

<div>
        <ReactMic
          record={this.state.isRecording}
          className="sound-wave"
          onStop={this.onStop}
          onData={this.onData}
          strokeColor="#000000"
          backgroundColor="#FF4081" />
        <button onClick={this.startTimer} type="button">Start</button>
        <button onClick={()=>this.setState({ isRecording: false })} type="button">Stop</button>
      </div> */}
                </div>
                <div className="activity-div">
                  <UseAnimations
                    animationKey="activity"
                    size={56}
                    style={{
                      color: "white",
                      display: "flex",
                      justifyContent: "center",
                      margin: "7% 0 26px",
                    }}
                  />
                  <div style={{ color: "white" }}>
                    {this.state.time.h}:{this.state.time.m}:{this.state.time.s}
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div className="sub-record-dot">
                    <div className="record-dot"></div>
                  </div>
                  <div style={{ color: "white", marginLeft: "5%" }}>
                    Recording
                  </div>
                </div>
                <div className="record-button">
                  <Button
                    onClick={() => this.setState({ isRecording: false, recorded:true })}
                    variant="contained"
                    color="secondary"
                  >
                    Stop Recording
                  </Button>
                </div>
              </div>
            )}
          </div>
          <RightSideNav {...this.props} />
        </div>
      </div>
    );
  }
}
export default App;
