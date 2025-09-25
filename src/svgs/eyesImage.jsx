// import React from "react";

// const EyesImage = ({ leftEyeX, leftEyeY, rightEyeX, rightEyeY }) => {
//   return (
//     <svg
//       className="background-svg"
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 500 500"
//       preserveAspectRatio="none"
//       width="100%"
//       height="100%"
//     >
//       <rect width="500" height="500" fill="#151515" />

//       {/* Left eye white part */}
//       <ellipse
//         rx="19.4964"
//         ry="7.79857"
//         transform="matrix(1.97143 0 0 1.71426 202.652 189.394)"
//         fill="#fff"
//       />

//       {/* Right eye white part */}
//       <ellipse
//         rx="19.4964"
//         ry="7.79857"
//         transform="matrix(1.8 0 0 1.71426 294.006 189.394)"
//         fill="#fff"
//       />

//       {/* Pupils */}
//       <ellipse
//         rx="12.2549"
//         ry="9.4695"
//         transform={`translate(${186.45 + leftEyeX} ${189.39 + leftEyeY})`}
//         fill="#354a73"
//       />
//       <ellipse
//         rx="12.2549"
//         ry="9.4695"
//         transform={`translate(${309.35 + rightEyeX} ${189.5 + rightEyeY})`}
//         fill="#354a73"
//       />
//     </svg>
//   );
// };

// export default EyesImage;
import React from "react";

const EyesImage = ({ eyePos }) => {
  const { lx, ly, rx, ry } = eyePos; // destructure positions

  return (
    <>
      {/* <svg
        id="eKqeJP5xrpw1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 500 500"
        shape-rendering="geometricPrecision"
        text-rendering="geometricPrecision"
        preserveAspectRatio="xMidYMid slice"
        width="100%"
        height={"100%"}
      >
        <rect width="500" height="500" rx="0" ry="0" fill="#181f38" />
        <ellipse
          rx="19.4964"
          ry="7.79857"
          transform="matrix(1.97143 0 0 1.71426 202.652 189.394)"
          fill="#fff"
          stroke="#6c6c6c"
          stroke-width="0"
        />
        <ellipse
          rx="19.4964"
          ry="7.79857"
          transform="matrix(1.8 0 0 1.71426 294.006 189.394)"
          fill="#fff"
          stroke="#6c6c6c"
          stroke-width="0"
        />
        <ellipse
          rx="31.1943"
          ry="8.35561"
          transform="matrix(1.87305 0 0 3 250.926 330.771)"
          fill="#faf4f4"
          stroke="#fff"
        />
        <ellipse
          rx="12.2549"
          ry="9.4695"
          transform={`translate(${186.451488 + leftEyeX} ${
            189.394 + leftEyeY
          })`}
          fill="#354a73"
          stroke-width="0"
        />
        <ellipse
          rx="12.2549"
          ry="9.4695"
          transform={`translate(${309.354484 + rightEyeX} ${
            189.5 + rightEyeY
          })`}
          fill="#354a73"
          stroke-width="0"
        />
        <ellipse
          rx="69.0731"
          ry="65.7308"
          transform="matrix(.844694 0 0 0.454582 250 340.246841)"
          fill="#151515"
          stroke-width="0"
        />
        <line
          x1="-35.093567"
          y1="3.342246"
          x2="35.093568"
          y2="-3.342246"
          transform="matrix(.780819 0.31314-.364625 0.909201 202.652 159.603823)"
          fill="#f4d004"
          stroke="#f4d004"
          stroke-width="4"
        />
        <line
          x1="-35.093567"
          y1="3.342246"
          x2="35.093568"
          y2="-3.342246"
          transform="matrix(.829663-.139262 0.16216 0.966076 290.973327 160.128534)"
          fill="#f4d004"
          stroke="#f4d004"
          stroke-width="4"
        />
      </svg> */}
      <svg
        id="eKqeJP5xrpw1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 500 500"
        shape-rendering="geometricPrecision"
        text-rendering="geometricPrecision"
        preserveAspectRatio="xMidYMid slice"
        width="100%"
        height="100%"
      >
        <defs>
          <linearGradient id="bgGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#191a2e" />
            <stop offset="25%" stop-color="#18182b" />
          </linearGradient>
        </defs>

        <rect width="500" height="500" rx="0" ry="0" fill="url(#bgGradient)" />

        <ellipse
          rx="19.4964"
          ry="7.79857"
          transform="matrix(1.97143 0 0 1.71426 202.652 189.394)"
          fill="#fff"
          stroke="#6c6c6c"
          stroke-width="0"
        />
        <ellipse
          rx="19.4964"
          ry="7.79857"
          transform="matrix(1.8 0 0 1.71426 294.006 189.394)"
          fill="#fff"
          stroke="#6c6c6c"
          stroke-width="0"
        />
        <ellipse
          rx="31.1943"
          ry="8.35561"
          transform="matrix(1.87305 0 0 3 250.926 330.771)"
          fill="#faf4f4"
          stroke="#fff"
        />
        <ellipse
          rx="12.2549"
          ry="9.4695"
          transform={`translate(${186.45 + lx} ${189.39 + ly})`}
          fill="#354a73"
          stroke-width="0"
        />
        <ellipse
          rx="12.2549"
          ry="9.4695"
          transform={`translate(${309.35 + rx} ${189.5 + ry})`}
          fill="#354a73"
          stroke-width="0"
        />
        <ellipse
          rx="69.0731"
          ry="65.7308"
          transform="matrix(.844694 0 0 0.454582 250 340.246841)"
          fill="#18182b"
          stroke-width="0"
        />
        <line
          x1="-35.093567"
          y1="3.342246"
          x2="35.093568"
          y2="-3.342246"
          transform="matrix(.780819 0.31314-.364625 0.909201 202.652 159.603823)"
          fill="#f4d004"
          stroke="#f4d004"
          stroke-width="4"
        />
        <line
          x1="-35.093567"
          y1="3.342246"
          x2="35.093568"
          y2="-3.342246"
          transform="matrix(.829663-.139262 0.16216 0.966076 290.973327 160.128534)"
          fill="#f4d004"
          stroke="#f4d004"
          stroke-width="4"
        />
      </svg>
    </>
  );
};

export default EyesImage;
