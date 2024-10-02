"use client";

import { useState } from "react";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MaxWidthWrapper from "@/Components/MaxWidthWrapper";

// import types
import authUser from "@/configure/authUser";

const Register = () => {
  const [userRegister, setUserRegister] = useState<authUser>({
    email: "",
    password: "",
  });
  const router = useRouter();
  async function submitRegister(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const submit = await fetch("http://localhost:5000/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userRegister),
      credentials: "include",
    });
    if (!submit.ok) {
      alert("Register failed");
    } else {
      router.push("/");
    }
  }

  return (
    <div className="h-screen overflow-hidden">
      <img
        className=" h-screen w-screen select-none"
        src="/background/BG_landingPage.jpg"
        alt=""
      />
      <MaxWidthWrapper>
        <div className="fixed inset-0 md:w-[70%] h-full m-auto z-10 flex justify-center items-center">
          <form
            onSubmit={submitRegister}
            className="w-full h-[80%] rounded-lg grid grid-flow-col md:grid-col-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)] overflow-hidden"
          >
            <div className="px-12 py-8 text-white bg-red-600 hidden md:block">
              <h1 className="text-4xl font-semibold ">Join Us</h1>
              <p>Let's Make your WEB3 learning fun!</p>
            </div>
            <div className="px-12 py-8 bg-zinc-50 flex justify-between flex-col">
              <div className="flex flex-col">
                <h2 className="text-2xl text-center mb-8">WELCOME</h2>
                <label className="mt-3">Email</label>
                <input
                  required
                  type="email"
                  placeholder="abc@gmail.com"
                  value={userRegister.email}
                  onChange={(e) => {
                    setUserRegister({ ...userRegister, email: e.target.value });
                  }}
                  className="md:h-10 h-8 rounded mb-2 px-2 border shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]"
                />
                <label className="mt-3">Password</label>
                <input
                  required
                  type="password"
                  placeholder="***********"
                  value={userRegister.password}
                  onChange={(e) => {
                    setUserRegister({
                      ...userRegister,
                      password: e.target.value,
                    });
                  }}
                  className="md:h-10 h-8 rounded mb-2 px-2 border shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]"
                />
                <div className="flex items-center gap-1">
                  <input required type="checkbox" className="h-10" />{" "}
                  <label className="text-xs">
                    I've read and agree with terms of service and our privecy
                    policy
                  </label>
                </div>
                <input
                  required
                  type="submit"
                  className="md:h-10 h-8 rounded mb-2 mt-6 px-2 bg-red-600 text-white"
                />
              </div>
              <div className="flex justify-between items-center  ">
                <Link href="/" className=" flex justify-center items-center group ">
                  <span className="group-bg-slate-200 p-1 rounded mr-1 group-hover:bg-slate-300 transition">
                    <ArrowBackIcon />
                  </span>
                  <p className="group-hover:border-b group-hover:text-red-600 border-red-600 transition">Go back</p>
                </Link>
                <Link href="/auth/register" className="w-28 p-1  bg-gray-200 hover:rounded hover:text-white hover:bg-red-600 transition text-center">
                  Sign Up
                </Link>
              </div>
            </div>
          </form>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Register;
