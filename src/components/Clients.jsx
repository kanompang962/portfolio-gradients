import React from "react";
import styles from "../style";
import { clients } from "../constants";
import "../index.css";

const Clients = () => {
  return (
    <section className={`my-4 ${styles.flexCenter}`}>
      <div
        className={`flex flex-row gap-6 flex-wrap w-full ${styles.flexCenter}`}
      >
        {clients.map((client) => (
          <div key={client.id} className={`  ${styles.flexCenter}`}>
            <img
              className="sm:w-[100px] sm:h-[90px] w-[100px] h-[40px] object-contain"
              src={client.logo}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
