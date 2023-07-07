"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { Link } from "react-scroll";


type Props = {};

function Navbar({}: Props) {
  const router = useRouter();
  return (
    <nav className="flex w-full md:flex-row sx:flex-col justify-between items-center sx:pt-5">
      <div
        className="flex  items-center gap-2 cursor-pointer"
        onClick={() => router.push("/")}
      >
        <Image
          src="/logo2.png"
          alt="logo"
          width="100"
          height="100"
          quality={100}
        />
        <span
          style={{
            background: "#FF9F21",
            backgroundImage:
              "linear-gradient(to top, #FF9F21 37%, #FFFFFF 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          className="text-2xl font-bold"
        >
          AiTime
        </span>
      </div>
      <ul className="flex md:flex-row sx:flex-col gap-8 uppercase font-bold text-base text-blue-grey-40 justify-around items-center">
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="cursor-pointer hover:text-primary-blue duration-150"
        >
          How it works
        </Link>
        <Link
          to="reviews"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="cursor-pointer hover:text-primary-blue duration-150"
        >
          User Reviews
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="cursor-pointer hover:text-primary-blue duration-150"
        >
          Contacts
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
