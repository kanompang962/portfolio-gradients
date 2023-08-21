import React from "react";
import Button from "./Button";
import styles from "../style";

const CTA = () => {
  return (
    <section
      id="workings"
      className={`flex sm:flex-row flex-col bg-black-gradient rounded-[20px] box-shadow ${styles.marginY} ${styles.padding} ${styles.flexCenter}`}
    >
      {/* Text */}
      <div className="flex-1">
        <h2 className={`${styles.heading2}`}>Workings</h2>
        <p className={`max-w-[470px] mt-5 ${styles.paragraph}`}>
          This portfolio is made to store different projects. both study,
          internship and work It will show details of each project, website
          link, GitHub. There are also projects that me can study by yourself
          through Judemi with certificate.
        </p>
      </div>
      {/* Button */}
      <div className={`sm:ml-10 ml-0 sm:mt-0 mt-10 ${styles.flexCenter}`}>
        <Button>View Certificate</Button>
      </div>
    </section>
  );
};

export default CTA;
