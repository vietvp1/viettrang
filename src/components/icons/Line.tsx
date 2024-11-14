import React from "react";

const Line = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      className="h-[9px]"
      preserveAspectRatio="none"
      viewBox="0 0 356.13 42.62"
      fill="rgba(78, 78, 78, 1)"
      { ...props }
    >
      <path d="M349,20.45C303.49-22.75,16.68,15.66,4.5,17.31a5.2,5.2,0,1,0,1.4,10.3c8.66-1.18,18.88-2.47,30.26-3.81C132.05,12.56,310.74-1.54,341.85,28c2.91,2.75,4.13,5.62,3.85,9,0,.07,0,.13,0,.2a5.19,5.19,0,0,0,4.75,5.4,3.1,3.1,0,0,0,.43,0,5.2,5.2,0,0,0,5.18-4.77C356.59,31.35,354.16,25.34,349,20.45Z"></path>
    </svg>
  );
};

export default Line;
