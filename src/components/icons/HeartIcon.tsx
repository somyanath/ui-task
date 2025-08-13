import React from "react";

interface HeartIconProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

export const HeartIcon: React.FC<HeartIconProps> = ({
  width = 51,
  height = 51,
  color = "#121212",
  className = "",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 51 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M26.8231 44.3435C26.1148 44.5935 24.9481 44.5935 24.2398 44.3435C18.1981 42.281 4.69812 33.6768 4.69812 19.0935C4.69812 12.656 9.88562 7.44763 16.2815 7.44763C20.0731 7.44763 23.4273 9.28097 25.5315 12.1143C27.6356 9.28097 31.0106 7.44763 34.7815 7.44763C41.1773 7.44763 46.3648 12.656 46.3648 19.0935C46.3648 33.6768 32.8648 42.281 26.8231 44.3435Z"
        stroke={color}
        strokeWidth="1.37086"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default HeartIcon;
