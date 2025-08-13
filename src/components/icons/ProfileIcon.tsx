import React from "react";

interface ProfileIconProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

export const ProfileIcon: React.FC<ProfileIconProps> = ({
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
        d="M25.8649 23.6351C25.6566 23.6143 25.4066 23.6143 25.1774 23.6351C20.2191 23.4685 16.2816 19.406 16.2816 14.406C16.2816 9.3018 20.4066 5.15597 25.5316 5.15597C30.6358 5.15597 34.7816 9.3018 34.7816 14.406C34.7608 19.406 30.8233 23.4685 25.8649 23.6351Z"
        stroke={color}
        strokeWidth="1.37086"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.4481 31.3226C10.4065 34.6976 10.4065 40.1976 15.4481 43.5518C21.1773 47.3851 30.5731 47.3851 36.3023 43.5518C41.344 40.1768 41.344 34.6768 36.3023 31.3226C30.594 27.5101 21.1981 27.5101 15.4481 31.3226Z"
        stroke={color}
        strokeWidth="1.37086"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ProfileIcon;
