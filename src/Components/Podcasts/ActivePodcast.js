import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import CancelIcon from '@material-ui/icons/Cancel';

const TextScroller = ({ selectedPodcast,close }) => {
  const [key, setKey] = useState(1);

  const scrolling = useSpring({
    from: { transform: "translate(45%,0)" },
    to: { transform: "translate(20%,0)" },
    config: { duration: 10000 },
    reset: true,
    // reverse: key % 2 == 0,
    onRest: () => {
      setKey(key + 1);
    },
  });

  return (
    <div
      key={key}
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <div>
          <img
            className="pet3-podcast"
            src={selectedPodcast.profilePic}
          />
        </div>

        <div className="anc-y-podcast">
          <span
            className="small-podcastm"
            style={{ color: "white", marginLeft: 10 }}
          >
            {selectedPodcast.name} |
          </span>
        </div>
      </div>
      <div>
        <animated.div style={scrolling}>
          <div style={{ color: "white" }}>{selectedPodcast.description}</div>
        </animated.div>
      </div>
      <div>
          <CancelIcon
            className="icon-pod-dis"
            style={{ color: "white" }}
            onClick={() => close()}
          />
      </div>
    </div>
  );
};

export default TextScroller;
