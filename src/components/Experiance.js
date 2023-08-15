import { useScroll, motion } from "framer-motion";
import React, { useRef } from "react";
import Lilcon from "./Lilcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <Lilcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          <a
            href={companyLink}
            className="text-primary dark:text-primaryDark capitalize"
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-bold text-dark/75 dark:text-light/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
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
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experiance
      </h2>
      <div className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          ref={ref}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position={"Software Engineer"}
            address={"Mountain View, CA"}
            company={"Google"}
            companyLink={"www.google.com.pk"}
            time={"2022-Present"}
            work={`Worked on a team responsible for developing new features for Google's 
                        search engine, including improving the accuracy and relevance of search results and 
                        developing new tools for data analysis and visualization.`}
          />
          <Details
            position={"Intern"}
            address={"Menlo Park, CA."}
            company={"Facebook"}
            companyLink={"www.facebook.com.pk"}
            time={"Summer 2021"}
            work={`Worked on a team responsible for developing a new mobile app feature that allowed users to create and 
                        share short-form video content, including designing and implementing a new user interface and developing 
                        the backend infrastructure to support the feature.`}
          />
          <Details
            position={"Software Developer"}
            address={"Seattle, WA."}
            company={"Amazon"}
            companyLink={"www.amazon.com.pk"}
            time={"2020-2021"}
            work={`Worked on a team responsible for developing Amazon's mobile app, including implementing new features such 
                        as product recommendations and user reviews, and optimizing the app's performance and reliability.`}
          />
          <Details
            position={"Software Developer Intern"}
            address={"Redmond, WA."}
            company={"Microsoft"}
            companyLink={"www.amazon.com.pk"}
            time={"Summer 2019"}
            work={`Worked on a team responsible for developing new features for Microsoft's Windows operating system, 
                        including implementing a new user interface for a system settings panel and optimizing the performance of 
                        a core system component.`}
          />
          <Details
            position={"Teaching Assistant"}
            address={"Massachusetts Ave, Cambridge, MA."}
            company={"MIT"}
            companyLink={"www.mit.com.pk"}
            time={"Fall 2018"}
            work={`Assisted in teaching a course on computer programming, held office hours to help students with assignments, 
                        and graded exams and assignments.`}
          />
        </ul>
      </div>
    </div>
  );
};

export default Experiance;
