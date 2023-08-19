import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icon";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Project1 from "../../public/images/projects/accounttill.png";
import Project2 from "../../public/images/projects/revents.png";
import Project3 from "../../public/images/projects/teledr4u.png";
import Project4 from "../../public/images/projects/nft.jpg";
import Project5 from "../../public/images/projects/portfolio.jpg";

const FeaturedProject = ({ link, img, title, type, summary, github }) => {
  return (
    <article
      className="w-full flex items-center justify-center rounded-3xl rounded-br-2xl border border-solid 
    border-dark bg-light dark:bg-dark dark:border-light shadow-2xl p-12 relative lg:flex-col lg:p-8 xs:rounded-br-3xl xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 xs:h-[102%] 
      xs:w-full xs:rounded-[1.5rem]"
      />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-1/2 flex flex-col items-left justify-betweem pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex text-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light dark:hover:bg-light dark:hover:text-dark p-2 px-6 text-lg font-semibold"
          >
            Visit Projects
          </Link>
        </div>
      </div>
    </article>
  );
};
const Project = ({ link, img, title, type, github }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark 
    bg-light dark:bg-dark dark:border-light p-6 relative xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl 
      md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"
      />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-full flex flex-col items-left justify-center mt-4">
        <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>
        <div className="mt-2 flex text-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};
const projects = () => {
  return (
    <>
      <Head>
        <title>Sajid | Projects Page</title>
        <meta name="description" content="Explore a curated collection of projects by Sajid, a proficient Full Stack Developer. From dynamic web applications to interactive interfaces, witness the fusion of creativity and technology. Delve into a portfolio that showcases coding finesse and innovation." />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text={"Imagination Trump Knowledge!"}
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title={"Account Till"}
                summary={`This is a side project I&#39;ve been working on. A full stack invoicing application made using the MERN stack (MongoDB, Express, React & Nodejs), specially designed for freelancers and small businesses, but can be used for almost any type of business need. `}
                link="https://accountill.com/"
                github="https://github.com/muhammadsajid3674"
                type={"Featured Project"}
                img={Project1}
              />
            </div>
            <div className="col-span-6 md:col-span-12">
              <Project
                title={"Teledr4u"}
                summary={`Appointments with a psychiatrist, social worker, psychologist, mental health
                counselor, or substance use counselor for all individuals in rural Hawaii
                Video Conferencing feature added with Jitsi Repo`}
                link="https://teledr4you.com/"
                github="https://github.com/muhammadsajid3674"
                type={"Featured Project"}
                img={Project3}
              />
            </div>
            <div className="col-span-6 col-span-6 md:col-span-12">
              <Project
                title={"Revents App"}
                summary={`The system facilitates online registration and ticketing processes, allowing
                attendees to sign up, purchase tickets, and receive confirmations electronically.
                The system helps manage attendee information, such as contact details, dietary
                preferences, special requirements, and ticket types.
                `}
                link="https://revents-d91d4.firebaseapp.com/"
                github="https://github.com/muhammadsajid3674"
                type={"Featured Project"}
                img={Project2}
              />
            </div>
            <div className="col-span-6 col-span-6 md:col-span-12">
              <Project
                title={"Next Portfolio Website"}
                summary={`The system facilitates online registration and ticketing processes, allowing
                attendees to sign up, purchase tickets, and receive confirmations electronically.
                The system helps manage attendee information, such as contact details, dietary
                preferences, special requirements, and ticket types.
                `}
                link="/"
                github="https://github.com/muhammadsajid3674"
                type={"Featured Project"}
                img={Project4}
              />
            </div>
            <div className="col-span-6 col-span-6 md:col-span-12">
              <Project
                title={"NFT Collection Website in React JS"}
                summary={`The system facilitates online registration and ticketing processes, allowing
                attendees to sign up, purchase tickets, and receive confirmations electronically.
                The system helps manage attendee information, such as contact details, dietary
                preferences, special requirements, and ticket types.
                `}
                link="/"
                github="https://github.com/muhammadsajid3674"
                type={"Featured Project"}
                img={Project5}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
