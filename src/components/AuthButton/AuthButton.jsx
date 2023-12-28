import React from "react";
import { GoSignIn } from "react-icons/go";
import { useNavigate } from "react-router-dom";
const AuthButton = () => {
  const navigate = useNavigate();
  // route to LogIn Page
  const NavigateToLogInPage = () => {
    navigate("/loginscreenactive");
  };
  return (
    <div>
      <GoSignIn
        title="Sign in"
        className="w-[30px] h-[30px] cursor-pointer"
        onClick={NavigateToLogInPage}
      />
    </div>
  );
};

export default AuthButton;
