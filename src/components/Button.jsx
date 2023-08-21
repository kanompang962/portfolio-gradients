import React from "react";
import { certificate } from "../assets";

const Button = ({ children, styles }) => {
  return (
    <a href={certificate} target="_blank">
      <button
        type="button"
        className={`hover:animate-pulse py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary rounded-[10px] outline-none ${styles}`}
      >
        {children}
      </button>
    </a>
  );
};

export default Button;
