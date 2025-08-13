import React from "react";

interface CartIconProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

export const CartIcon: React.FC<CartIconProps> = ({
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
        d="M16.1565 16.9685V14.9476C16.1565 10.2601 19.9273 5.65597 24.6148 5.21847C30.1982 4.67681 34.9065 9.07264 34.9065 14.5518V17.4268"
        stroke={color}
        strokeWidth="1.37086"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.2815 46.8226H31.7815C40.1565 46.8226 41.6565 43.4685 42.094 39.3851L43.6565 26.8851C44.219 21.8018 42.7607 17.656 33.8648 17.656H17.1982C8.30233 17.656 6.844 21.8018 7.4065 26.8851L8.969 39.3851C9.4065 43.4685 10.9065 46.8226 19.2815 46.8226Z"
        stroke={color}
        strokeWidth="1.37086"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32.8138 25.9893H32.8325"
        stroke="#292D32"
        strokeWidth="2.44796"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.2283 25.9893H18.2471"
        stroke="#292D32"
        strokeWidth="2.44796"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CartIcon;
