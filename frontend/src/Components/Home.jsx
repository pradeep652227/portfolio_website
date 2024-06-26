import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  ContainerMain,
  Button,
  HomeProjects,
  Form,
} from "./imports-components";
import { Link } from "react-router-dom";
import { briefs } from "../jsFiles/project-briefs";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  const skillsImgsStyles = { width: "60px" };
  const skillsImgsClasses =
    "p-1 rounded-xl w-fit shadow-xl hover:shadow-2xl duration-200 shadow-gray-500";
  const imageNames1 = ["react", "node", "express", "mongodb"];
  const imageNames2 = ["html", "css", "javascript"];
  return (
    <div id="home" className="">
      <div
        id="home-top-part"
        className="lg:px-48 grid grid-cols-1 sm:grid-cols-2 gap-x-0 border-black comfortaa bg-lime-100"
      >
        <img
          src="images/profile_pic.png"
          className="lg:w-9/12 mix-blend-multiply"
        />
        <div className="sm:self-center text-center">
          <h1 className="text-3xl sm:text-5xl">Pradeep Gaur</h1>
          <h1 className="text-2xl sm:text-3xl mt-2">
            Full Stack Developer | Computer Science Graduate
          </h1>
          <a
            href="https://drive.google.com/file/d/1d5_YbklsR2CQfTCYENtnDbZTw0FvMGiA/view?usp=sharing"
            rel="noopener noreffer"
            target="_blank"
          >
            <Button data-aos="fade-left" data-aos-duration="500">
              My Resume
            </Button>
          </a>
        </div>
      </div>
      <ContainerMain>
        <div id="home-mid">
          <section>
            <h1 className="briem-hand text-4xl text-center py-2 mt-4 w-1/3 mx-auto">
              Skills...
            </h1>
            <div className="skills-box rounded-xl mt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2">
                <div id="skills-1">
                  <h1 className="text-center text-2xl">Web Development</h1>
                  <div className="flex flex-wrap justify-center gap-x-4 gap-y-4 p-4">
                    {imageNames1.map((image) => (
                      <div key={image} className={skillsImgsClasses}>
                        <img
                          style={skillsImgsStyles}
                          src={`images/${image}.png`}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="mt-1 flex flex-wrap justify-center gap-x-4 gap-y-4 p-4">
                    {imageNames2.map((image) => (
                      <div
                        data-aos="fade-down"
                        data-aos-duration="600"
                        key={image}
                        className={skillsImgsClasses}
                      >
                        <img
                          style={skillsImgsStyles}
                          src={`images/${image}.png`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div id="skills-2">
                  <h1 className="text-center text-2xl">Programming</h1>
                  <div className="flex flex-wrap justify-center gap-x-4 gap-y-4 p-4">
                    <div
                      data-aos="fade-down"
                      data-aos-duration="600"
                      className={skillsImgsClasses}
                    >
                      <img style={skillsImgsStyles} src="images/c++.png" />
                    </div>
                    <div
                      data-aos="fade-down"
                      data-aos-duration="600"
                      className={skillsImgsClasses}
                    >
                      <img style={skillsImgsStyles} src="images/c.png" />
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="flex justify-center my-1">
                <Button>Browse More...</Button>
              </div> */}
            </div>
          </section>

          <section id="work" className="my-12">
            <h1 className="briem-hand text-4xl text-center py-2 mt-4 w-1/3 mx-auto">
              Projects...
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-4">
              <HomeProjects
                data-aos="fade-right"
                data-aos-duration="600"
                title="Full Stack Blog Application"
                brief={briefs[0]}
                skills={["React JS", "Node JS", "Express JS", "Mongo DB"]}
                isLive={true}
                liveUrl="https://blog-app-frontend-gray.vercel.app/"
                codeUrl="https://github.com/pradeep652227/Full-Stack-Blog-App"
              />
              <HomeProjects
                data-aos="fade-down"
                data-aos-duration="600"
                title="Full Stack Asset Management Application"
                brief={briefs[1]}
                skills={["React JS", "Node JS", "Express JS", "Mongo DB"]}
                isLive={true}
                liveUrl="https://asset-management-application-frontend.vercel.app/"
                codeUrl="https://github.com/pradeep652227/asset-management-application"
              />
              
              <HomeProjects
                data-aos="fade-down"
                data-aos-duration="600"
                title="To Do App NodeJS"
                brief={briefs[2]}
                skills={["Node JS", "Express JS", "Mongo DB", "EJS"]}
                isLive={true}
                liveUrl="https://to-do-list-version2-0.onrender.com/"
                codeUrl="https://github.com/pradeep652227/To-Do-List-version2.0"
              />
              <HomeProjects
                data-aos="fade-left"
                data-aos-duration="600"
                title="Authentication and Security"
                brief={briefs[3]}
                skills={["Node JS", "Express JS", "Mongo DB", "EJS", "OAuth"]}
                isLive={true}
                liveUrl="https://authentication-and-security.onrender.com/"
                codeUrl="https://github.com/pradeep652227/Authentication-And-Security"
              />
            </div>
          </section>
          <section id="about" className="bg-lime-100 mb-6">
            <h1 className="briem-hand text-4xl text-center py-2 mt-4 w-1/3 mx-auto">
              About Me...
            </h1>

            <p className="p-4 text-justify text-lg">
              Professional Computer Science Geek adept at developing full-stack
              applications. Demonstrates exceptional time-management and
              leadership skills in every step of the software development
              process. Successfully resolves complex problems through a
              proactive approach, utilizing a combination of learning,
              implementation, and debugging strategies.
            </p>
          </section>
          <section id="contact" className="mb-6">
            <h1 className="briem-hand text-4xl text-center py-2 mt-4 w-1/3 mx-auto">
              Contact...
            </h1>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <div className="bg-gray-200 shadow-xl p-4 rounded-xl w-fit">
                <img
                  src="images/location.png"
                  style={{ width: "30px" }}
                  className="float-left mr-1"
                />
                Jaipur, Rajasthan, 302012
              </div>
              <div className="bg-gray-200 shadow-xl p-4 rounded-xl w-fit">
                <a href="mailto:ps652227@gmail.com">
                  <img
                    src="images/email.png"
                    style={{ width: "30px" }}
                    className="float-left mr-1"
                  />
                  ps652227@gmail.com
                </a>
              </div>
            </div>
            <div className="mt-6">
              <Form />
            </div>
          </section>
        </div>
      </ContainerMain>
    </div>
  );
}
