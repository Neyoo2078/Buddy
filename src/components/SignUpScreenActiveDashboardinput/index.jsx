import React from "react";

import { Img, Input, Text } from "components";

const SignUpScreenActiveDashboardinput = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start w-[120px] md:w-full">
          <div className="flex flex-col items-start justify-start w-auto">
            <Text
              className="text-blue_gray-600 text-sm tracking-[-0.06px] w-auto"
              size="txtMulishRegular14"
            >
              {props?.label === "First Name" ? "First Name" : "Last Name"}
            </Text>
          </div>
        </div>
        <div className="bg-white-A700 border border-orange-600 border-solid flex flex-row  h-11 md:h-auto items-center justify-start py-3 rounded-md w-full md:w-full">
          <div className="flex flex-row gap-2  h-9 w-[90%] items-center justify-start pl-4 ">
            <Img
              className="h-6 mr-2 my-auto"
              src="images/img_lock.svg"
              alt="lock"
            />
            <input
              className="w-[95%] outline-none border-none"
              id="firstName"
              name="firstName"
              value={props.formik.values.firstName}
              placeholder="firstName"
              type="text"
              onChange={props.formik.handleChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

SignUpScreenActiveDashboardinput.defaultProps = { firstname: "First Name" };

export default SignUpScreenActiveDashboardinput;
