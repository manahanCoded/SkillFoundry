import Image from "next/image";
import { DEFAULT_MAX_VERSION } from "tls";
import Navbar from "@/Components/Navbar";
import LandingPage from "@/Components/LandingPage";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <LandingPage/>
    </div>
  );
}
