import React from "react";

interface SendIconProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

export const SendIcon: React.FC<SendIconProps> = ({
  width = 46,
  height = 46,
  color = "#121212",
  className = "",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M38.2851 40.2516C24.5566 45.3679 6.31588 40.2516 6.31588 40.2516"
        stroke={color}
        strokeWidth="2.70798"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M35.3511 9.56174L9.02346 35.8893"
        stroke={color}
        strokeWidth="2.70798"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M35.3511 28.8749V9.56174H16.0379"
        stroke={color}
        strokeWidth="2.70798"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SendIcon;
