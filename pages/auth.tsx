import Button from "@/components/button/Button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function Auth() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-start px-60 py-5 h-screen justify-between">
      <div className="flex flex-col items-center justify-center gap-10">
        <div className="flex items-center">
          <span
            onClick={() => router.push("/")}
            style={{
              background: "#FF9F21",
              backgroundImage:
                "linear-gradient(to top, #FF9F21 37%, #FFFFFF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            className="text-xl font-bold cursor-pointer"
          >
            AiTime
          </span>
        </div>
        <div className="flex">
          <div className="basis-1/3 flex justify-end items-start">
            <Image
              src="/images/bot_frame.png"
              priority
              width={100}
              height={100}
              quality={100}
              alt="bot-face"
            />
          </div>
          <div className="basis-2/3 flex flex-col gap-4 items-start">
            <div className="bg-white rounded-xl rounded-tl-none p-3 shadow-xl">
              <p>👋 Hello, I’m SmartRoBot! </p>
            </div>
            <div className="bg-white rounded-xl rounded-tl-none p-3 shadow-xl">
              <p className="text-red-500">
                I am a robot that helps you in many directions.
              </p>
            </div>
            <div className="bg-white rounded-xl rounded-tl-none p-3 shadow-xl">
              <p>How should I call you?</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 items-center mx-auto gap-10 text-center mb-10">
        <Link
          href={"login"}
          // onClick={() => router.push("login")}
          className="text-xl col-span-2 cursor-pointer hover:text-primary-blue duration-150"
        >
          Log in
        </Link>
        <Button
          disabled=""
          onClick={() => router.push("signup")}
          extraClass={`w-full col-span-2`}
        >
          Sign up
        </Button>
      </div>
    </div>
  );
}

export default Auth;
