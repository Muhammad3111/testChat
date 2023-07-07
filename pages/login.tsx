import Button from "@/components/button/Button";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";

interface User {
  email: string;
  password: string;
}

const Login = () => {
  const router = useRouter();
  const [user, setUser] = useState<User>({ email: "", password: "" });
  const logIn = async () => {
    try {
      await axios.post("/api/login", user).then((res) => {
        if (res) {
          localStorage.setItem("token", res.data?.token);
          localStorage.setItem("userId", res.data?.user._id);
          localStorage.setItem("userName", res.data?.user.name);
          router.push("/chat");
        } else {
          alert("Iltimos email manziligizni to'g'ri kiriting");
        }
      });
    } catch (err) {
      console.log(err);
    }
    setUser({ email: "", password: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [id]: value,
    }));
  };
  return (
    <div className="flex justify-center items-center flex-col gap-6 h-screen">
      <h1 className="w-96 text-center text-3xl font-bold">Welcome back</h1>
      <div className="grid grid-cols-1 gap-4 w-96">
        <input
          type="email"
          id="email"
          className="col-span-full p-2 text-xl bg-white shadow-lg border-2 border-gray-200 rounded-lg w-full focus:border-primary-blue focus:outline-none focus:border-2"
          placeholder="Your email"
          autoCapitalize="email"
          onChange={handleInputChange}
          value={user.email}
          required
        />
        <input
          type="password"
          id="password"
          className="col-span-full p-2 text-xl bg-white shadow-lg border-2 border-gray-200 rounded-lg w-full focus:border-primary-blue focus:outline-none focus:border-2"
          placeholder="Password"
          autoComplete="password"
          onChange={handleInputChange}
          value={user.password}
          required
        />
        <Button disabled="" extraClass="w-full" onClick={logIn}>
          Continue
        </Button>
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

export default Login;
