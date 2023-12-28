import React from "react";

import { Button, Img, Text } from "components";

const SignedupPage = () => {
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
        <div className="bg-gray-50 flex flex-col font-mulish items-center justify-start p-[108px] md:px-5 w-[51%] md:w-full">
          <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-center justify-end mb-[253px] mt-[92px] p-[49px] md:px-10 sm:px-5 rounded-lg shadow-bs3 w-[99%] md:w-full">
            <Img
              className="h-[117px] mt-2 w-[117px]"
              src="images/img_sentemail1.svg"
              alt="sentemailOne"
            />
            <div className="flex flex-col gap-2 items-center justify-center mt-1 w-auto">
              <Text
                className="text-2xl md:text-[22px] text-gray-900 text-right sm:text-xl tracking-[-0.26px] w-auto"
                size="txtMulishBold24"
              >
                Check your mailbox !
              </Text>
              <div className="flex flex-col items-start justify-start pr-1 py-1 w-auto">
                <Text
                  className="leading-[24.00px] max-w-[306px] md:max-w-full text-blue_gray-600 text-center text-sm tracking-[-0.06px]"
                  size="txtMulishRegular14"
                >
                  <span className="text-blue_gray-600 font-mulish font-normal">
                    We’ve sent an email to{" "}
                  </span>
                  <span className="text-blue_gray-900_01 font-mulish font-normal">
                    seyi@zojatech.com{" "}
                  </span>
                  <span className="text-blue_gray-600 font-mulish font-normal">
                    with a{" "}
                  </span>
                  <span className="text-blue_gray-600 font-mulish font-normal">
                    an OTP
                  </span>
                  <span className="text-blue_gray-600 font-mulish font-normal">
                    {" "}
                    to confirm your account. Check your inbox to activate your
                    account.
                  </span>
                </Text>
              </div>
            </div>
            <Button
              className="cursor-pointer font-semibold mt-[17px] rounded-md text-center text-sm tracking-[-0.08px] w-40"
              color="orange_600"
              size="md"
              variant="fill"
            >
              Confirm Email
            </Button>
            <div className="flex flex-row items-start justify-start mt-[34px] w-auto">
              <div className="flex flex-col items-start justify-start p-1 w-auto">
                <Text
                  className="text-blue_gray-600 text-right text-sm tracking-[-0.06px] w-auto"
                  size="txtMulishRegular14"
                >
                  Didn’t get the mail?
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start p-1 w-auto">
                <Text
                  className="text-orange-600 text-right text-sm tracking-[-0.08px] w-auto"
                  size="txtMulishMedium14"
                >
                  Resend
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignedupPage;
