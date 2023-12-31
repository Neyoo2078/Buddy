import React from "react";

import { Button, Img, Input, List, Text } from "components";
import SignUpScreenDashboardinput from "components/SignUpScreenDashboardinput";
import SignUpScreenOneDashboardinput from "components/SignUpScreenOneDashboardinput";

const SignupScreenOnePage = () => {
  return (
    <>
      <div className="bg-gray-50 flex sm:flex-col md:flex-col flex-row font-lexend sm:gap-5 md:gap-5 items-center mx-auto w-full">
        <div className="bg-white-A700 flex flex-col items-start justify-start p-12 md:px-5 w-1/2 md:w-full">
          <Img
            className="h-[25px] md:ml-[0] ml-[65px] w-[88px]"
            src="images/img_revvexlogo2.svg"
            alt="revvexlogoTwo"
          />
          <div className="flex flex-row gap-2 items-start justify-start md:ml-[0] ml-[66px] mt-[15px] w-[21%] md:w-full">
            <Img className="h-9" src="images/img_contrast.svg" alt="contrast" />
            <Text
              className="mt-1 sm:text-[21px] md:text-[23px] text-[25px] text-gray-800"
              size="txtLexendSemiBold25"
            >
              Buddy
            </Text>
          </div>
          <div className="flex flex-col font-mulish items-start justify-start mb-[352px] md:ml-[0] ml-[65px] mt-[126px] w-auto sm:w-full">
            <div className="flex flex-col md:gap-10 gap-24 items-start justify-start w-auto sm:w-full">
              <div className="flex flex-col gap-[37px] items-start justify-start w-auto sm:w-full">
                <div className="flex sm:flex-col flex-row gap-4 items-center justify-start w-auto sm:w-full">
                  <Button
                    className="flex h-6 items-center justify-center w-6"
                    shape="circle"
                    color="orange_600"
                    size="xs"
                    variant="fill"
                  >
                    <Img
                      className="h-4"
                      src="images/img_tablercheck.svg"
                      alt="tablercheck"
                    />
                  </Button>
                  <Text
                    className="leading-[24.00px] max-w-[422px] md:max-w-full text-blue_gray-600 text-lg tracking-[-0.20px]"
                    size="txtMulishRegular18"
                  >
                    Track real-time overview of company’s financial performance.
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-4 items-center justify-start w-auto sm:w-full">
                  <Button
                    className="flex h-6 items-center justify-center w-6"
                    shape="circle"
                    color="orange_600"
                    size="xs"
                    variant="fill"
                  >
                    <Img
                      className="h-4"
                      src="images/img_tablercheck.svg"
                      alt="tablercheck_One"
                    />
                  </Button>
                  <Text
                    className="leading-[24.00px] md:max-w-full max-w-md text-blue_gray-600 text-lg tracking-[-0.20px]"
                    size="txtMulishRegular18"
                  >
                    Track created projects budget against actual revenue and
                    expenses.
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-4 items-center justify-start w-auto sm:w-full">
                  <Button
                    className="flex h-6 items-center justify-center w-6"
                    shape="circle"
                    color="orange_600"
                    size="xs"
                    variant="fill"
                  >
                    <Img
                      className="h-4"
                      src="images/img_tablercheck.svg"
                      alt="tablercheck_Two"
                    />
                  </Button>
                  <Text
                    className="leading-[24.00px] md:max-w-full max-w-md text-blue_gray-600 text-lg tracking-[-0.20px]"
                    size="txtMulishRegular18"
                  >
                    Highlighted reports on budget deficit and surplus,
                    accounting dimensions, balance sheets and real-time sales
                    margin estimation.
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-auto">
                <div className="flex flex-col items-start justify-start p-1 w-auto">
                  <Text
                    className="text-[13px] text-blue_gray-400 text-right tracking-[-0.06px] w-auto"
                    size="txtMulishRegular13"
                  >
                    © 2022 Revvex. All rights reserved
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 flex flex-col font-mulish md:gap-10 gap-36 items-end justify-end p-[97px] md:px-5 w-[51%] md:w-full">
          <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-start mr-3.5 mt-[63px] p-[50px] md:px-10 sm:px-5 rounded-lg shadow-bs3 w-auto sm:w-full">
            <div className="flex flex-col md:gap-10 gap-16 items-start justify-start w-auto sm:w-full">
              <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                <div className="flex flex-col gap-[33px] items-start justify-start w-auto sm:w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-auto">
                      <Text
                        className="text-2xl md:text-[22px] text-gray-900 text-right sm:text-xl tracking-[-0.26px] w-auto"
                        size="txtMulishBold24"
                      >
                        Register your account
                      </Text>
                      <div className="flex flex-col items-start justify-start pr-1 py-1 w-auto">
                        <Text
                          className="text-[13px] text-blue_gray-600 tracking-[-0.06px] w-auto"
                          size="txtMulishRegular13Bluegray600"
                        >
                          Proceed to create account and setup your organization
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[30px] items-start justify-start w-auto sm:w-full">
                      <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                        <div className="flex flex-col gap-3 items-start justify-start w-auto sm:w-full">
                          <List
                            className="sm:flex-col flex-row gap-[19px] grid grid-cols-2 justify-start w-auto sm:w-full"
                            orientation="horizontal"
                          >
                            <SignUpScreenOneDashboardinput className="flex flex-col items-start justify-start w-[185px]" />
                            <SignUpScreenOneDashboardinput
                              className="flex flex-col items-start justify-start w-[185px]"
                              firstnamelabel="Last Name"
                            />
                          </List>
                          <SignUpScreenDashboardinput className="flex flex-col items-start justify-start w-auto sm:w-full" />
                          <SignUpScreenDashboardinput className="flex flex-col items-start justify-start w-auto sm:w-full" />
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer font-semibold rounded-md text-center text-sm tracking-[-0.08px] w-[389px]"
                        color="gray_200"
                        size="md"
                        variant="fill"
                      >
                        Create account
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-auto sm:w-full">
                    <Text
                      className="leading-[19.00px] max-w-[367px] md:max-w-full text-[13px] text-blue_gray-400 tracking-[-0.06px]"
                      size="txtMulishRegular13"
                    >
                      <span className="text-blue_gray-400 font-mulish text-left font-normal">
                        By clicking the button above, you agree to our{" "}
                      </span>
                      <span className="text-orange-600 font-mulish text-left font-normal">
                        Terms of Service
                      </span>
                      <span className="text-blue_gray-400 font-mulish text-left font-normal">
                        {" "}
                        and{" "}
                      </span>
                      <span className="text-orange-600 font-mulish text-left font-normal">
                        Privacy Policy
                      </span>
                      <span className="text-blue_gray-400 font-mulish text-left font-normal">
                        .
                      </span>
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start w-auto">
                <div className="flex flex-col items-start justify-start p-1 w-auto">
                  <a
                    href="javascript:"
                    className="text-blue_gray-600 text-right text-sm tracking-[-0.06px] w-auto"
                  >
                    <Text size="txtMulishRegular14">
                      Already have an account?
                    </Text>
                  </a>
                </div>
                <div className="flex flex-col items-center justify-start p-1 w-auto">
                  <a
                    href="javascript:"
                    className="text-orange-600 text-right text-sm tracking-[-0.08px] w-auto"
                  >
                    <Text size="txtMulishMedium14">Login</Text>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Button
            className="cursor-pointer flex items-center justify-center min-w-[118px] mr-[13px] rounded-[25px] shadow-bs4"
            rightIcon={
              <Img
                className="h-[19px] mb-px ml-3"
                src="images/img_bichat.svg"
                alt="bi:chat"
              />
            }
            color="orange_600"
            size="lg"
            variant="fill"
          >
            <div className="!text-white-A700 font-semibold text-left text-sm tracking-[-0.08px]">
              Get Help
            </div>
          </Button>
        </div>
      </div>
    </>
  );
};

export default SignupScreenOnePage;
