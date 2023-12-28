import React, { useState, useRef, useEffect } from "react";

const OtpInput = ({ onOtpChange }) => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];

  const handleInputChange = (index, value) => {
    const newOtp = [...otp];

    newOtp[index] = value;
    setOtp(newOtp);
    onOtpChange(newOtp.join(""));
  };

  const handleInputKeyDown = (index, e) => {
    if (e.key === "Backspace" && index > 0) {
      setTimeout(() => {
        inputRefs[index - 1].current.focus();
      }, 100);
    } else if (e.key >= "0" && e.key <= "9") {
      if (index < otp.length - 1) {
        setTimeout(() => {
          inputRefs[index + 1].current.focus();
        }, 100);
      }
    }
  };

  useEffect(() => {
    inputRefs[0].current.focus();
  }, []);

  return (
    <div>
      {otp.map((digit, index) => (
        <input
          className="border border-orange-600 border-solid mr-[10px] cursor-pointer font-bold h-[50px] rounded-[10px] text-2xl md:text-[22px] text-center sm:text-xl tracking-[-0.26px] w-[50px]"
          key={index}
          type="text"
          maxLength="1"
          value={digit}
          onChange={(e) => handleInputChange(index, e.target.value)}
          onKeyDown={(e) => handleInputKeyDown(index, e)}
          ref={inputRefs[index]}
        />
      ))}
    </div>
  );
};

export default OtpInput;
