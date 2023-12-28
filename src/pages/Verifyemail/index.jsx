import React from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button, Img, Text } from "components";
import OtpInput from "components/Otp/Otp";
import axios from "axios";
import { toast } from "react-toastify";

const VerifyemailPage = () => {
  const navigate = useNavigate();

  const [otpValue, setOtpValue] = useState("");
  const [verifyingOtp, setverifyingOtp] = useState(false);

  const BaseUrl = process.env.REACT_APP_BASE_URL;

  const handleOtpChange = (otp) => {
    setOtpValue(otp);
  };

  const email = JSON.parse(localStorage.getItem("emailuser"));

  // Verify Otp Handler
  const ConfirmOtp = async () => {
    try {
      setverifyingOtp(true);
      const res = await axios.post(`${BaseUrl}/api/admin/verify-otp`, {
        otp: otpValue,
      });

      navigate("/verifyemailone");
    } catch (error) {
      setverifyingOtp(false);
      toast.error(error.response.data.message);
    }
  };

  // Initial Otp Verification
  useEffect(() => {
    if (otpValue.length === 4) {
      ConfirmOtp();
    }
  }, [otpValue]);

  // Reset OTP Handler
  const resendOtp = async () => {
    try {
      const res = await axios.post(`${BaseUrl}/api/admin/resend-otp`, {
        email,
      });
      toast.success(res.data.message);
    } catch (error) {
      if (error) {
        if (error) {
          toast.error(error?.response?.data?.message);
        }
      }
    }
  };
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
        <div className="bg-gray-50 flex flex-col font-mulish items-end justify-start p-[113px] md:px-5 w-[51%] md:w-full">
          <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-start mb-[287px] mt-[87px] p-[68px] md:px-10 sm:px-5 rounded-lg shadow-bs3 w-auto sm:w-full">
            <div className="flex flex-col items-start justify-start w-auto">
              <div className="flex flex-col gap-[30px] items-start justify-start w-auto">
                <div className="flex flex-col gap-[34px] items-start justify-start w-auto">
                  <div className="flex flex-col gap-6 items-start justify-start w-auto">
                    <div className="flex flex-col items-start justify-start w-auto">
                      <div className="flex flex-col gap-2 items-start justify-start w-auto">
                        <Text
                          className="text-2xl md:text-[22px] text-gray-900 text-right sm:text-xl tracking-[-0.26px] w-auto"
                          size="txtMulishBold24"
                        >
                          Verify your email
                        </Text>
                        <div className="flex flex-col items-start justify-start pr-1 py-1 w-auto">
                          <Text
                            className="leading-[19.00px] max-w-[305px] md:max-w-full text-[13px] text-blue_gray-600 tracking-[-0.06px]"
                            size="txtMulishMedium13"
                          >
                            <span className="text-blue_gray-600 font-mulish text-left font-medium">
                              A four digit OTP code has been sent to your email{" "}
                            </span>
                            <span className="text-orange-600 font-mulish text-left font-medium">
                              {email}
                            </span>
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-6 items-start justify-start w-auto">
                      <OtpInput onOtpChange={handleOtpChange} />
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-semibold rounded-md text-center text-sm tracking-[-0.08px] w-40"
                    color="orange_600"
                    size="md"
                    variant="fill"
                    onClick={ConfirmOtp}
                    fetching={verifyingOtp}
                  >
                    Confirm code
                  </Button>
                </div>
                <div className="flex flex-row items-start justify-start w-auto">
                  <div className="flex flex-col items-start justify-start p-1 w-auto">
                    <Text
                      className="text-blue_gray-600 text-right text-sm tracking-[-0.06px] w-auto"
                      size="txtMulishRegular14"
                    >
                      Didn’t get the mail?
                    </Text>
                  </div>
                  <div
                    onClick={resendOtp}
                    className="flex flex-col items-center justify-start p-1 w-auto cursor-pointer"
                  >
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
        </div>
      </div>
    </>
  );
};

export default VerifyemailPage;
