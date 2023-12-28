import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button, Img, Text } from "components";
import { motion } from "framer-motion";
import { sideBarMenu } from "utils/sidebar";
import { useEffect } from "react";

const Sidebar1 = (props) => {
  const [User, setUser] = useState(
    localStorage.getItem("loggeduser")
      ? JSON.parse(localStorage.getItem("loggeduser"))
      : "Theresa milly"
  );

  // Routing Hooks
  const location = useLocation();
  const navigate = useNavigate();

  // hide the sideBar on Auth Routes
  const hideSide =
    location.pathname === "/portfolio" || location.pathname === "/messages";

  // Route to Logout Page
  const handleLogOut = () => {
    localStorage.removeItem("loggeduser");
    navigate("/");
  };

  // Protecting authorized Routes
  useEffect(() => {
    if (!User) {
      navigate("/");
    }
  }, []);

  // Get UserDetails from LocalStorage
  useEffect(() => {
    setTimeout(() => {
      setUser(JSON.parse(localStorage.getItem("loggeduser")));
    }, 200);
  }, []);

  return (
    <>
      <div className={`${hideSide ? "block" : "hidden"}  bg-white-A700  `}>
        <div
          className={`flex flex-row gap-2 items-start justify-center mt-7 mx-auto`}
        >
          <Img className="h-9" src="images/img_contrast.svg" alt="contrast" />
          <Text
            className="mt-1 sm:text-[21px] md:text-[23px] text-[25px] text-gray-800"
            size="txtLexendSemiBold25"
          >
            Buddy
          </Text>
        </div>
        <div className="flex flex-col items-start justify-start mt-[22px] pt-[18px] sm:px-5 pr-[25px] w-full">
          {sideBarMenu?.map((menu, i) => (
            <div className="w-full flex gap-3 justify-center  items-center ">
              {location.pathname === `/${menu.url}` && (
                <motion.div
                  initial={{ x: 200 }}
                  animate={{
                    x: 0,
                    transition: {
                      type: "tween",
                      ease: "easeIn",
                      duration: 0.3,
                    },
                  }}
                  className="w-[6px] h-[32px] bg-[#ff8600] rounded-tr-[4px] rounded-br-[4px]"
                />
              )}
              <div
                key={`sideBarMenuItem${i}`}
                onClick={() => {
                  if (menu.label === "Messages") {
                    navigate("/messages");
                  }
                  if (menu.label === "My Portfolio") {
                    navigate("/portfolio");
                  }
                }}
                className={`flex ${
                  location.pathname === `/${menu.url}` &&
                  "custom-box-shadow text-[#ff8600]"
                }  cursor-pointer hover:text-[#ff8600] w-[200px] mb-2   h-[51px] py-[16px] md:pl-[8px] px-[32px]  hover:bg-[#fff] md:text-[12px] text-[14px] font-lexend rounded-[16px] leading-[19.19px]   font-[500] text-[#808086] gap-[8px] items-center mt-[8px]`}
              >
                <menu.icon className="w-[18px] h-[18px]" />
                {menu.label}
              </div>
            </div>
          ))}
        </div>

        <div className="h-[178px] md:h-[612px] mb-9 mt-[432px]  mx-auto relative w-[190px]">
          <div className="absolute bg-white-A700 bottom-[0] flex flex-col gap-3 inset-x-[0] items-center justify-center mx-auto pb-4 pt-9 px-4 rounded-[16px] shadow-bs2 w-[95%]">
            <div className="flex flex-col items-center justify-start w-full">
              <Text
                className="text-gray-800 text-lg tracking-[0.36px] w-auto"
                size="txtLexendMedium18"
              >
                {User?.firstname ? User?.firstname : User}
              </Text>
              <Text
                className="text-gray-600 text-xs tracking-[0.12px] w-auto"
                size="txtLexendRegular12Gray600"
              >
                Influencer
              </Text>
            </div>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[170px]"
              leftIcon={
                <Img
                  className="h-[18px] mb-0.5 mr-1"
                  src="images/img_logout.svg"
                  alt="Logout "
                />
              }
              shape="round"
              color="orange_600_28"
              size="md"
              variant="fill"
            >
              <div
                onClick={handleLogOut}
                className="!text-orange-600 font-lexend font-medium text-left text-sm tracking-[0.28px]"
              >
                Logout
              </div>
            </Button>
          </div>
          <Img
            className="absolute h-[50px] inset-x-[0] mx-auto rounded-[50%] top-[0] w-[50px]"
            src="images/img_ellipse1.png"
            alt="ellipseOne"
          />
        </div>
      </div>
    </>
  );
};

Sidebar1.defaultProps = {};

export default Sidebar1;
