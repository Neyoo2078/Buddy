import React from "react";

import { Img, Text } from "components";

const SignUpScreenDashboardinput = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="border border-gray-300 border-solid flex flex-col h-10 md:h-auto items-center justify-center rounded-md w-[389px] md:w-full">
          <div className="flex flex-row gap-2 items-center justify-start pl-4 w-auto">
            <div className="flex flex-col h-6 items-start justify-start p-[3px] w-6">
              {!!props?.googleimage ? (
                <Img
                  className="h-4 w-4"
                  alt="google"
                  src={props?.googleimage}
                />
              ) : null}
            </div>
            <div className="flex flex-col items-center justify-start w-auto">
              {!!props?.googlelabeltext ? (
                <Text
                  className="text-blue_gray-600 text-sm tracking-[-0.06px] w-auto"
                  size="txtMulishRegular14"
                >
                  {props?.googlelabeltext}
                </Text>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

SignUpScreenDashboardinput.defaultProps = {};

export default SignUpScreenDashboardinput;
