// import React, { useState } from "react";
// import { Waypoint } from "react-waypoint";
// import ReactPlayer from "react-player";

// const AutomaticPlayer =  (props)=> {
//   let [shouldPlay, updatePlayState] = useState(false);

//   let handleEnterViewport =  () => {

//     updatePlayState(true);
//   };
//   let handleExitViewport =  () => {
//     updatePlayState(false);
//   };

//   return (
//     <Waypoint onEnter={handleEnterViewport} onLeave={handleExitViewport}>
//       <ReactPlayer
//         playing={shouldPlay}

//         {...props}
//         url="https://www.youtube.com/watch?v=28xjtYY3V3Q"
//         className="d-block width"
//       />
//     </Waypoint>
//   );
// };

// export default AutomaticPlayer;

import React, { Component } from "react";
import handleViewport from "react-in-viewport";
import ReactPlayer from "react-player";

class MySectionBlock extends Component {
  state = {
    shouldPlay: false,
  };
  getStyle() {
    const { inViewport, enterCount } = this.props;
    //Fade in only the first time we enter the viewport
    if (inViewport && enterCount === 1) {
      return { WebkitTransition: "opacity 0.75s ease-in-out" };
    } else if (!inViewport && enterCount < 1) {
      return { WebkitTransition: "none", opacity: "0" };
    } else {
      return {};
    }
  }

  handleEnterViewport = () => {
    this.setState({ shouldPlay: true });
  };
  handleExitViewport = () => {
    this.setState({ shouldPlay: false });
  };

  render() {
    const { enterCount, leaveCount } = this.props;
    return (
      <section>
        {/* <div className="content" style={this.getStyle()}>
          <h1>Hello</h1>
          <p>{`Enter viewport: ${enterCount} times`}</p>
          <p>{`Leave viewport: ${leaveCount} times`}</p>
        </div>

         */}

        <ReactPlayer
          playing={enterCount === leaveCount?false:true}
          {...this.props}
          url="https://youtu.be/07d2dXHYb94"
          className="d-block width"
        />
      </section>
    );
  }
}
const MySection = handleViewport(MySectionBlock, { rootMargin: "-45.0%" });

export default MySection;
