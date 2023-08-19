import { useScroll, motion } from "framer-motion";
import React, { useRef } from "react";
import Lilcon from "./Lilcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <Lilcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            className="text-primary dark:text-primaryDark capitalize"
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-bold text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experiance = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center xl:!left-5xl lg:!text-center lg:text-6xl md:!text-5xl sm:!text-3xl">
        Experiance
      </h2>
      <div className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          ref={ref}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position={"MERN Stack Developer"}
            address={"Muhammad Ali Society, Karachi"}
            company={"Digitrends"}
            companyLink={"www.digitrends.pk"}
            time={"2022-present"}
            work={`To remain competitive, front-end developers must stay current with the latest technologies
            and design trends Frontend developers must ensure that their
            code is well-organized, easy to read, and optimized for performance. Frontend developers
            often work closely with designers to ensure that the UI meets the design
            specifications, and with backend developers to integrate the frontend code with
            the backend logic.
            `}
          />
          <Details
            position={"Front-End Engineer"}
            address={"Muhammad Ali Society, Karachi"}
            company={"Digitrends"}
            companyLink={"www.digitrends.co"}
            time={"2021-2022"}
            work={`This includes creating the layout,
            navigation, and visual components of a web application or website. Frontend developers must ensure that their
            code is well-organized, easy to read, and optimized for performance. Frontend developers
            often work closely with designers to ensure that the UI meets the design
            specifications, and with backend developers to integrate the frontend code with
            the backend logic.
            `}
          />
        </ul>
      </div>
    </div>
  );
};

export default Experiance;
