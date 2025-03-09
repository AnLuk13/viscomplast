import React from "react";
import { MoonLoader } from "react-spinners";

function HeroLoadingSpinner() {
  return (
    <div
      style={{
        position: "absolute",
        right: 0,
        bottom: 0,
        marginRight: "5vw",
        marginBottom: "4vw",
      }}
    >
      <MoonLoader color="var(--primary)" size={50} />
    </div>
  );
}

export default HeroLoadingSpinner;
