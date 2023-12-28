import React from "react";
import { Button, Img, Input, Line, List, Text } from "components";
import BuddyDashboardColumntime from "components/BuddyDashboardColumntime";
import BuddyDashboardRowellipsethree from "components/BuddyDashboardRowellipsethree";
import { CiSearch } from "react-icons/ci";
import { motion } from "framer-motion";
import { CloseSVG } from "../../assets/images";

const BuddyDashboardPage = () => {
  const [frame37662value, setFrame37662value] = React.useState("");
  const [grouponevalue, setGrouponevalue] = React.useState("");

  // Page Animation
  const pageAnimate = {
    initial: { x: 1000, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.3,
        ease: "linear",
      },
    },
  };

  return (
    <motion.div
      variants={pageAnimate}
      initial="initial"
      animate="animate"
      className="flex flex-1 flex-col gap-8 items-center justify-start w-full"
    >
      <div className="flex md:flex-col flex-row gap-4 items-center justify-between max-w-[1134px] w-full">
        <Text
          className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-800 w-auto"
          size="txtLexendBold25"
        >
          Messages
        </Text>
        <div className="flex sm:flex-1 sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
          <Input
            name="frame37662"
            placeholder="Search"
            value={frame37662value}
            onChange={(e) => setFrame37662value(e)}
            className="!placeholder:text-gray-600 !text-gray-600 font-medium p-0 text-left text-sm tracking-[0.28px] w-full"
            wrapClassName="flex rounded-[16px] w-[77%] sm:w-full"
            prefix={
              <Img
                className="cursor-pointer h-6 mr-2.5 my-auto"
                src="images/img_search.svg"
                alt="search"
              />
            }
            suffix={
              <CloseSVG
                fillColor="#808086"
                className="cursor-pointer h-6 my-auto"
                onClick={() => setFrame37662value("")}
                style={{
                  visibility:
                    frame37662value?.length <= 0 ? "hidden" : "visible",
                }}
                height={24}
                width={24}
                viewBox="0 0 24 24"
              />
            }
            color="white_A700"
            size="sm"
            variant="fill"
          ></Input>
          <Button
            className="flex h-12 items-center justify-center rounded-[50%] w-12"
            shape="circle"
            color="white_A700"
            size="xl"
            variant="fill"
          >
            <Img className="h-3.5" src="images/img_plus.svg" alt="plus" />
          </Button>
          <Img
            className="rounded-[50%] w-12"
            src="images/img_frame37659.svg"
            alt="frame37659"
          />
        </div>
      </div>
      <div className="bg-white-A700 flex md:flex-col flex-row font-inter gap-4 items-center justify-between p-4 rounded-[12px] w-full">
        <div className="bg-gray-50_01 flex md:flex-1 flex-col items-center justify-start md:mt-0 my-4 p-4 rounded-[12px] w-[27%] md:w-full">
          <div className="flex flex-col gap-[26px] items-center justify-start mb-[274px] w-auto">
            <div className="flex flex-col items-center justify-start w-[98%] md:w-full">
              <div className="flex flex-row gap-[9px] items-start justify-between w-full">
                <div className="flex gap-2 items-start justify-start">
                  <Img
                    className="h-[45px] md:h-auto rounded-[50%] w-[45px]"
                    src="images/img_ellipse1_45x45.png"
                    alt="ellipseOne_One"
                  />
                  <div className="flex flex-col items-start justify-between w-full">
                    <Text
                      className="text-[15px] text-orange-600"
                      size="txtInterSemiBold15"
                    >
                      David Peters
                    </Text>
                    <Text
                      className="text-[9px] text-blue_gray-900"
                      size="txtInterSemiBold9"
                    >
                      Senior Developer
                    </Text>
                  </div>
                </div>
                <Img
                  className="h-[15px] w-4"
                  src="images/img_edit.svg"
                  alt="edit"
                />
              </div>
            </div>
            <Input
              name="groupOne"
              placeholder="Search Here..."
              value={grouponevalue}
              onChange={(e) => setGrouponevalue(e)}
              className="!placeholder:text-blue_gray-100 !text-blue_gray-100 leading-[normal] p-0 text-[15px] text-left w-full"
              wrapClassName="flex rounded-[20px] w-full"
              prefix={
                <CiSearch className="cursor-pointer h-[23px] w-[23px] mr-[10px] text-blue_gray-100" />
              }
              suffix={
                <CloseSVG
                  fillColor="#cdcdcd"
                  className="cursor-pointer h-[23px]"
                  onClick={() => setGrouponevalue("")}
                  style={{
                    visibility:
                      grouponevalue?.length <= 0 ? "hidden" : "visible",
                  }}
                  height={23}
                  width={23}
                  viewBox="0 0 23 23"
                />
              }
              color="white_A700"
              size="xs"
              variant="fill"
            ></Input>
            <Line className="bg-blue_gray-100 h-px w-[98%]" />
            <BuddyDashboardColumntime className="flex flex-col gap-5 items-center justify-start w-auto" />
            <Line className="bg-blue_gray-100 h-px w-[98%]" />
          </div>
        </div>
        <div className="bg-gray-50_01 flex md:flex-1 flex-col items-start justify-end md:mt-0 my-4 p-4 rounded-[12px] w-[72%] md:w-full">
          <div className="flex flex-row sm:gap-10 items-center justify-between ml-6 md:ml-[0] mt-[23px] w-[94%] md:w-full">
            <div className="flex flex-row gap-[7px] items-center justify-start">
              <div className="h-[45px] relative w-[45px]">
                <Img
                  className="h-[45px] m-auto rounded-[50%] w-[45px]"
                  src="images/img_ellipse1_7.png"
                  alt="ellipseOne_Three"
                />
                <div className="absolute bg-light_green-A700 bottom-[0] h-[15px] left-[0] rounded-[7px] w-[15px]"></div>
              </div>
              <Text
                className="text-[15px] text-blue_gray-900"
                size="txtInterSemiBold15Bluegray900"
              >
                Lisa Roy
              </Text>
            </div>
            <Img className="h-[21px]" src="images/img_user.svg" alt="user" />
          </div>
          <Line className="bg-blue_gray-100_01 h-px ml-6 md:ml-[0] mt-4 w-[94%]" />
          <BuddyDashboardRowellipsethree className="flex flex-row gap-1.5 items-end justify-start ml-6 md:ml-[0] mt-[31px] w-[39%] md:w-full" />
          <div className="flex flex-row gap-2 items-end justify-end md:ml-[0] ml-[519px] mt-5 pl-[11px] pt-[11px] w-[29%] md:w-full">
            <Button
              className="cursor-pointer font-medium leading-[normal] min-w-[166px] rounded-bl-[10px] rounded-tl-[10px] rounded-tr-[10px] text-base text-center"
              color="blue_gray_50"
              size="sm"
              variant="fill"
            >
              NO. I did not get it
            </Button>
            <Img
              className="h-[25px] md:h-auto mt-[9px] rounded-[50%] w-[25px]"
              src="images/img_ellipse1_25x25.png"
              alt="ellipseOne_Four"
            />
          </div>
          <div className="h-[19px] md:h-[39px] md:ml-[0] ml-[55px] mt-5 relative w-[86%] md:w-full">
            <div className="absolute h-[19px] inset-[0] justify-center m-auto w-full">
              <Line className="absolute bg-blue_gray-100_01 bottom-[42%] h-px inset-x-[0] mx-auto w-full" />
              <div className="absolute bg-gray-50_01 h-[19px] inset-[0] justify-center m-auto w-[13%]"></div>
            </div>
            <Text
              className="absolute h-full inset-[0] justify-center m-auto text-[15px] text-blue_gray-100_01 w-max"
              size="txtInterRegular15"
            >
              Yesterday
            </Text>
          </div>
          <div className="flex flex-row gap-1.5 items-end justify-start ml-6 md:ml-[0] mt-[19px] w-[38%] md:w-full">
            <Img
              className="h-[25px] md:h-auto mt-[53px] rounded-[50%] w-[25px]"
              src="images/img_ellipse3.png"
              alt="ellipseThree_One"
            />
            <div className="bg-blue_gray-50 flex flex-col items-start justify-end p-[9px] rounded-br-[10px] rounded-tl-[10px] rounded-tr-[10px]">
              <Text
                className="text-base text-blue_gray-900 w-[91%] sm:w-full"
                size="txtInterRegular16"
              >
                Ok, I will just sent it here. Plz be sure to fill the details by
                today end of the day.
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start ml-6 md:ml-[0] mt-5 w-1/4 md:w-full">
            <div className="flex flex-row gap-1.5 items-end justify-between w-full">
              <Img
                className="h-[25px] md:h-auto mt-[53px] rounded-[50%] w-[25px]"
                src="images/img_ellipse3.png"
                alt="ellipseThree_Two"
              />
              <div className="bg-blue_gray-50 flex flex-col gap-[9px] items-center justify-start pb-1 rounded-br-[10px] rounded-tl-[10px] rounded-tr-[10px]">
                <Img
                  className="h-11 md:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                  src="images/img_rectangle9.png"
                  alt="rectangleNine"
                />
                <Text
                  className="text-base text-blue_gray-900"
                  size="txtInterRegular16"
                >
                  project_report.pdf
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[488px] mt-5 w-[33%] md:w-full">
            <div className="flex flex-row gap-2 items-end justify-between w-full">
              <Input
                name="groupTen"
                placeholder="Ok. Should I send it over email as well after filling the details."
                className="font-medium leading-[normal] p-0 placeholder:text-orange-600 text-base text-left w-full"
                wrapClassName="rounded-bl-[10px] rounded-tl-[10px] rounded-tr-[10px]"
                type="email"
                color="blue_gray_50"
                size="md"
                variant="fill"
              ></Input>
              <Img
                className="h-[25px] md:h-auto mt-[53px] rounded-[50%] w-[25px]"
                src="images/img_ellipse1_25x25.png"
                alt="ellipseOne_Five"
              />
            </div>
          </div>
          <div className="flex flex-row gap-1.5 items-end justify-start ml-6 md:ml-[0] mt-5 w-[39%] md:w-full">
            <Img
              className="h-[25px] md:h-auto mt-[38px] rounded-[50%] w-[25px]"
              src="images/img_ellipse3.png"
              alt="ellipseThree_Three"
            />
            <div className="bg-blue_gray-50 flex flex-col items-center justify-start p-2 rounded-br-[10px] rounded-tl-[10px] rounded-tr-[10px]">
              <Text
                className="mb-0.5 mt-[5px] text-base text-blue_gray-900 w-[99%] sm:w-full"
                size="txtInterRegular16"
              >
                Ya. I’ll be adding more team members to it.
              </Text>
            </div>
          </div>
          <div className="flex flex-row gap-2 items-end justify-end md:ml-[0] ml-[644px] mt-5 w-[13%] md:w-full">
            <Button
              className="cursor-pointer font-medium leading-[normal] min-w-[63px] rounded-bl-[10px] rounded-tl-[10px] rounded-tr-[10px] text-base text-center"
              color="blue_gray_50"
              size="sm"
              variant="fill"
            >
              OK
            </Button>
            <Img
              className="h-[25px] md:h-auto mt-[9px] rounded-[50%] w-[25px]"
              src="images/img_ellipse1_25x25.png"
              alt="ellipseOne_Six"
            />
          </div>
          <div className="bg-blue_gray-100_01 flex flex-col items-center justify-start ml-6 md:ml-[0] mt-[37px] p-7 sm:px-5 rounded-[12px] shadow-bs5 w-[94%] md:w-full">
            <div className="flex md:flex-col flex-row gap-[13px] items-center justify-start w-[98%] md:w-full">
              <div className="bg-white-A700 flex sm:flex-col flex-row sm:gap-5 items-center justify-between p-2 rounded-[20px] w-[93%] md:w-full">
                <div className="flex gap-3 items-center">
                  {" "}
                  <Img
                    className="h-6 ml-4 sm:ml-[0] w-6"
                    src="images/img_menu.svg"
                    alt="menu"
                  />
                  <Text
                    className="text-[15px] text-blue_gray-100 tracking-[0.15px]"
                    size="txtInterRegular15Bluegray100"
                  >
                    Write Something...
                  </Text>
                </div>
                <div className="flex gap-2 items-center">
                  <Img
                    className="h-  w-6"
                    src="images/img_iconslinedarkpaperclip.svg"
                    alt="iconslinedarkpa"
                  />
                  <Img
                    className="h-5 "
                    src="images/img_camera.svg"
                    alt="camera"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_emojisvgrepocom.svg"
                    alt="emojisvgrepocom"
                  />
                </div>
              </div>
              <Button
                className="flex h-9 items-center justify-center md:mt-0 my-0.5 rounded-[50%] w-9"
                shape="circle"
                color="orange_600"
                size="xs"
                variant="fill"
              >
                <Img
                  className="h-[25px]"
                  src="images/img_save.svg"
                  alt="save"
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BuddyDashboardPage;
