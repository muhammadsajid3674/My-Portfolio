import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { LinkArrow } from "@/components/Icon";
import AnimatedText from "@/components/AnimatedText";
import HireMe from "@/components/HireMe";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sajid | Home Page</title>
        <meta name="description" content="Welcome to Sajid&#39;s Portfolio - A Full Stack Developer showcasing expertise in web development. Explore innovative projects, a detailed About section, and insightful articles. Enhance your digital experience with a diverse skill set." />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePic}
                alt="Sajid"
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="!text-6xl !text-left xl:!left-5xl lg:!text-center lg:text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium dark:text-light">
                Unveiling Mastery in Web Development, Front-end, Back-end, and Innovative Projects. Explore Expertise in Coding, UI/UX, and Tech Solutions. Elevate Your Digital Presence with a Proven Track Record of Delivering Exceptional Web Experiences.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/public/resume.pdf"
                  download={true}
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:border-light"
                >
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href="mailto:muhsajidshahid@gmail.com"
                  target="_blank"
                  className="ml-4 text-lg font-medium capitalize text-dark dark:text-light underline"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-24 sm:hidden">
          <Image src={lightBulb} alt="Sajid" className="w-full h-auto" />
        </div>
      </main>
    </>
  );
}
