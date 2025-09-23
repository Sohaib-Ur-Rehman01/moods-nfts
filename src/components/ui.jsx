import React from "react";

function MainPageUi() {
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
      <div className="container">
        <div className="floating-cards">
          <div className="nft-card"></div>
          <div className="nft-card"></div>
          <div className="nft-card"></div>
          <div className="nft-card"></div>
          <div className="nft-card"></div>
          <div className="nft-card"></div>
        </div>

        <div className="main-content">
          <div className="logo-container">
            <div className="logo">🎨</div>
          </div>

          <h1 className="main-title">MOODS NFT</h1>
          <p className="subtitle">Express Your Digital Emotions</p>

          <div className="stats-inline">
            <div className="stat-item-inline">
              <span className="stat-number-inline">10K</span>
              <span className="stat-label-inline">Total Supply</span>
            </div>
          </div>

          <div className="cta-buttons">
            <a
              href="#"
              className="cta-button secondary"
              onClick={(e) => e.preventDefault()}
              title="Coming soon"
            >
              {/* <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                style="margin-right: 8px; vertical-align: middle"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg> */}
              View Collection on OpenSea
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPageUi;
