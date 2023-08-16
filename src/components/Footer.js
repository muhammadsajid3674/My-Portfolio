import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full border-t-2 border-solid border-dark dark:border-light font-medium text-lg">
      <Layout className="py-8 flex items-center justify-between dark:text-light md:flex-col">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center">
          Build With{" "}
          <span className="text-primary dark:text-primaryDark text-2xl px-1">
            &#9825;
          </span>{" "}
          by&nbsp;
          <Link className="underline underline-offset-1" href={"/"}>
            Sajid
          </Link>
        </div>
        <Link href={"/"}>Say Hello</Link>
      </Layout>
    </div>
  );
};

export default Footer;
