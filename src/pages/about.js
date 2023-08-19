import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import profilePic from "../../public/images/profile/developer-pic-2.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experiance from "@/components/Experiance";
import Education from "@/components/Educarion";

const AnimatedNumber = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);
  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);
  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>Sajid | About Page</title>
        <meta name="description" content="Discover the journey and skills of Sajid, a seasoned Full Stack Developer. With a passion for creating seamless web solutions, I bring expertise in front-end, back-end, and everything in between. Explore my experience and commitment to crafting exceptional digital experiences." />
      </Head>
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose"
            className="mb-16 !text-6xl !text-left xl:!left-5xl lg:!text-center lg:text-6xl md:!text-5xl sm:!text-3xl"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 lg: flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75 xl:col-span-4 ">
                Biography
              </h2>
              <p className="font-medium">
                Welcome to the profile of Sajid, a proficient MERN Stack Developer with a passion for turning innovative ideas into fully functional web realities. With expertise in Web Development, Front-end, Back-end, and a proven track record of delivering exceptional projects, Sajid is a dynamic force in the tech landscape.
              </p>

              <p className="font-medium my-4">
                As a dedicated coder, Sajid brings a deep understanding of coding languages and frameworks to create seamless digital experiences. With a keen eye for UI/UX design, they craft interfaces that captivate users and keep them engaged. Their tech solutions transcend expectations, consistently boosting user engagement and satisfaction.
              </p>

              <p className="font-medium">
                Collaborate with Sajid to unlock the true potential of your digital presence. Experience the fusion of coding mastery, UI/UX brilliance, and tech-driven solutions that propel businesses forward in today&#39;s competitive online landscape.
              </p>
            </div>
            <div className="col-span-3 xl:col-span-4 relative h-max rounded-2xl border-2 border-solid border-dark bg-light dark:bg-dark dark:border-light p-8 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[103%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={profilePic}
                alt="Sajid"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={10} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  satisfied clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={30} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  projects completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={3} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  years of experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experiance />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
