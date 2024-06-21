import { useState, useRef } from "react";
import "./App.css";

import AppHeader from "./components/header/app-header";
import { motion } from "framer-motion";
import rankpactLogo from "./assets/rp-icon.svg";
import rankpactMockup from "./assets/rankpact-site.png";
import { FaAngular, FaGithub, FaGlobe, FaLinkedin, FaNodeJs, FaTwitter } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { MdOutgoingMail } from "react-icons/md";

function App() {
  const [background, setBackground] = useState("formal");
  const [backgroundTransition, setBackgroundTransition] = useState("formal");
  const timeoutRef = useRef<number | null>(null);

  const handleClick = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set the transition state immediately
    setBackgroundTransition(background === "formal" ? "informal" : "formal");

    // Set a new timeout to change the background after the transition to ensure background color is not removed before the transition is complete
    timeoutRef.current = window.setTimeout(() => {
      setBackground(background === "formal" ? "informal" : "formal");
    }, 1000);
  };

  const getColorClass = () => {
    return background === "informal" ? "bg-[#f87e58]" : "bg-slate-200";
  };

  return (
    <div className="w-full flex justify-center">
      <div className={`App w-[550px] z-10 flex flex-col ${getColorClass()} `}>
        <div className={`grow  w-full relative`}>
          <div className="fixed z-[1]">
            <div className="h-[px] bg-[#f87e58] flex items-center justify-between px-4">
              <span className="wvs font-semibold text-[#3d3d3d]">wvs.dev</span>
              <div className="flex gap-4 text-white">
                <FaLinkedin />
                <FaTwitter />
                <MdOutgoingMail />
              </div>
            </div>
            <AppHeader
              setBackground={handleClick}
              background={backgroundTransition}
            />
            <div className={`flex flex-1 w-[550px] z-10  border-b-[3px] border-white font-medium`}>
              <button
                onClick={handleClick}
                className="bg-[#f87e58] text-white p-4 grow flex justify-center items-center border-r-[1.5px] border-white flex flex-col"
              >
                Projects
                <motion.div
                  initial={{ opacity: 0, x: -200 }}
                  animate={backgroundTransition === "informal" ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.2, type: "spring" }}
                  className="bg-white w-[32px] h-[5px] rounded"
                ></motion.div>
              </button>
              <button
                onClick={handleClick}
                className="bg-[#f87e58] text-white p-4 grow flex justify-center items-center border-l-[1.5px] border-white flex flex-col"
              >
                Experience
                <motion.div
                  initial={{ opacity: 0, x: 200 }}
                  animate={backgroundTransition === "formal" ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.2, type: "spring" }}
                  className="bg-white w-[32px] h-[5px] rounded"
                ></motion.div>
              </button>
            </div>
          </div>
          <div className={`w-full mt-[250px]`}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={backgroundTransition === "informal" ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.2, delay: background === "informal" ? 0 : 0.8 }}
            >
              <div className="p-4 border-white border-b">
                <div className="flex items-center gap-4">
                  <div className="w-[50px] h-[50px] bg-white rounded-full flex justify-center items-center">
                    <img
                      className="w-[30px] h-[30px]"
                      src={rankpactLogo}
                      alt="Rankpact"
                    ></img>
                  </div>
                  <span className="font-medium">Rankpact</span>
                  <div className="flex justify-end gap-3">
                    <FaGithub
                      size="20px"
                      color="white"
                    />
                    <FaGlobe
                      size="20px"
                      color="white"
                    />
                  </div>
                </div>
                <div className="ml-[68px]">
                  <span>
                    Rankpact is a web application to create and optimize SEO content. Users can create new content with the use of AI and
                    track the results of this new content, to optimize their visibility.
                  </span>

                  <div className="flex gap-8 mt-4">
                    <FaNodeJs
                      size="20px"
                      color="#3d3d3d"
                    />
                    <FaAngular
                      size="20px"
                      color="#3d3d3d"
                    />
                    <SiTypescript
                      size="20px"
                      color="#3d3d3d"
                    />
                    <IoLogoFirebase
                      size="20px"
                      color="#3d3d3d"
                    />
                  </div>
                </div>
                <div className="bg-[#e8e8e8] rounded-2xl">
                  <img
                    className="rounded-xl mt-4"
                    src={rankpactMockup}
                    alt="Rankpact website"
                  />
                </div>
              </div>

              <div className="p-4 border-white border-b">
                <div className="flex items-center gap-4">
                  <div className="w-[50px] h-[50px] bg-white rounded-full flex justify-center items-center">
                    <img
                      className="w-[30px] h-[30px]"
                      src={rankpactLogo}
                      alt="Rankpact"
                    ></img>
                  </div>
                  <span className="font-medium">Rankpact</span>
                  <div className="flex justify-end gap-3">
                    <FaGithub
                      size="20px"
                      color="#33918c"
                    />
                    <FaGlobe
                      size="20px"
                      color="#33918c"
                    />
                  </div>
                </div>
                <div className="ml-[68px]">
                  <span>
                    Rankpact is a web application to create and optimize SEO content. Users can create new content with the use of AI and
                    track the results of this new content, to optimize their visibility.
                  </span>

                  <div className="flex gap-8 mt-4">
                    <FaNodeJs
                      size="20px"
                      color="white"
                    />
                    <FaAngular
                      size="20px"
                      color="white"
                    />
                    <SiTypescript
                      size="20px"
                      color="white"
                    />
                    <IoLogoFirebase
                      size="20px"
                      color="white"
                    />
                  </div>
                </div>
                <div className="bg-[#e8e8e8] rounded-2xl">
                  <img
                    className="rounded-xl mt-4"
                    src={rankpactMockup}
                    alt="Rankpact website"
                  />
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={backgroundTransition === "formal" ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.2, delay: background === "formal" ? 0 : 0.8 }}
            ></motion.div>
          </div>
          <div className={`transition-container background-transition--${backgroundTransition} absolute top-0 left-0 w-full h-full`}></div>
        </div>
      </div>
    </div>
  );
}

export default App;
