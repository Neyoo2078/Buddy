import React from "react";

import { Img, List, Text } from "components";

const BuddyDashboardColumntime = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-white-A700 flex flex-row gap-[15px] items-center justify-start px-2.5 py-[5px] rounded-[10px] shadow-bs w-[98%] md:w-full">
          <div className="flex flex-col items-center justify-start w-[78%]">
            <div className="flex flex-row gap-[7px] items-start  w-full">
              <Img
                className="h-[45px] md:h-auto rounded-[50%] w-[45px]"
                src="images/img_ellipse1_1.png"
                alt="ellipseOne_Two"
              />

              <div className="flex flex-col items-start justify-start mt-0.5">
                <Text
                  className="text-orange-600 text-sm"
                  size="txtInterSemiBold14"
                >
                  {props?.username}
                </Text>
                <Text
                  className="mt-0.5 text-[9px] text-gray-500"
                  size="txtInterRegular9"
                >
                  {props?.messagetext}
                </Text>
              </div>
            </div>
          </div>
          <Text
            className="text-[9px] text-blue_gray-400_01 w-auto"
            size="txtInterRegular9Bluegray40001"
          >
            {props?.messagetime}
          </Text>
        </div>
        <List
          className="flex flex-col gap-5 items-center w-[98%]"
          orientation="vertical"
        >
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-row gap-3.5 items-start justify-between w-full">
              <div className="flex flex-col items-center justify-start w-[78%]">
                <div className="flex flex-row gap-[7px] items-center  w-full">
                  <Img
                    className="h-[45px] md:h-auto rounded-[50%] w-[45px]"
                    src="images/img_ellipse1_2.png"
                    alt="ellipseOne"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="text-orange-600 text-sm"
                      size="txtInterSemiBold14"
                    >
                      {props?.username1}
                    </Text>
                    <Text
                      className="text-[9px] text-gray-500 w-full"
                      size="txtInterRegular9"
                    >
                      {props?.messagetext1}
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end justify-start mt-[3px] w-[17%]">
                <Text
                  className="mr-0.5 text-[9px] text-blue_gray-400_01"
                  size="txtInterRegular9Bluegray40001"
                >
                  {props?.messagetime1}
                </Text>
                <div className="h-[13px] md:h-[15px] mt-0.5 relative w-3">
                  <div className="absolute bg-orange-600 h-3 inset-x-[0] mx-auto rounded-[50%] top-[0] w-3"></div>
                  <Text
                    className="absolute h-full inset-[0] justify-center m-auto text-[10px] text-right text-white-A700 w-max"
                    size="txtInterRegular10"
                  >
                    {props?.messagecount}
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-row gap-[15px] items-start justify-between w-full">
              <div className="flex flex-col items-center justify-start w-[79%]">
                <div className="flex flex-row gap-2.5 items-center justify-between w-full">
                  <Img
                    className="h-[45px] md:h-auto rounded-[50%] w-[45px]"
                    src="images/img_ellipse1_3.png"
                    alt="ellipseOne"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="text-orange-600 text-sm"
                      size="txtInterSemiBold14"
                    >
                      {props?.username2}
                    </Text>
                    <Text
                      className="text-[9px] text-gray-500 w-full"
                      size="txtInterRegular9"
                    >
                      {props?.messagetext2}
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1.5 items-end justify-start mt-[3px] w-[17%]">
                <Text
                  className="text-[9px] text-blue_gray-400_01"
                  size="txtInterRegular9Bluegray40001"
                >
                  {props?.messagetime2}
                </Text>
                <div className="bg-blue-50 flex flex-col h-3 items-center justify-start p-0.5 rounded-[50%] w-3">
                  <Img
                    className="h-1.5"
                    src="images/img_checkmark_orange_600.svg"
                    alt="checkmark"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-row gap-[15px] items-start justify-between w-full">
              <div className="flex flex-col items-center justify-start w-[79%]">
                <div className="flex flex-row gap-2.5 items-center justify-between w-full">
                  <Img
                    className="h-[45px] md:h-auto rounded-[50%] w-[45px]"
                    src="images/img_ellipse1_4.png"
                    alt="ellipseOne"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="text-orange-600 text-sm"
                      size="txtInterSemiBold14"
                    >
                      {props?.username3}
                    </Text>
                    <Text
                      className="text-[9px] text-gray-500 w-full"
                      size="txtInterRegular9"
                    >
                      {props?.messagetext3}
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end justify-start mt-[3px] w-[17%]">
                <Text
                  className="text-[9px] text-blue_gray-400_01"
                  size="txtInterRegular9Bluegray40001"
                >
                  {props?.messagetime3}
                </Text>
                <div className="bg-blue-50 flex flex-col h-3 items-center justify-start mt-1 p-0.5 rounded-[50%] w-3">
                  <Img
                    className="h-1.5"
                    src="images/img_checkmark_orange_600.svg"
                    alt="checkmark"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-row items-start justify-between w-full">
              <div className="flex flex-col items-center justify-start w-[66%]">
                <div className="flex flex-row gap-[7px] items-start  w-full">
                  <Img
                    className="h-[45px] md:h-auto rounded-[50%] w-[45px]"
                    src="images/img_ellipse1_5.png"
                    alt="ellipseOne"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="text-orange-600 text-sm"
                      size="txtInterSemiBold14"
                    >
                      {props?.username4}
                    </Text>
                    <Text
                      className="mt-[3px] text-[9px] text-gray-500"
                      size="txtInterRegular9"
                    >
                      {props?.messagetext4}
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end justify-start mt-[3px] w-[17%]">
                <Text
                  className="text-[9px] text-blue_gray-400_01"
                  size="txtInterRegular9Bluegray40001"
                >
                  {props?.messagetime4}
                </Text>
                <div className="bg-blue-50 flex flex-col h-3 items-end justify-start mt-1 p-0.5 rounded-[50%] w-3">
                  <Img
                    className="h-1.5"
                    src="images/img_checkmark_orange_600.svg"
                    alt="checkmark"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-row items-start justify-between w-full">
              <div className="flex flex-col items-center justify-start w-[55%]">
                <div className="flex flex-row gap-[7px] items-start  w-full">
                  <Img
                    className="h-[45px] md:h-auto rounded-[50%] w-[45px]"
                    src="images/img_ellipse1_6.png"
                    alt="ellipseOne"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="text-orange-600 text-sm"
                      size="txtInterSemiBold14"
                    >
                      {props?.username5}
                    </Text>
                    <Text
                      className="mt-0.5 text-[9px] text-gray-500"
                      size="txtInterRegular9"
                    >
                      {props?.messagetext5}
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end justify-start mt-[3px] w-[17%]">
                <Text
                  className="text-[9px] text-blue_gray-400_01"
                  size="txtInterRegular9Bluegray40001"
                >
                  {props?.messagetime5}
                </Text>
                <div className="h-[13px] md:h-[17px] mt-1 relative w-3">
                  <div className="absolute bg-orange-600 h-3 inset-x-[0] mx-auto rounded-[50%] top-[0] w-3"></div>
                  <Text
                    className="absolute h-full inset-y-[0] left-[33%] my-auto text-[10px] text-right text-white-A700"
                    size="txtInterRegular10"
                  >
                    {props?.messagecount1}
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </List>
      </div>
    </>
  );
};

BuddyDashboardColumntime.defaultProps = {
  username: "Lisa Roy",
  messagetext: "Hi, are you Available Tomorrow?",
  messagetime: "10:35 AM",
  username1: "Jamie Taylor",
  messagetext1: (
    <>
      Nice One.
      <br />
      Will Do it tommorow
    </>
  ),
  messagetime1: "10:35 AM",
  messagecount: "3",
  username2: "Jason Roy",
  messagetext2: "That’s Great. I am Looking forward to having a great start.",
  messagetime2: "10:35 AM",
  username3: "Amy Frost",
  messagetext3: "Hi, will you start working on the chat app right now?",
  messagetime3: "10:35 AM",
  username4: "Paul Wilson",
  messagetext4: "See you tommorow champ",
  messagetime4: "10:35 AM",
  username5: "Ana Wlliams",
  messagetext5: "??",
  messagetime5: "10:35 AM",
  messagecount1: "1",
};

export default BuddyDashboardColumntime;
