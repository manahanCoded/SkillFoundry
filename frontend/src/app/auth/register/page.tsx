"use client";

import { useState } from "react";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import MaxWidthWrapper from "@/Components/MaxWidthWrapper";
import Link from "next/link";

// import types
import authUser from "@/configure/authUser";

const Register = () => {
  const [userRegister, setUserRegister] = useState<authUser>({
    username: "",
    email: "",
    password: "",
  });
  const router = useRouter();
  console.log(userRegister);

  async function submitRegister(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const submit = await fetch("http://localhost:5000/api/user/register", {
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
      router.push("/auth/login");
    }
  }

  return (
    <div className="h-screen overflow-hidden">
    <img className=" h-screen w-screen" src="/background/BG_landingPage.jpg" alt="" />
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
                <h2 className="text-2xl text-center mb-8">CREATE ACCOUNT</h2>
                <label className="mt-3">Name</label>
                <input
                  required
                  type="text"
                  placeholder="abc"
                  value={userRegister.username}
                  onChange={(e) => {
                    setUserRegister({
                      ...userRegister,
                      username: e.target.value,
                    });
                  }}
                  className="md:h-10 h-8 rounded mb-2 px-2 border shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]"
                />
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
              <Link href="/auth/login">Login</Link>
            </div>
          </form>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Register;
