import React from "react";

import { Img, Input, Text } from "components";

const SignUpScreenActiveDashboardinput1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start w-[380px] sm:w-full">
          <div className="flex flex-col items-start justify-start w-auto">
            <Text
              className="text-blue_gray-600 text-sm tracking-[-0.06px] w-auto"
              size="txtMulishRegular14"
            >
              {props?.label}
            </Text>
          </div>
        </div>
        <div className="bg-white-A700 border border-orange-600 border-solid flex flex-row  h-11 md:h-auto items-center justify-start py-3 rounded-md w-[389px] md:w-full">
          <div className="flex   flex-row gap-2  h-9 w-[90%] items-center justify-start pl-4 ">
            <Img
              className="h-6 mr-2 my-auto"
              src="images/img_checkmark_blue_gray_200.svg"
              alt="checkmark"
            />
            <input
              className="w-[95%] !placeholder:text-blue_gray-600 outline-none border-none font-mulish"
              type="email"
              id="email"
              name="email"
              value={
                /*props.props?.InputValue.email8*/ props.formik.values.email
              }
              placeholder="Seyi@zojatech.com"
              onChange={
                props.formik.handleChange
                //   (e) => {
                //   props?.setInputValue({
                //     ...props?.InputValue,
                //     email: e.target.value,
                //   });
                // };
              }
            />
          </div>
        </div>
        <div className="flex flex-col items-start justify-start w-[389px] sm:w-full">
          <Text
            className={`${
              /*props?.InputValue?.email.length*/ props.formik.values.email
                .length < 60
                ? "text-blue_gray-400"
                : "text-[#ee3d3d]"
            } text-right text-xs tracking-[-0.05px] w-auto`}
            size="txtMulishRegular12"
          >
            {`${
              /*props?.InputValue?.email.length*/ props.formik.values.email
                .length
            }/ 60`}
          </Text>
        </div>
      </div>
    </>
  );
};

SignUpScreenActiveDashboardinput1.defaultProps = {
  label: "Email",
  progresslabel: ``,
};

export default SignUpScreenActiveDashboardinput1;
