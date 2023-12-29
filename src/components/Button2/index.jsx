import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[12px]", circle: "rounded-[50%]" };
const variants = {
  fill: {
    blue_600_14: "bg-blue-600_14",
    red_600_14: "bg-red-600_14",
    blue_800_14: "bg-blue-800_14",
    cyan_50: "bg-cyan-50",
    gray_100_01: "bg-gray-100_01",
    orange_50: "bg-orange-50",
    orange_600_28: "bg-orange-600_28",
    white_A700: "bg-white-A700 text-blue_gray-600",
    blue_gray_50: "bg-blue_gray-50 text-orange-600",
    gray_200: "bg-gray-200 text-gray-400",
    orange_600: "bg-orange-600 text-gray-100_02",
    gray_100: "bg-gray-100 text-gray-800",
  },
};
const sizes = {
  xs: "p-1",
  sm: "p-[7px]",
  md: "p-[11px]",
  lg: "p-3.5",
  xl: "p-[17px]",
};

const ButtonTwo = ({
  children,
  fetching,
  handleLogOut,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",

  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      onClick={() => {
        handleLogOut();
      }}
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${
        !fetching
          ? variants[variant]?.[color]
          : variants[variant]?.["orange_50"]
      }`}
      {...restProps}
      disabled={fetching}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

ButtonTwo.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round", "circle"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "blue_600_14",
    "red_600_14",
    "blue_800_14",
    "cyan_50",
    "gray_100_01",
    "orange_50",
    "orange_600_28",
    "white_A700",
    "blue_gray_50",
    "gray_200",
    "orange_600",
    "gray_100",
  ]),
};

export { ButtonTwo };
