import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";

import FavoriteIcon from "@mui/icons-material/Favorite";
import NoteIcon from "@mui/icons-material/Note";
import StarRateIcon from "@mui/icons-material/StarRate";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AssistantIcon from "@mui/icons-material/Assistant";

export default function LandingPage() {
  return (
    <div className="h-screen">
      <img
        className="select-none absolute -z-10 h-screen w-screen"
        src="/background/BG_landingPage.jpg"
        alt=""
      />
      <MaxWidthWrapper>
        <div className="w-full pt-28 flex justify-between md:flex-row flex-col md:gap-0 gap-28">
          <div className=" h-full w-full ">
            <h1 className="md:text-8xl text-6xl font-bold mb-4">
              Learn About WEB3!
            </h1>
            <div className="w-fit p-1 px-4 flex mb-6  rounded-2xl bg-white shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
              <p className="text-lg ">
                Unlock your potential and embark on a journey of learning and
                growth.
              </p>
            </div>
            <Link
              href="/auth/register"
              className="py-3 px-6 rounded-lg bg-red-500 hover:bg-red-600 text-white font-semibold "
            >
              Get Started
            </Link>
          </div>
          <div className="h-full w-full p-4 py-6 rounded bg-transparent backdrop-blur-lg grid grid-cols-2 md:gap-6 gap-4 md:gap-y-12 gap-y-8 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
            <div className="flex justify-start items-center gap-4">
              <span className="p-3 text-white bg-blue-500 rounded-lg">
                <FavoriteIcon />
              </span>
              <div>
                <h1 className="text-lg font-semibold">168+</h1>
                <p className="text-sm">Web3 Enthusiasts</p>

                <p className="text-xs">
                  Join a community of over 168 Learners and professionals
                  learning Web3 technologies.
                </p>
              </div>
            </div>

            <div className="flex justify-start items-center gap-4">
              <span className="p-3 text-white bg-red-300 rounded-lg">
                <NoteIcon />
              </span>
              <div>
                <h1 className="text-lg font-semibold">3</h1>
                <p className="text-sm">Modules</p>

                <p className="text-xs">
                  Gain insights from Web3 and use it in real life.
                </p>
              </div>
            </div>

            <div className="flex justify-start items-center gap-4">
              <span className="p-3 text-white bg-yellow-300 rounded-lg">
                <StarRateIcon />
              </span>
              <div>
                <h1 className="text-lg font-semibold">425+</h1>
                <p className="text-sm">High rated modules</p>

                <p className="text-xs">
                  We’ve successfully satisfied over 168 users, helping people
                  grow and innovate
                </p>
              </div>
            </div>

            <div className="flex justify-start items-center gap-4">
              <span className="p-3 text-white bg-green-400 rounded-lg">
                <SpaceDashboardIcon />
              </span>
              <div>
                <h1 className="text-lg font-semibold">News</h1>
                <p className="text-sm">Stay Updated with Web3 Trends</p>

                <p className="text-xs">
                  Regular updates on the latest trends, tools, and innovations
                  in blockchain and crypto.
                </p>
              </div>
            </div>

            <div className="flex justify-start items-center gap-4">
              <span className="p-3 text-white bg-violet-500 rounded-lg">
                <AccessTimeIcon />
              </span>
              <div>
                <h1 className="text-lg font-semibold">3</h1>
                <p className="text-sm">Hours of Content</p>

                <p className="text-xs">
                  Get access to over 3 hours of documentation plus quizes.
                </p>
              </div>
            </div>

            <div className="flex justify-start items-center gap-4">
              <span className="p-3 text-white bg-cyan-300 rounded-lg">
                <AssistantIcon />
              </span>
              <div className="">
                <h1 className="text-lg font-semibold">Ai</h1>
                <p className="text-sm">Ai assistant for learning</p>
                <p className="text-xs">
                  Make your learnings more faster and easier with Ai.
                </p>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
