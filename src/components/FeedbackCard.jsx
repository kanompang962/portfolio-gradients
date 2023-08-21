import React from "react";
import { quotes } from "../assets";
import styles from "../style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const FeedbackCard = ({ title, link, github, content, img }) => (
  <div className=" flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[385px] md:mr-10 mr-0 my-5 feedback-card">
    {/* Icon */}
    <img
      className="animate-pulse w-[42px] h-[27px] object-contain"
      src={quotes}
    />
    {/* Text */}
    <p
      className={`font-poppins font-normal text-[16px] leading-[32px] text-dimWhite my-10 ${styles.paragraph}`}
    >
      <span className="font-semibold text-[20px] text-white">{title}</span>
      <br />
      {content}
    </p>
    {/* Image */}
    <div className="relative item-trigger flex justify-center">
      <img
        className="rounded-[20px] duration-300 ease-out"
        src={img}
        alt={title}
      />
      <div className="absolute duration-300 flex flex-rowb w-full h-full justify-center items-center gap-6 text-[40px] text-dimWhite">
        <a href={link} target="_blank">
          <FontAwesomeIcon
            icon={faLink}
            className="item-target cursor-pointer hover:text-white duration-300 ease-out"
          />
        </a>
        <a href={github} target="_blank">
          <FontAwesomeIcon
            icon={faGithub}
            className="item-target cursor-pointer hover:text-white duration-300 ease-out"
          />
        </a>
      </div>
    </div>
  </div>
);

export default FeedbackCard;
