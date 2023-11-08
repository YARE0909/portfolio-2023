import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="w-full min-h-screen h-fit bg-gradient-to-b from-[#14121C] to-black">
      <div className="fixed top-0 w-full">
        <Navbar />
      </div>
      <section className="flex flex-col min-h-screen h-fit p-4">
        <div className="flex flex-col items-center gap-5">
          <div className="w-full h-full flex-1 flex pt-20 flex-col items-center justify-start">
            <h1 className="text-white font-bold text-6xl lg:text-8xl">
              about me
            </h1>
          </div>
          <div className="max-w-6xl w-full">
            <h1 className="text-gray-400 text-center text-xl">
              I am someone who gets frenzied when it comes to data, the perfect
              leisure time for me would be surfing through kaggle, with a pinch
              of web development skills and tons of enthusiast for data makes me
              going in life. I hold a very good orator skills, with a weird
              skill of working best under stress. I have developed good planning
              and team work proficiency which makes my attitude more outgoing
              and tactful. Always greedy for learning any new motifs that relate
              to my work of interest, along with a huge passion for caffeine .
            </h1>
          </div>
        </div>
        <div className="w-full flex justify-center gap-10 pt-10">
          <div>
            <Image src="/Manaya2.jpeg" alt="" width={400} height={500} />
          </div>
          <div className="hidden lg:block">
            <Image src="/Manaya.png" alt="" width={400} height={500} />
          </div>
          <div className="hidden lg:block">
            <Image src="/Manaya3.jpeg" alt="" width={400} height={500} />
          </div>
        </div>
      </section>
      <section className="min-h-screen h-fit">
        <div className="w-full h-full flex-1 flex pt-20 flex-col items-center justify-start">
          <h1 className="text-white font-bold text-6xl lg:text-8xl">
            experience
          </h1>
          <div className="w-full flex flex-col lg:flex lg:flex-row justify-between gap-10 p-4 lg:p-20">
            <div className="flex flex-col items-start lg:items-center max-w-screen-sm w-full pt-5 lg:pt-0">
              <div>
                <h1 className="text-white font-bold text-4xl">education</h1>
              </div>
              <div className="flex flex-col gap-5 pt-10">
                <div className="p-2 rounded-lg">
                  <h1 className="text-gray-400 font-bold">2015-2022</h1>
                  <h1 className="text-white font-bold text-2xl">
                    Navrachana School Sama
                  </h1>
                  <h1>Vadodara, India</h1>
                  <h1 className="font-bold text-xl">High School Diploma</h1>
                </div>
                <div className="p-2 rounded-lg">
                  <h1 className="text-gray-400 font-bold">2022-2026</h1>
                  <h1 className="text-white font-bold text-2xl">
                    SRM Institute of Science and Technology (SRMIST)
                  </h1>
                  <h1>Chennai, India</h1>
                  <h1 className="font-bold text-xl">
                    Bachelor of Technology in Computer Science with
                    specialisation in Big Data Analysis
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start lg:items-center max-w-screen-sm w-full">
              <div>
                <h1 className="text-white font-bold text-4xl">
                  technical skills
                </h1>
              </div>
              <div className="flex flex-col gap-5 pt-10">
                <div>
                  <h1 className="text-gray-400 font-bold">Programming</h1>
                  <h1 className="text-white font-bold text-2xl">
                    Python,C/C++, Java, Javascript, Typescript, SQL, Node.js
                  </h1>
                </div>
                <div>
                  <h1 className="text-gray-400 font-bold">Frameworks</h1>
                  <h1 className="text-white font-bold text-2xl">
                    Jupyter, Google Colab, FastAPI
                  </h1>
                </div>
                <div>
                  <h1 className="text-gray-400 font-bold">Tools</h1>
                  <h1 className="text-white font-bold text-2xl">
                    Visual Studio Code, MongoDB, Postman, Git, Github, Heroku
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start lg:items-center max-w-screen-sm w-full">
              <div>
                <h1 className="text-white font-bold text-4xl">experience</h1>
              </div>
              <div className="flex flex-col gap-5 pt-10">
                <div>
                  <h1 className="text-gray-400 font-bold">Technical</h1>
                  <h1 className="text-white font-bold text-2xl">
                    Associate Lead
                  </h1>
                  <h1 className="text-sm">SRMKZILLA - Chennai</h1>
                  <h1 className="font-bold">May. 2023 - Present</h1>
                  <h1 className="font-bold text-xl mt-2">
                    Currently serving as a Associate Technical Lead for
                    SRMKZILLA, Mozilla student community, leading workshops and
                    events on technical skills for students.
                  </h1>
                  <h1 className="font-bold text-xl mt-2">
                    Organizing seminars and events to promote learning and
                    engagement with computer science tools and related topics.
                  </h1>
                </div>
                <div>
                  <h1 className="text-gray-400 font-bold">Technical</h1>
                  <h1 className="text-white font-bold text-2xl">Member</h1>
                  <h1 className="text-sm">SRMKZILLA - Chennai</h1>
                  <h1 className="font-bold">Sep. 2022 - Apr. 2023</h1>
                  <h1 className="font-bold text-xl mt-2">
                    Helped organizing and publicizing the events of the club in
                    the college and conducted publicity tasks.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
