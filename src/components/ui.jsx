import React from "react";
import { useState } from "react";
import EyesImage from "../svgs/eyesImage";

function MainPageUi() {
  const [hover, setHover] = useState(false);
  const [eyePos, setEyePos] = useState({ lx: 0, ly: 0, rx: 0, ry: 0 });

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;

    // Normalize mouse position (-1 to 1 range)
    const x = (e.clientX / innerWidth - 0.5) * 2;
    const y = (e.clientY / innerHeight - 0.5) * 2;

    // Max movement of pupils inside eye (like real human eye limit)
    const maxX = 12;
    const maxY = 6;

    setEyePos({
      lx: x * maxX,
      ly: y * maxY,
      rx: x * maxX,
      ry: y * maxY,
    });
  };

  (function () {
    function c() {
      var b = a.contentDocument || a.contentWindow.document;
      if (b) {
        var d = b.createElement("script");
        d.innerHTML =
          "window.__CF$cv$params={r:'9839c5a184b33ff4',t:'MTc1ODYyNzY3Ni4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
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
      <div className="container" onMouseMove={handleMouseMove}>
        <EyesImage
          leftEyeX={eyePos.lx}
          leftEyeY={eyePos.ly}
          rightEyeX={eyePos.rx}
          rightEyeY={eyePos.ry}
        />
        <div className="floating-cards">
          <div className="nft-card"></div>
          <div className="nft-card"></div>
          <div className="nft-card"></div>
          <div className="nft-card"></div>
          <div className="nft-card"></div>
          <div className="nft-card"></div>
        </div>
      </div>
      <div className="button-container">
        <div className="heading-container">
          <h1 className="main-title">Mood NFT</h1>
        </div>
        <div className="svg-container cta-buttons">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            style={{ marginRight: "8px", verticalAlign: "middle" }}
            className="__web-inspector-hide-shortcut__"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
          </svg>
          <button
            className="trigger"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            {hover ? "Coming Soon" : "View Collection on OpenSea"}
          </button>
        </div>
      </div>
    </>
  );
}

export default MainPageUi;
