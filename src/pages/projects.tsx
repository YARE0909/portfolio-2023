import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Tilt from "react-parallax-tilt";

const Projects = () => {
  const router = useRouter();
  return (
    <div className="w-full min-h-screen h-fit bg-gradient-to-b from-[#14121C] to-black">
      <div className="fixed top-0 w-full z-[999]">
        <Navbar />
      </div>
      <div className="flex flex-col gap-20 items-center pt-20 p-4">
        <div>
          <h1 className="text-8xl text-white font-bold">my projects</h1>
        </div>
        <div className="w-full flex flex-col lg:flex lg:flex-row justify-center gap-20">
          <Tilt className="cursor-pointer">
            <div
              className="bg-purple-950 rounded-2xl p-4 flex flex-col gap-5 items-center"
              onClick={() => {
                router.push("https://github.com/Manaya20/airradar");
              }}
            >
              <div>
                <Image
                  className="rounded-lg"
                  src="/project1.png"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
              <div>
                <h1 className="font-bold text-4xl">Airradar</h1>
              </div>
              <div>
                <h1 className="text-center">
                  This project is a small scale model which depicts the actual
                  working of the Air Traffic Control.
                </h1>
              </div>
            </div>
          </Tilt>
          <Tilt className="cursor-pointer">
            <div
              className="bg-purple-950 rounded-2xl p-4 flex flex-col gap-5 items-center"
              onClick={() => {
                router.push("https://github.com/Manaya20/Kickology");
              }}
            >
              <div>
                <Image
                  className="rounded-lg"
                  src="/project2.jpeg"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
              <div>
                <h1 className="font-bold text-4xl">Kickology</h1>
              </div>
              <div>
                <h1 className="text-center">
                  This project is a small scale model which depicts the actual
                  working of the Air Traffic Control.
                </h1>
              </div>
            </div>
          </Tilt>
        </div>
      </div>
    </div>
  );
};

export default Projects;
