import Button from "@/components/button/Button";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface User {
  email: string;
  name: string;
  password: string;
}

const Signup = () => {
  const router = useRouter();
  const [newUser, setNewUser] = useState<User>({
    email: "",
    name: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setNewUser((prevUser) => ({
      ...prevUser,
      [id]: value,
    }));
  };

  return (
    <div className="flex justify-center items-center flex-col gap-6 h-screen">
      <h1 className="w-96 text-center text-3xl font-bold">
        Create your account
      </h1>
      <p className="text-center w-96">
        Please note that phone verification is required for signup. Your number
        will only be used to verify your identity for security purposes.
      </p>
      <div className="grid grid-cols-1 gap-4 w-96">
        <input
          type="email"
          id="email"
          className="col-span-full p-2 text-xl bg-white shadow-lg border-2 border-gray-200 rounded-lg w-full focus:border-primary-blue focus:outline-none focus:border-2"
          placeholder="Your email"
          autoCapitalize="email"
          onChange={handleInputChange}
          value={newUser.email}
          required
        />
        <input
          type="text"
          id="name"
          className="col-span-full p-2 text-xl bg-white shadow-lg border-2 border-gray-200 rounded-lg w-full focus:border-primary-blue focus:outline-none focus:border-2"
          placeholder="Username"
          autoComplete="name"
          onChange={handleInputChange}
          value={newUser.name}
          required
        />
        <input
          type="password"
          id="password"
          className="col-span-full p-2 text-xl bg-white shadow-lg border-2 border-gray-200 rounded-lg w-full focus:border-primary-blue focus:outline-none focus:border-2"
          placeholder="Password"
          autoComplete="password"
          onChange={handleInputChange}
          value={newUser.password}
          required
        />
        <Button disabled="" extraClass="w-full" onClick={""}>
          Continue
        </Button>
        <div className="flex items-center gap-2 justify-center">
          Already have an account?{" "}
          <button
            type="button"
            onClick={() => router.push("/login")}
            className="text-green-400"
          >
            Log in
          </button>
        </div>
        {/* <div className="flex items-center justify-between gap-4">
          <span className="bg-gray-200 h-px w-full"></span>
          <span>OR</span>
          <span className="bg-gray-200 h-px w-full"></span>
        </div> */}
        {/* <button className="w-full border-2 p-2 text-xl rounded-lg flex items-center gap-4 bg-white hover:bg-gray-100 duration-150">
          <img
            src="https://img.icons8.com/color/240/google-logo.png"
            alt="google-logo"
            className="w-8"
          />
          Continue with Google
        </button>
        <button className="w-full border-2 p-2 text-xl rounded-lg flex items-center gap-4 bg-white hover:bg-gray-100 duration-150">
          <img
            src="https://img.icons8.com/color/240/microsoft.png"
            alt="microsoft"
            className="w-8"
          />{" "}
          Continue with Microsoft Account
        </button>
        <button className="w-full border-2 p-2 text-xl rounded-lg flex items-center gap-4 bg-white hover:bg-gray-100 duration-150">
          <img
            src="https://img.icons8.com/sf-black/256/mac-os.png"
            alt="mac-os"
            className="w-8"
          />{" "}
          Continue with Apple
        </button> */}
      </div>
    </div>
  );
};

export default Signup;
