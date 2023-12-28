import React from "react";

import { Img, Text } from "components";

const BuddyDashboardRowellipsethree = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[25px] md:h-auto mt-[35px] rounded-[50%] w-[25px]"
          src="images/img_ellipse3.png"
          alt="ellipseThree"
        />
        <div className="bg-blue_gray-50 flex flex-col items-center justify-start p-2 rounded-br-[10px] rounded-tl-[10px] rounded-tr-[10px]">
          <Text
            className="mt-1 text-base text-blue_gray-900 w-[99%] sm:w-full"
            size="txtInterRegular16"
          >
            {props?.sendername}
          </Text>
        </div>
      </div>
    </>
  );
};

BuddyDashboardRowellipsethree.defaultProps = {
  sendername: "Hi David, have you got the project report pdf?",
};

export default BuddyDashboardRowellipsethree;
