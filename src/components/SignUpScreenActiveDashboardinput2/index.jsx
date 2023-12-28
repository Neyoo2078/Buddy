import React from "react";
import { Img, Text } from "components";
import { BiHide } from "react-icons/bi";
import { MdOutlineVisibility } from "react-icons/md";
import { useState } from "react";

const SignUpScreenActiveDashboardinput2 = (props) => {
  const [showPassword, setshowPassword] = useState(false);

  console.log({ showPassword });
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start w-[389px] md:w-full">
          <div className="flex flex-col items-start justify-start w-auto">
            <Text
              className="text-blue_gray-600 text-sm tracking-[-0.06px] w-auto"
              size="txtMulishRegular14"
            >
              {props?.passwordtext}
            </Text>
          </div>
        </div>
        <div className="bg-white-A700 border border-orange-600 border-solid flex flex-row  h-11 md:h-auto items-center justify-start py-3 rounded-md w-[389px] md:w-full">
          <div className="flex   flex-row gap-2  h-9 w-[90%] items-center justify-start pl-4 ">
            <Img className="h-6 w-6" src="images/img_trophy.svg" alt="trophy" />
            <input
              value={props.formik.values.password}
              className="w-[95%] outline-none border-none"
              id="password"
              name="password"
              placeholder="Password"
              type={`${showPassword ? "text" : "password"}`}
              onChange={
                props.formik.handleChange
                //   props.setInputValue({
                //     ...props.InputValue,
                //     password: e.target.value,
                //   });
                // }
              }
            />
          </div>
          {!showPassword ? (
            <BiHide
              className="text-blue_gray-400 w-[25px] h-[25px]"
              onClick={() => {
                setshowPassword(true);
              }}
            />
          ) : (
            <MdOutlineVisibility
              className="text-blue_gray-400 w-[25px] h-[25px]"
              onClick={() => {
                setshowPassword(false);
              }}
            />
          )}
        </div>
        <div className="flex flex-col items-start justify-start w-[389px] md:w-full">
          <Text
            className={`${
              props.formik.values.password.length < 15
                ? "text-blue_gray-400"
                : "text-[#ee3d3d]"
            } text-right text-xs tracking-[-0.05px] w-auto`}
            size="txtMulishRegular12"
          >
            {`${props.formik.values.password.length}/ 15`}
          </Text>
        </div>
      </div>
    </>
  );
};

SignUpScreenActiveDashboardinput2.defaultProps = {
  passwordtext: "Password",
  progresstext: "15 / 15",
};

export default SignUpScreenActiveDashboardinput2;
