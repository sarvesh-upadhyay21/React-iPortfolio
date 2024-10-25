import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "VIDEO CONFERENCING DIVISION",
          "National Informatics Centre, Ministry of Electronics & IT (MeitY) | Government of India",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
