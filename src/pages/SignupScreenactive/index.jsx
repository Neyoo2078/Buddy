import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Img, Input, Text } from "components";
import SignUpScreenActiveDashboardinput from "components/SignUpScreenActiveDashboardinput";
import SignUpScreenActiveDashboardinput1 from "components/SignUpScreenActiveDashboardinput1";
import SignUpScreenActiveDashboardinput2 from "components/SignUpScreenActiveDashboardinput2";
import SignUpScreenActiveDashboardinput3 from "components/SignUpScreenActiveDashboardinput3";
import { useFormik } from "formik";
import { SignUpvalidate } from "utils/validation";
import { toast } from "react-toastify";
import axios from "axios";

const SignupScreenactivePage = () => {
  const [fetching, setfetching] = useState(false);

  const BaseUrl = process.env.REACT_APP_BASE_URL;

  const navigate = useNavigate();

  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    },
    validate: SignUpvalidate,
    onSubmit: (values) => {
      console.log("clickedddd");
      if (formik.errors.email) {
        toast.error("invalid credentials");
      }
    },
  });

  // Handle SignUp
  const submit = async () => {
    if (
      formik.errors.email ||
      formik.errors.password ||
      formik.errors.lastName ||
      formik.errors.firstName
    ) {
      toast.error("invalid credentials");
    }
    if (
      formik.values.email === "" ||
      formik.values.password === "" ||
      formik.values.lastName === "" ||
      formik.values.firstName === ""
    ) {
      toast.error("one or more fields are empty");
    }
    try {
      setfetching(true);
      const res = await axios.post(`${BaseUrl}/api/admin/register`, {
        email: formik.values.email,
        lastname: formik.values.lastName,
        firstname: formik.values.firstName,
        password: formik.values.password,
      });
      if (res?.data?.email) {
        localStorage.setItem("emailuser", JSON.stringify(res?.data?.email));
      }

      setfetching(false);

      toast.success("Account created sucessfully");
      navigate("/verifyemail");
    } catch (error) {
      setfetching(false);
      if (error) {
        toast.error(error?.response?.data?.message);
      }
    }
  };

  // Navigate to LogIn Page
  const LogIn = () => {
    navigate("/");
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
          <div className="flex flex-col font-mulish items-start justify-start sm:mb-[10px] mb-[352px] md:ml-[0] ml-[65px] sm:mt-[70px] mt-[126px] w-auto sm:w-full">
            <div className="flex flex-col md:gap-10 gap-24 items-start justify-start w-auto sm:w-full">
              <div className="flex flex-col gap-[37px] items-start justify-start w-auto sm:w-full">
                <div className="flex sm:flex-row flex-row gap-4 items-center justify-start w-auto sm:w-full">
                  <Button
                    className="flex h-6 sm:h-[14px] sm:w-4 items-center justify-center w-6"
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
                    className="leading-[24.00px] max-w-[422px] md:max-w-full text-blue_gray-600 sm:text-sm text-lg tracking-[-0.20px]"
                    size="txtMulishRegular18"
                  >
                    Track real-time overview of company’s financial performance.
                  </Text>
                </div>
                <div className="flex sm:flex-row flex-row gap-4 items-center justify-start w-auto sm:w-full">
                  <Button
                    className="flex h-6 sm:h-[14px] sm:w-4 items-center justify-center w-6"
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
                    className="leading-[24.00px] max-w-[422px] md:max-w-full text-blue_gray-600 sm:text-sm text-lg tracking-[-0.20px]"
                    size="txtMulishRegular18"
                  >
                    Track created projects budget against actual revenue and
                    expenses.
                  </Text>
                </div>
                <div className="flex sm:flex-row flex-row gap-4 items-center justify-start w-auto sm:w-full">
                  <Button
                    className="flex h-6 sm:h-[14px] sm:w-6 items-center justify-center w-6"
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
                    className="leading-[24.00px] max-w-[422px] md:max-w-full text-blue_gray-600 sm:text-sm text-lg tracking-[-0.20px]"
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
        <div className="bg-gray-50  flex flex-col font-mulish md:gap-10 gap-[100px] items-center justify-center sm:p-[10px] md:p-[97px] md:px-5 w-[51%] md:w-full">
          <div className="bg-white-A700 border  border-gray-300 border-solid flex flex-col items-start justify-start sm:mr-0 mr-3.5 sm:mt-[30px] mt-[63px] p-[50px] md:px-10 sm:px-5 rounded-lg shadow-bs3 w-auto sm:w-full">
            <div className="flex flex-col md:gap-10 gap-16 items-start justify-start w-auto sm:w-full">
              <div className="flex flex-col gap-[30px] items-start justify-start w-auto sm:w-full">
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
                        Proceed to create account and setup your organization.
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                    <div className="flex flex-col gap-[30px] items-start justify-start w-auto sm:w-full">
                      <div className="flex flex-col gap-3 items-start justify-start w-auto sm:w-full">
                        <div className="flex sm:flex-col flex-row  items-start gap-[20px]  w-auto sm:w-full">
                          <SignUpScreenActiveDashboardinput
                            className="flex flex-col items-start justify-start w-[185px]  sm:w-[280px]"
                            label="First Name"
                            formik={formik}
                          />
                          <SignUpScreenActiveDashboardinput3
                            className="flex flex-col items-start justify-start w-[185px]  sm:w-[280px]"
                            label="Last Name"
                            formik={formik}
                          />
                        </div>
                        <div className="flex flex-col items-start justify-start  w-auto sm:w-[380px]">
                          <SignUpScreenActiveDashboardinput1
                            className="flex flex-col gap-1 items-start justify-start w-auto  sm:w-[280px]"
                            progresslabel="12 / 15"
                            formik={formik}
                          />
                          <SignUpScreenActiveDashboardinput2
                            formik={formik}
                            className="flex flex-col gap-1 items-start justify-start w-auto  sm:w-[280px]"
                          />
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer font-semibold rounded-md text-center text-sm tracking-[-0.08px]  sm:w-[280px] w-[389px]"
                        color="orange_600"
                        size="md"
                        type="button"
                        variant="fill"
                        onClick={submit}
                        fetching={fetching}
                      >
                        Create account
                      </Button>
                    </div>
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
                  <div
                    onClick={LogIn}
                    href="javascript:"
                    className="text-orange-600 cursor-pointer text-right text-sm tracking-[-0.08px] w-auto"
                  >
                    <Text size="txtMulishMedium14">Login</Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" sm:w-full w-[65%]  flex justify-end items-center">
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[118px] mr-[15px] rounded-[25px] shadow-bs4"
              rightIcon={
                <Img
                  className="h-[19px] mb-px ml-3"
                  src="images/img_bichat_white_a700.svg"
                  alt="bi:chat"
                />
              }
              color="orange_600"
              size="lg"
              variant="fill"
            >
              <div className="!text-white-A700  font-semibold text-left text-sm tracking-[-0.08px]">
                Get Help
              </div>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupScreenactivePage;
