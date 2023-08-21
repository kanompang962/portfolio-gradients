import React from "react";
import styles from "../style";
import { feedback } from "../constants";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => {
  return (
    <section
      id="projects"
      className={`flex-col relative ${styles.paddingY} ${styles.flexCenter}`}
    >
      {/* Gradient */}
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />
      {/* Text */}
      {/* <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h1 className={`animate-pulse ${styles.heading2}`}>
          Workings
        </h1>
        <div className="w-full md:mt-0 mt-6">
          <p className={`text-left max-w-[450px] ${styles.paragraph}`}>
            This portfolio is made to store different projects. both study,
            internship and work It will show details of each project, website
            link, GitHub. There are also projects that me can study by yourself
            through Judemi with certificate. <br />
            There are still some projects that I am currently studying and
            developing. I am ready to study and develop myself all the time
            without stopping.
          </p>
        </div>
      </div> */}
      {/* List Card */}
      <div className="flex flex-row flex-wrap sm:justify-start justify-center w-full relative z-[1] feedback-container">
        {feedback.map((item) => (
          <FeedbackCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
