import React from "react";
import { useState } from "react";
import EyesImage from "../svgs/eyesImage";

function MainPageUi() {
  const [eyePos, setEyePos] = useState({ lx: 0, ly: 0, rx: 0, ry: 0 });

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // normalize mouse position (-1 to 1)
    const normX = (mouseX / innerWidth) * 2 - 1;
    const normY = (mouseY / innerHeight) * 2 - 1;

    const scale = 8; // how far pupils move

    setEyePos({
      lx: normX * scale,
      ly: normY * scale,
      rx: normX * scale,
      ry: normY * scale,
    });
  };

  return (
    <>
      <div
        className="main-container"
        onMouseMove={handleMouseMove} // attach mouse move here
      >
        <div className="container">
          {/* Cyberpunk Style Heading */}
          <div className="mb-8">
            <h1 className="main-heading">
              MOODS<span>_</span>NFT
            </h1>
          </div>

          {/* Tagline */}
          <p className="tagline">
            // We are moods, NFTs that smile only when ETH goes up.
          </p>

          {/* Cyberpunk Stats */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-value text-cyan">6.9K</div>
              <div className="stat-label">Supply</div>
            </div>

            <div className="stat-card" style={{ animationDelay: "0.5s" }}>
              <div className="stat-value text-pink">100</div>
              <div className="stat-label">Unique Traits</div>
            </div>

            {/* <div className="stat-card" style={{ animationDelay: "1s" }}>
              <div className="stat-value text-yellow">Base</div>
              <div className="stat-label">Chain</div>
            </div> */}
          </div>
        </div>
        <div className="img-container">
          <EyesImage eyePos={eyePos} />
        </div>
      </div>
    </>
  );
}

export default MainPageUi;
