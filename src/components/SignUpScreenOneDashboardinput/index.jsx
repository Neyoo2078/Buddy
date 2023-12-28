import React from "react";

import { Img, Text } from "components";

const SignUpScreenOneDashboardinput = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="border border-gray-300 border-solid flex flex-col h-10 md:h-auto items-center justify-start rounded-md w-[185px] md:w-full">
          <div className="flex flex-row gap-2 items-center justify-start pl-4 w-auto">
            <Img className="h-6 w-6" src="images/img_lock.svg" alt="lock" />
            <div className="flex flex-col items-center justify-start w-auto">
              <Text
                className="text-blue_gray-600 text-sm tracking-[-0.06px] w-auto"
                size="txtMulishRegular14"
              >
                {props?.firstnamelabel}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

SignUpScreenOneDashboardinput.defaultProps = { firstnamelabel: "First Name" };

export default SignUpScreenOneDashboardinput;
