import React from 'react';

const SadMoodIcon:React.FC<{width:number,height:number}> = ({width,height}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-mood-sad"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <path d="M9 10l.01 0" />
      <path d="M15 10l.01 0" />
      <path d="M9.5 15.25a3.5 3.5 0 0 1 5 0" />
    </svg>
  );
};

export default SadMoodIcon;
