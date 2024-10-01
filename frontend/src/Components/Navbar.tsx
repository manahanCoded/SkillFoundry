"use client";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { useEffect, useState } from "react";

//import types
import checkUser from "@/configure/checkUser";

export default function Navbar() {
  const [userData, setUserData] = useState<checkUser | null>(null);

  useEffect(() => {
    async function checkUser() {
      const res = await fetch("http://localhost:5000/api/user/profile", {
        method: "GET",
        credentials: "include",
      });
      if (res.ok) {
        const data = await res.json();
        setUserData(data);
      } else {
        setUserData(null);
      }
    }
    checkUser();
  }, []);

  return (
    <nav className="fixed inset-0 h-fit py-1 bg-white  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
      <MaxWidthWrapper>
        <div className="h-12 flex justify-between items-center">
          <div className="text-lg text-red-600 ">
            <p>CWarriors</p>
          </div>
          {userData ? (
            <button>{userData.email}</button>
          ) : (
            <div className="flex justify-between items-center flex-row gap-2">
              <Link href="/auth/login" className="text-sm px-4 py-2 text-white bg-red-600 rounded">Login</Link>
            </div>
          )}
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}
