import React from 'react';

interface RightArrowWhiteProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

export const RightArrowWhite: React.FC<RightArrowWhiteProps> = ({
  width = 41,
  height = 41,
  color = "white",
  className = ""
}) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 41 41" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M20.6809 37.025C29.7797 37.025 37.1557 29.649 37.1557 20.5502C37.1557 11.4514 29.7797 4.07541 20.6809 4.07541C11.5822 4.07541 4.20615 11.4514 4.20615 20.5502C4.20615 29.649 11.5822 37.025 20.6809 37.025Z" 
        stroke={color} 
        strokeWidth="1.08406" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M14.9148 20.5502H24.7996" 
        stroke={color} 
        strokeWidth="1.08406" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M21.5047 25.4926L26.4471 20.5502L21.5047 15.6078" 
        stroke={color} 
        strokeWidth="1.45187" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default RightArrowWhite;
