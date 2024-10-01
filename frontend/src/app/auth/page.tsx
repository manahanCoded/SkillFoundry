"use client"

import { useRouter } from "next/navigation";

const Auth = () => {
  const router = useRouter();

      router.push("/auth/login");

  return <div></div>;
};

export default Auth;
