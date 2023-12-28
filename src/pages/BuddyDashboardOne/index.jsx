import React from "react";
import { Button, Img, Input, Line, List, Text } from "components";
import BuddyDashboardOneCard from "components/BuddyDashboardOneCard";
import BuddyDashboardOneCard1 from "components/BuddyDashboardOneCard1";
import BuddyDashboardOneCard2 from "components/BuddyDashboardOneCard2";
import { CloseSVG } from "../../assets/images";
import { motion } from "framer-motion";

const BuddyDashboardOnePage = () => {
  const [frame37662value, setFrame37662value] = React.useState("");

  //  page Transition Animation
  const pageAnimate = {
    initial: { x: 1000, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.2,
        ease: "linear",
      },
    },
  };
  return (
    <>
      <motion.div
        variants={pageAnimate}
        initial="initial"
        animate="animate"
        exit="exit"
        className="flex flex-1 flex-col gap-8 items-center justify-start w-full"
      >
        <div className="flex md:flex-col flex-row gap-4 items-center justify-between max-w-[1134px] w-full">
          <Text
            className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-800 w-auto"
            size="txtLexendBold25"
          >
            My Portfolio
          </Text>
          <div className="flex sm:flex-1 sm:flex-col flex-row gap-4 items-center justify-start w-auto sm:w-full">
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
        <div className="flex md:flex-col flex-row gap-8 items-center justify-between w-full">
          <div className="flex md:flex-1 flex-col gap-4 items-center justify-start w-[69%] md:w-full">
            <List
              className="sm:flex-col flex-row gap-4 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start max-w-[772px] w-full"
              orientation="horizontal"
            >
              <BuddyDashboardOneCard className="bg-white-A700 flex flex-row gap-[65px] items-center justify-start p-4 rounded-[12px] w-[246px]" />
              <BuddyDashboardOneCard1 className="bg-white-A700 flex flex-row gap-[65px] items-center justify-start p-4 rounded-[12px] w-[246px]" />
              <BuddyDashboardOneCard2 className="bg-white-A700 flex flex-row gap-[65px] items-center justify-start p-4 rounded-[12px] w-[246px]" />
            </List>
            <div className="bg-white-A700 flex flex-col gap-5 h-80 md:h-auto items-start justify-start max-w-[772px] p-6 sm:px-5 rounded-[16px] w-full">
              <div className="flex sm:flex-col flex-row gap-5 items-start justify-between w-full">
                <Text
                  className="text-gray-800 text-xl w-auto"
                  size="txtLexendBold20"
                >
                  Overview
                </Text>
                <div className="flex sm:flex-1 sm:flex-col flex-row gap-2 items-start justify-start w-auto sm:w-full">
                  <Button
                    className="!text-white-A700 cursor-pointer font-medium min-w-[112px] text-center text-xs tracking-[0.24px]"
                    shape="round"
                    color="orange_600"
                    size="xs"
                    variant="fill"
                  >
                    Robbin Hood
                  </Button>
                  <Button
                    className="!text-gray-600 cursor-pointer font-medium min-w-[101px] text-center text-xs tracking-[0.24px]"
                    shape="round"
                    color="gray_100"
                    size="xs"
                    variant="fill"
                  >
                    Amreitrade
                  </Button>
                  <Button
                    className="!text-gray-600 cursor-pointer font-medium min-w-[78px] text-center text-xs tracking-[0.24px]"
                    shape="round"
                    color="gray_100"
                    size="xs"
                    variant="fill"
                  >
                    Fidelity
                  </Button>
                  <Button
                    className="!text-gray-600 cursor-pointer font-medium min-w-[78px] text-center text-xs tracking-[0.24px]"
                    shape="round"
                    color="gray_100"
                    size="xs"
                    variant="fill"
                  >
                    Charles
                  </Button>
                </div>
              </div>
              <div className="relative w-full">
                <div className="flex flex-col gap-6 h-56 md:h-auto items-center justify-start m-auto w-auto">
                  <div className="flex sm:flex-col flex-row gap-2 items-center justify-start max-w-[724px] w-full">
                    <Text
                      className="text-gray-500_01 text-xs w-auto"
                      size="txtLexendLight12"
                    >
                      1000
                    </Text>
                    <Line className="bg-gray-900_14 h-px w-[96%]" />
                  </div>
                  <div className="relative w-full">
                    <div className="flex flex-col items-center justify-start m-auto w-full">
                      <div className="flex flex-col gap-6 items-center justify-start w-full">
                        <div className="flex sm:flex-col flex-row gap-2 items-center justify-start max-w-[724px] w-full">
                          <Text
                            className="text-gray-500_01 text-xs w-auto"
                            size="txtLexendLight12"
                          >
                            800
                          </Text>
                          <Line className="bg-gray-900_14 h-px w-[96%]" />
                        </div>
                        <div className="flex sm:flex-col flex-row gap-2 items-center justify-start max-w-[724px] w-full">
                          <Text
                            className="text-gray-500_01 text-xs w-auto"
                            size="txtLexendLight12"
                          >
                            600
                          </Text>
                          <Line className="bg-gray-900_14 h-px w-[96%]" />
                        </div>
                        <div className="flex sm:flex-col flex-row gap-2 items-center justify-start max-w-[724px] w-full">
                          <Text
                            className="text-gray-500_01 text-xs w-auto"
                            size="txtLexendLight12"
                          >
                            400
                          </Text>
                          <Line className="bg-gray-900_14 h-px w-[96%]" />
                        </div>
                        <div className="flex sm:flex-col flex-row gap-2 items-center justify-start max-w-[724px] w-full">
                          <Text
                            className="text-gray-500_01 text-xs w-auto"
                            size="txtLexendLight12"
                          >
                            200
                          </Text>
                          <Line className="bg-gray-900_14 h-px w-[96%]" />
                        </div>
                        <div className="flex sm:flex-col flex-row gap-2 items-center justify-start max-w-[724px] w-full">
                          <Text
                            className="text-gray-500_01 text-xs w-auto"
                            size="txtLexendLight12"
                          >
                            0
                          </Text>
                          <Line className="bg-blue_gray-100_02 h-px w-[96%]" />
                        </div>
                      </div>
                    </div>
                    <Img
                      className="absolute h-[170px] right-[1%] top-[0] w-[670px]"
                      src="images/img_frame37682.svg"
                      alt="frame37682"
                    />
                  </div>
                </div>
                <div className="absolute bottom-[0] flex flex-row gap-[35.7px] items-start justify-between max-w-[670px] right-[1%] w-full">
                  <Text
                    className="text-[11px] text-gray-500_01 uppercase w-auto"
                    size="txtLexendLight11"
                  >
                    Jan
                  </Text>
                  <Text
                    className="text-[11px] text-gray-500_01 uppercase w-auto"
                    size="txtLexendLight11"
                  >
                    Feb
                  </Text>
                  <Text
                    className="text-[11px] text-gray-500_01 uppercase w-auto"
                    size="txtLexendLight11"
                  >
                    Mar
                  </Text>
                  <Text
                    className="text-[11px] text-gray-500_01 uppercase w-auto"
                    size="txtLexendLight11"
                  >
                    Apr
                  </Text>
                  <Text
                    className="text-[11px] text-gray-500_01 uppercase w-auto"
                    size="txtLexendLight11"
                  >
                    May
                  </Text>
                  <Text
                    className="text-[11px] text-gray-500_01 uppercase w-auto"
                    size="txtLexendLight11"
                  >
                    Jun
                  </Text>
                  <Text
                    className="text-[11px] text-gray-500_01 uppercase w-auto"
                    size="txtLexendLight11"
                  >
                    Jul
                  </Text>
                  <Text
                    className="text-[11px] text-gray-500_01 uppercase w-auto"
                    size="txtLexendLight11"
                  >
                    Aug
                  </Text>
                  <Text
                    className="text-[11px] text-gray-500_01 uppercase w-auto"
                    size="txtLexendLight11"
                  >
                    Sep
                  </Text>
                  <Text
                    className="text-[11px] text-gray-500_01 uppercase w-auto"
                    size="txtLexendLight11"
                  >
                    Oct
                  </Text>
                  <Text
                    className="text-[11px] text-gray-500_01 uppercase w-auto"
                    size="txtLexendLight11"
                  >
                    Nov
                  </Text>
                  <Text
                    className="text-[11px] text-gray-500_01 uppercase w-auto"
                    size="txtLexendLight11"
                  >
                    Dec
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-col gap-5 items-start justify-start max-w-[772px] p-6 sm:px-5 rounded-[16px] w-full">
              <Text
                className="text-gray-800 text-xl w-auto"
                size="txtLexendBold20"
              >
                Trending Posts
              </Text>
              <List
                className="sm:flex-col flex-row gap-4 grid md:grid-cols-1 grid-cols-2 justify-start w-auto md:w-full"
                orientation="horizontal"
              >
                <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-col gap-5 items-start justify-start p-4 rounded-[12px] w-[354px]">
                  <div className="flex flex-col gap-2 items-start justify-start w-full">
                    <Text
                      className="leading-[140.00%] max-w-[322px] md:max-w-full text-gray-800 text-lg"
                      size="txtLexendSemiBold18"
                    >
                      8 Upcoming Influencer Marketing Trends and Benefits
                    </Text>
                    <Text
                      className="leading-[150.00%] max-w-[322px] md:max-w-full text-gray-600 text-sm"
                      size="txtLexendLight14"
                    >
                      <>
                        Marketing is evolving. It&#39;s changing from a one-way
                        street to a two-way conversa…
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-start justify-start w-auto">
                    <Button
                      className="cursor-pointer font-medium min-w-[64px] rounded-[13px] text-center text-sm tracking-[0.28px]"
                      shape="round"
                      color="gray_100"
                      size="xs"
                      variant="fill"
                    >
                      ❤️ 260
                    </Button>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[66px] rounded-[13px]"
                      leftIcon={
                        <Img
                          className="h-4 mr-1 my-px"
                          src="images/img_television.svg"
                          alt="television"
                        />
                      }
                      shape="round"
                      color="gray_100"
                      size="xs"
                      variant="fill"
                    >
                      <div className="font-medium text-left text-sm tracking-[0.28px]">
                        234{" "}
                      </div>
                    </Button>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[64px] rounded-[13px]"
                      leftIcon={
                        <Img
                          className="h-4 mr-1 my-px"
                          src="images/img_next_1.svg"
                          alt="next 1"
                        />
                      }
                      shape="round"
                      color="gray_100"
                      size="xs"
                      variant="fill"
                    >
                      <div className="font-medium text-left text-sm tracking-[0.28px]">
                        123
                      </div>
                    </Button>
                  </div>
                </div>
                <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-col gap-5 items-start justify-start p-4 rounded-[12px] w-[354px]">
                  <div className="flex flex-col gap-2 items-start justify-start w-full">
                    <Text
                      className="leading-[140.00%] max-w-[322px] md:max-w-full text-gray-800 text-lg"
                      size="txtLexendSemiBold18"
                    >
                      How Influencer Marketing Affects Consumer Buying Behavior
                    </Text>
                    <Text
                      className="leading-[150.00%] max-w-[322px] md:max-w-full text-gray-600 text-sm"
                      size="txtLexendLight14"
                    >
                      As influencer marketing continues to grow, consumers have
                      been turning to their…
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-start justify-start w-auto">
                    <Button
                      className="cursor-pointer font-medium min-w-[64px] rounded-[13px] text-center text-sm tracking-[0.28px]"
                      shape="round"
                      color="gray_100"
                      size="xs"
                      variant="fill"
                    >
                      ❤️ 260
                    </Button>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[66px] rounded-[13px]"
                      leftIcon={
                        <Img
                          className="h-4 mr-1 my-px"
                          src="images/img_television.svg"
                          alt="television"
                        />
                      }
                      shape="round"
                      color="gray_100"
                      size="xs"
                      variant="fill"
                    >
                      <div className="font-medium text-left text-sm tracking-[0.28px]">
                        234{" "}
                      </div>
                    </Button>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[64px] rounded-[13px]"
                      leftIcon={
                        <Img
                          className="h-4 mr-1 my-px"
                          src="images/img_next_1.svg"
                          alt="next 1"
                        />
                      }
                      shape="round"
                      color="gray_100"
                      size="xs"
                      variant="fill"
                    >
                      <div className="font-medium text-left text-sm tracking-[0.28px]">
                        123
                      </div>
                    </Button>
                  </div>
                </div>
              </List>
            </div>
            <div className="bg-white-A700 flex flex-col gap-4 items-start justify-start max-w-[772px] p-5 rounded-[16px] w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Text
                  className="text-gray-800 text-xl w-auto"
                  size="txtLexendBold20"
                >
                  Potential Members
                </Text>
              </div>
              <List
                className="sm:flex-col flex-row gap-2 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-start w-full"
                orientation="horizontal"
              >
                <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col gap-2 h-full items-center justify-start px-4 py-3 rounded-[12px] w-full">
                  <div className="flex flex-col gap-2 items-center justify-start w-auto">
                    <Img
                      className="h-10 md:h-auto rounded-[50%] w-10"
                      src="images/img_avatar.png"
                      alt="avatar"
                    />
                    <div className="flex flex-col items-center justify-start w-[105px]">
                      <Text
                        className="text-center text-gray-800 text-sm w-full"
                        size="txtLexendSemiBold14"
                      >
                        Wanda Parker
                      </Text>
                      <Text
                        className="text-[11px] text-center text-gray-600 w-full"
                        size="txtLexendRegular11"
                      >
                        @ashking1234
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-center w-auto">
                    <Img
                      className="h-5 w-5"
                      src="images/img_growth_teal_a400.svg"
                      alt="growth"
                    />
                    <Text
                      className="text-base text-gray-800 w-auto"
                      size="txtLexendBold16"
                    >
                      10.3%
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col gap-2 h-full items-center justify-start px-4 py-3 rounded-[12px] w-full">
                  <div className="flex flex-col gap-2 items-center justify-start w-auto">
                    <Img
                      className="h-10 md:h-auto rounded-[50%] w-10"
                      src="images/img_avatar_40x40.png"
                      alt="avatar"
                    />
                    <div className="flex flex-col items-center justify-start w-[105px]">
                      <Text
                        className="text-center text-gray-800 text-sm w-full"
                        size="txtLexendSemiBold14"
                      >
                        Terry Brown
                      </Text>
                      <Text
                        className="text-[11px] text-center text-gray-600 w-full"
                        size="txtLexendRegular11"
                      >
                        @ashking1234
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-center w-auto">
                    <Img
                      className="h-5 w-5"
                      src="images/img_growth_teal_a400.svg"
                      alt="growth"
                    />
                    <Text
                      className="text-base text-gray-800 w-auto"
                      size="txtLexendBold16"
                    >
                      9.8%
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col gap-2 h-full items-center justify-start px-4 py-3 rounded-[12px] w-full">
                  <div className="flex flex-col gap-2 items-center justify-start w-auto">
                    <Img
                      className="h-10 md:h-auto rounded-[50%] w-10"
                      src="images/img_avatar_1.png"
                      alt="avatar"
                    />
                    <div className="flex flex-col items-center justify-start w-[105px]">
                      <Text
                        className="text-center text-gray-800 text-sm w-full"
                        size="txtLexendSemiBold14"
                      >
                        Lucas Holmes
                      </Text>
                      <Text
                        className="text-[11px] text-center text-gray-600 w-full"
                        size="txtLexendRegular11"
                      >
                        @ashking1234
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-center w-auto">
                    <Img
                      className="h-5 w-5"
                      src="images/img_growth_teal_a400.svg"
                      alt="growth"
                    />
                    <Text
                      className="text-base text-gray-800 w-auto"
                      size="txtLexendBold16"
                    >
                      6.5%
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col gap-2 h-full items-center justify-start px-4 py-3 rounded-[12px] w-full">
                  <div className="flex flex-col gap-2 items-center justify-start w-auto">
                    <Img
                      className="h-10 md:h-auto rounded-[50%] w-10"
                      src="images/img_avatar_2.png"
                      alt="avatar"
                    />
                    <div className="flex flex-col items-center justify-start w-[105px]">
                      <Text
                        className="text-center text-gray-800 text-sm w-full"
                        size="txtLexendSemiBold14"
                      >
                        Janice Miller
                      </Text>
                      <Text
                        className="text-[11px] text-center text-gray-600 w-full"
                        size="txtLexendRegular11"
                      >
                        @ashking1234
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-center w-auto">
                    <Img
                      className="h-5 w-5"
                      src="images/img_growth_teal_a400.svg"
                      alt="growth"
                    />
                    <Text
                      className="text-base text-gray-800 w-auto"
                      size="txtLexendBold16"
                    >
                      8.6%
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col gap-2 h-full items-center justify-start px-4 py-3 rounded-[12px] w-full">
                  <div className="flex flex-col gap-2 items-center justify-start w-auto">
                    <Img
                      className="h-10 md:h-auto rounded-[50%] w-10"
                      src="images/img_avatar_3.png"
                      alt="avatar"
                    />
                    <div className="flex flex-col items-center justify-start w-[105px]">
                      <Text
                        className="text-center text-gray-800 text-sm w-full"
                        size="txtLexendSemiBold14"
                      >
                        Terry Brown
                      </Text>
                      <Text
                        className="text-[11px] text-center text-gray-600 w-full"
                        size="txtLexendRegular11"
                      >
                        @ashking1234
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-center w-auto">
                    <Img
                      className="h-5 w-5"
                      src="images/img_growth_teal_a400.svg"
                      alt="growth"
                    />
                    <Text
                      className="text-base text-gray-800 w-auto"
                      size="txtLexendBold16"
                    >
                      9.8%
                    </Text>
                  </div>
                </div>
              </List>
            </div>
          </div>
          <div className="flex flex-col gap-4 h-[940px] md:h-auto items-start justify-start w-auto">
            <div className="bg-white-A700 flex flex-col gap-4 items-start justify-start p-5 rounded-[16px] w-[330px]">
              <div className="flex flex-row gap-4 items-center justify-between w-full">
                <Text
                  className="text-gray-800 text-xl w-auto"
                  size="txtLexendBold20"
                >
                  Watchlist
                </Text>
                <a
                  href="javascript:"
                  className="text-orange-600 text-xs uppercase w-auto"
                >
                  <Text size="txtLexendSemiBold12">View All</Text>
                </a>
              </div>
              <List
                className="flex flex-col gap-3 items-start w-full"
                orientation="vertical"
              >
                <div className="bg-gray-100 flex flex-1 flex-row items-center justify-between my-0 px-4 py-3 rounded-[12px] w-full">
                  <div className="flex flex-col gap-2 items-start justify-start w-auto">
                    <div className="flex flex-row gap-6 items-center justify-start w-auto">
                      <Text
                        className="text-gray-800 text-lg w-auto"
                        size="txtLexendSemiBold18"
                      >
                        AAPL
                      </Text>
                      <Img
                        className="h-6 w-6"
                        src="images/img_arrowright.svg"
                        alt="arrowright"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-[15px] text-gray-500_01 w-auto"
                        size="txtLexendMedium15"
                      >
                        $142.90
                      </Text>
                      <Text
                        className="text-green-A700 text-xs w-auto"
                        size="txtLexendMedium12"
                      >
                        +0.47%
                      </Text>
                    </div>
                  </div>
                  <Img
                    className="h-[59px] w-[154px]"
                    src="images/img_group37618.svg"
                    alt="group37618"
                  />
                </div>
                <div className="bg-gray-100 flex flex-1 flex-row items-center justify-between my-0 px-4 py-3 rounded-[12px] w-full">
                  <div className="flex flex-col gap-2 items-start justify-start w-24">
                    <div className="flex flex-row gap-6 items-center justify-between w-full">
                      <Text
                        className="text-gray-800 text-lg w-auto"
                        size="txtLexendSemiBold18"
                      >
                        BPL
                      </Text>
                      <Img
                        className="h-6 w-6"
                        src="images/img_downarrow.svg"
                        alt="downarrow"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-[15px] text-gray-500_01 w-auto"
                        size="txtLexendMedium15"
                      >
                        $142.90
                      </Text>
                      <Text
                        className="text-red-A200 text-xs w-auto"
                        size="txtLexendMedium12RedA200"
                      >
                        -0.78%
                      </Text>
                    </div>
                  </div>
                  <Img
                    className="h-[59px] w-[154px]"
                    src="images/img_group37618_amber_600.svg"
                    alt="group37618"
                  />
                </div>
              </List>
            </div>
            <div className="bg-white-A700 flex flex-col gap-4 items-start justify-start p-5 rounded-[16px] w-[330px]">
              <div className="flex flex-col items-center justify-start w-full">
                <Text
                  className="text-gray-800 text-xl w-auto"
                  size="txtLexendBold20"
                >
                  Revenue
                </Text>
              </div>
              <List
                className="flex flex-col gap-3 items-start w-full"
                orientation="vertical"
              >
                <div className="border border-blue_gray-50 border-solid flex flex-1 flex-row items-center justify-between my-0 px-4 py-2 rounded-[12px] shadow-bs6 w-full">
                  <div className="flex flex-col items-start justify-center w-auto">
                    <Text
                      className="text-gray-800 text-lg w-auto"
                      size="txtLexendSemiBold18"
                    >
                      $4,000
                    </Text>
                    <Text
                      className="text-gray-500_01 text-xs tracking-[0.12px] w-auto"
                      size="txtLexendRegular12"
                    >
                      Recently Added Pages
                    </Text>
                  </div>
                  <Button
                    className="flex h-12 items-center justify-center rounded-[50%] w-12"
                    shape="circle"
                    color="blue_600_14"
                    size="lg"
                    variant="fill"
                  >
                    <Img
                      className="h-5"
                      src="images/img_facebook.svg"
                      alt="facebook"
                    />
                  </Button>
                </div>
                <div className="border border-blue_gray-50 border-solid flex flex-1 flex-row items-center justify-between my-0 px-4 py-2 rounded-[12px] shadow-bs6 w-full">
                  <div className="flex flex-col items-start justify-center w-auto">
                    <Text
                      className="text-gray-800 text-lg w-auto"
                      size="txtLexendSemiBold18"
                    >
                      $2,120
                    </Text>
                    <Text
                      className="text-gray-500_01 text-xs tracking-[0.12px] w-auto"
                      size="txtLexendRegular12"
                    >
                      Video Monetization
                    </Text>
                  </div>
                  <Button
                    className="flex h-12 items-center justify-center rounded-[50%] w-12"
                    shape="circle"
                    color="red_600_14"
                    size="lg"
                    variant="fill"
                  >
                    <Img
                      className="h-5"
                      src="images/img_instagram.svg"
                      alt="instagram"
                    />
                  </Button>
                </div>
                <div className="border border-blue_gray-50 border-solid flex flex-1 flex-row items-center justify-between my-0 px-4 py-2 rounded-[12px] shadow-bs6 w-full">
                  <div className="flex flex-col items-start justify-center w-auto">
                    <Text
                      className="text-gray-800 text-lg w-auto"
                      size="txtLexendSemiBold18"
                    >
                      $1,752
                    </Text>
                    <Text
                      className="text-gray-500_01 text-xs tracking-[0.12px] w-auto"
                      size="txtLexendRegular12"
                    >
                      Community Buildup
                    </Text>
                  </div>
                  <Button
                    className="flex h-12 items-center justify-center rounded-[50%] w-12"
                    shape="circle"
                    color="blue_800_14"
                    size="lg"
                    variant="fill"
                  >
                    <Img
                      className="h-5"
                      src="images/img_linkedin.svg"
                      alt="linkedin"
                    />
                  </Button>
                </div>
              </List>
            </div>
            <div className="bg-white-A700 flex flex-col gap-4 h-[322px] md:h-auto items-start justify-start p-5 rounded-[16px] w-[330px]">
              <Text
                className="text-gray-800 text-xl w-auto"
                size="txtLexendBold20"
              >
                Trending News
              </Text>
              <List
                className="flex flex-col gap-3 items-start w-auto"
                orientation="vertical"
              >
                <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-row gap-2 items-center justify-start my-0 p-3 rounded-[12px] w-[290px]">
                  <Img
                    className="h-12 md:h-auto object-cover rounded-lg w-12"
                    src="images/img_rectangle109.png"
                    alt="rectangle109"
                  />
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-gray-800 text-sm w-full"
                      size="txtLexendSemiBold14"
                    >
                      Russia & Ukraine War
                    </Text>
                    <Text
                      className="text-gray-600 text-xs w-full"
                      size="txtLexendLight12Gray600"
                    >
                      <>Marketing is evolving. It&#39;s chang...</>
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-row gap-2 items-center justify-start my-0 p-3 rounded-[12px] w-[290px]">
                  <Img
                    className="h-12 md:h-auto object-cover rounded-lg w-12"
                    src="images/img_rectangle109_48x48.png"
                    alt="rectangle109"
                  />
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-gray-800 text-sm w-full"
                      size="txtLexendSemiBold14"
                    >
                      Elon Musk bought Twitter
                    </Text>
                    <Text
                      className="text-gray-600 text-xs w-full"
                      size="txtLexendLight12Gray600"
                    >
                      Twitter is the most useful social pl...
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-row gap-2 items-center justify-start my-0 p-3 rounded-[12px] w-[290px]">
                  <Img
                    className="h-12 md:h-auto object-cover rounded-lg w-12"
                    src="images/img_rectangle109_1.png"
                    alt="rectangle109"
                  />
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-gray-800 text-sm w-full"
                      size="txtLexendSemiBold14"
                    >
                      Fuel Crisis Everywhere
                    </Text>
                    <Text
                      className="text-gray-600 text-xs w-full"
                      size="txtLexendLight12Gray600"
                    >
                      Due to covid situation in 2020 the...
                    </Text>
                  </div>
                </div>
              </List>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default BuddyDashboardOnePage;
