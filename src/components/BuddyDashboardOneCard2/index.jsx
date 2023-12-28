import React from "react";

import { Button, Img, Text } from "components";

const BuddyDashboardOneCard2 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start w-[97px]">
          <Text
            className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-800 w-auto"
            size="txtLexendBold25"
          >
            {props?.dynamictextprop}
          </Text>
          <Text
            className="text-gray-500_01 text-xs tracking-[0.24px] w-full"
            size="txtLexendRegular12"
          >
            {props?.dynamictextprop1}
          </Text>
        </div>
        <Button
          className="flex h-12 items-center justify-center rounded-[50%] w-12"
          shape="circle"
          color="orange_50"
          size="md"
          variant="fill"
        >
          <Img
            className="h-5"
            src="images/img_growth_orange_600.svg"
            alt="growth"
          />
        </Button>
      </div>
    </>
  );
};

BuddyDashboardOneCard2.defaultProps = {
  dynamictextprop: "789",
  dynamictextprop1: "All Impressions",
};

export default BuddyDashboardOneCard2;
