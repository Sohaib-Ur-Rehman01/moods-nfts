import React from "react";
import { useState } from "react";
import EyesImage from "../svgs/eyesImage";

function MainPageUi() {
  const [eyePos, setEyePos] = useState({
    lx: 0,
    ly: 0,
    rx: 0,
    ry: 0,
  });

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // normalize mouse position (-1 to 1)
    const normX = (mouseX / innerWidth) * 2 - 1;
    const normY = (mouseY / innerHeight) * 2 - 1;

    // scale movement (how far pupils move)
    const scale = 8;

    setEyePos({
      lx: normX * scale,
      ly: normY * scale,
      rx: normX * scale,
      ry: normY * scale,
    });
  };
  (function () {
    function c() {
      var b = a.contentDocument || a.contentWindow.document;
      if (b) {
        var d = b.createElement("script");
        d.innerHTML =
          "window.__CF$cv$params={r:'984284cbc6453ff9',t:'MTc1ODcxOTM5My4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
        b.getElementsByTagName("head")[0].appendChild(d);
      }
    }
    if (document.body) {
      var a = document.createElement("iframe");
      a.height = 1;
      a.width = 1;
      a.style.position = "absolute";
      a.style.top = 0;
      a.style.left = 0;
      a.style.border = "none";
      a.style.visibility = "hidden";
      document.body.appendChild(a);
      if ("loading" !== document.readyState) c();
      else if (window.addEventListener)
        document.addEventListener("DOMContentLoaded", c);
      else {
        var e = document.onreadystatechange || function () {};
        document.onreadystatechange = function (b) {
          e(b);
          "loading" !== document.readyState &&
            ((document.onreadystatechange = e), c());
        };
      }
    }
  })();

  return (
    <>
      <div className="main-container" onMouseMove={handleMouseMove}>
        <div className="container">
          {/* Cyberpunk Style Heading */}
          <div className="mb-8">
            <h1 className="main-heading">
              MOODS<span>_</span>NFT
            </h1>
          </div>

          {/* Tagline */}
          <p className="tagline">
            // Digital emotions encoded in blockchain art
          </p>

          {/* Cyberpunk Stats */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-value text-cyan">10K</div>
              <div className="stat-label">Supply</div>
            </div>

            <div className="stat-card" style={{ animationDelay: "0.5s" }}>
              <div className="stat-value text-pink">72%</div>
              <div className="stat-label">Minted</div>
            </div>

            <div className="stat-card" style={{ animationDelay: "1s" }}>
              <div className="stat-value text-yellow">0.08</div>
              <div className="stat-label">ETH</div>
            </div>
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
