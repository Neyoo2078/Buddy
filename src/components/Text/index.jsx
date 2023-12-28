import React from "react";

const sizeClasses = {
  txtMulishRegular13Bluegray600: "font-mulish font-normal",
  txtLexendLight12Gray600: "font-lexend font-light",
  txtLexendBold20: "font-bold font-lexend",
  txtLexendSemiBold18: "font-lexend font-semibold",
  txtLexendSemiBold12: "font-lexend font-semibold",
  txtInterRegular9Bluegray40001: "font-inter font-normal",
  txtLexendSemiBold14: "font-lexend font-semibold",
  txtMulishBold24: "font-bold font-mulish",
  txtLexendBold25: "font-bold font-lexend",
  txtInterRegular15Bluegray100: "font-inter font-normal",
  txtInterSemiBold9: "font-inter font-semibold",
  txtInterSemiBold15Bluegray900: "font-inter font-semibold",
  txtMulishRegular18: "font-mulish font-normal",
  txtMulishMedium13: "font-medium font-mulish",
  txtMulishRegular14: "font-mulish font-normal",
  txtInterRegular9: "font-inter font-normal",
  txtMulishRegular13: "font-mulish font-normal",
  txtMulishMedium14: "font-medium font-mulish",
  txtMulishRegular12: "font-mulish font-normal",
  txtLexendMedium18: "font-lexend font-medium",
  txtInterRegular10: "font-inter font-normal",
  txtLexendRegular11: "font-lexend font-normal",
  txtInterSemiBold14: "font-inter font-semibold",
  txtInterSemiBold15: "font-inter font-semibold",
  txtLexendMedium12: "font-lexend font-medium",
  txtLexendRegular12: "font-lexend font-normal",
  txtLexendMedium15: "font-lexend font-medium",
  txtLexendSemiBold25: "font-lexend font-semibold",
  txtLexendMedium14: "font-lexend font-medium",
  txtLexendLight12: "font-lexend font-light",
  txtLexendLight11: "font-lexend font-light",
  txtLexendBold16: "font-bold font-lexend",
  txtLexendMedium12RedA200: "font-lexend font-medium",
  txtLexendLight14: "font-lexend font-light",
  txtInterRegular15: "font-inter font-normal",
  txtLexendRegular12Gray600: "font-lexend font-normal",
  txtInterRegular16: "font-inter font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
