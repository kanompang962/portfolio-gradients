import React from "react";
import styles from "../style";
import { arrowUp, resume } from "../assets";

const GetStarted = () => {
  return (
    <a href={resume} target="blank">
      <div
        className={`ss:animate-bounce w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer ${styles.flexCenter}`}
      >
        <div
          className={`flex-col bg-primary w-[100%] h-[100%] rounded-full ${styles.flexCenter}`}
        >
          <div className={`flex-row ${styles.flexStart}`}>
            <p className="font-poppins font-medium text-[18px] leading-[23px]">
              <span className="text-gradient">View</span>
            </p>
            <img className="w-[23px] h-[23px] object-contain" src={arrowUp} />
          </div>

          <p className="font-poppins font-medium text-[18px] leading-[23px]">
            <span className="text-gradient">Resume</span>
          </p>
        </div>
      </div>
    </a>
  );
};

export default GetStarted;
