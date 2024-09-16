import React from "react";
import { Waypoint } from "react-waypoint";

require("./MobileTransition.css");
const MobileTransition = () => {
  const [triggered, setTriggered] = React.useState(false);

  const videoRef = React.useRef(null); 

    const handleEnter = () => {
      console.log("play")
    if (!triggered) {
      setTriggered(true);
      if (videoRef.current) {
        videoRef.current.play();
      }
    }
  };

  return (
    <>
      <div class="sc-1x6rdf2-0 gOugWE">
        <section class="sc-ddh18-2 sc-994i1z-0 gWQImb jmmmUm">
        <Waypoint onEnter={handleEnter} >
          <div class="sc-994i1z-1 iAakQG">
            {!triggered ? (
              <img
                src="https://web-images.credcdn.in/v2/_next/assets/images/landing/desktop/phone-ticker-desktop-poster-final.jpg?tr=q-95"
                class="sc-1ck9s4i-1 eZdgcP"
              />
            ) : null}
              <video
                muted
                playsInline
                ref={videoRef}
                preload="metadata"
                poster="https://web-images.credcdn.in/v2/_next/assets/images/landing/desktop/phone-ticker-desktop-poster-final.jpg?tr=q-95"
                style={{ position: "initial", visibility: triggered? "visible" :"hidden" }}
                src="https://web-images.credcdn.in/v2/_next/assets/videos/landing/desktop/phone-ticker-desktop-final.mp4?tr=q-95"
                class="sc-1ck9s4i-0 iaATcO"
              ></video>
          </div>
            </Waypoint>
        </section>
        <div class="sc-1x6rdf2-1 ciFUdN">
          <div class="sc-1x6rdf2-2 cDcrsE">
            <div class="sc-1x6rdf2-3 jQeqPx">
              all that you deserve.
              <br />
              and some more.
            </div>
            <div class="sc-1x6rdf2-4 fNNTt">
              all that you
              <br />
              deserve. and <br />
              some more.
            </div>
            <div class="sc-1x6rdf2-5 cfbgIi">
              if you're a CRED member, you're already a step ahead. every <br />
              experience you unlock takes you higher up the pedestal.
            </div>
            <div class="sc-1x6rdf2-6 citpOw">
              if you're a CRED member, you're already a<br /> step ahead. every
              experience you unlock
              <br /> takes you higher up the pedestal.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileTransition;
