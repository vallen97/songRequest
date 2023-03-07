import Link from "next/link";
import React from "react";

interface footerProps {}

export const Footer: React.FC<footerProps> = ({}) => {
  return (
    <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2023{" "}
        <a href="https://flowbite.com/" className="hover:underline">
          Flowbite™
        </a>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mr-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-6">
        <li>
          <Link
            href="https://www.youtube.com/@jesteyetv5840"
            className="mr-4 hover:underline md:mr-6"
          >
            YouTube
          </Link>
        </li>
        <li>
          <Link
            href="https://www.tiktok.com/en/"
            className="mr-4 hover:underline md:mr-6"
          >
            Tiktok
          </Link>
        </li>
        <li>
          <Link
            href="https://twitter.com/"
            className="mr-4 hover:underline md:mr-6"
          >
            Twitter
          </Link>
        </li>
        <li>
          <Link
            href="https://www.instagram.com/"
            className="mr-4 hover:underline md:mr-6"
          >
            Other
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
