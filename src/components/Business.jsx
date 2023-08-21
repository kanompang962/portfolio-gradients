import React from "react";
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex w-full gap-2 flex-row p-6 rounded-[20px] feature-card ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    }`}
  >
    {/* Icon */}
    <div
      className={`w-[64px] h-[64px] bg-dimBlue rounded-full ${styles.flexCenter}`}
    >
      <img className="w-[50%] h-[50%] object-contain" src={icon} alt="icon" />
    </div>
    {/* Text */}
    <div className="flex-1">
      <h4 className="text-white font-poppins font-semibold text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="text-dimWhite font-poppins font-normal text-[16px] leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => {
  return (
    <section id="education" className={`${layout.section}`}>
      {/* Text Header */}
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`animate-pulse ${styles.heading2}`}>
          Education
          {/* <br className="sm:block hidden" /> we'll handle the money. */}
        </h2>
        <p className={`max-w-[470px] mt-5 ${styles.paragraph}`}>
          Used to train as Web Developer at Kingbangkok Intertrade Co. Ltd.
          Design and development of product warranty registration system <br />
          Graduated from Mahasarakham University Faculty of Information Sciences
          computer science.
        </p>
        {/* <Button styles="mt-10">View Certificate</Button> */}
      </div>

      <div className={`flex-col ${layout.sectionImg}`}>
        {features.map((item, index) => (
          <FeatureCard key={item.id} {...item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
