import { motion } from "framer-motion";
import { projects } from "./lib/projects.js";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
const App = () => {
  return (
    <div
      className="min-h-screen py-6 g3 p-1"
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(247, 228, 236) 1px, transparent 0)`,
        backgroundSize: "8px 8px",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="flex items-center justify-between px-4 pb-6">
        <div className="flex items-center">
          <a
            href="https://peerlist.io/ram720800"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="peerlist.png"
              alt="peerlist"
              width={"38px"}
              height={"38px"}
              className="mr-2 rounded-full"
            />
          </a>
          <a
            href="https://ui.aceternity.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="aceternity.png"
              alt="aceternity"
              width={"38px"}
              height={"38px"}
              className="mr-2 rounded-full"
            />
          </a>
        </div>
        <div>
          <a
            href="https://x.com/Ram720800"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="me.jpg"
              alt="me"
              width={"38px"}
              height={"38px"}
              className="rounded-full shadow-2xl"
            />
          </a>
        </div>
      </div>
      <div className="relative flex items-center justify-center">
        <motion.div
          animate={{ y: [-1, 10, 1] }}
          transition={{ duration: 4, repeat: Infinity, times: [0, 0.5, 1] }}
        >
          <div className="absolute right-1 w-40 h-40 rounded-full bg-gradient-to-br from-wl1 to-green1 blur-3xl opacity-80"></div>
          <img
            src="peerlist.png"
            alt="peerlist"
            width={"120px"}
            height={"120px"}
            className="relative -rotate-12"
          />
        </motion.div>
        <motion.div
          animate={{ y: [-1, 10, 1] }}
          transition={{ duration: 4, repeat: Infinity, times: [0, 0.5, 1] }}
        >
          <div className="absolute left-1 w-40 h-40 rounded-full bg-gradient-to-br from-wl1 to-bl1 blur-3xl opacity-80"></div>
          <img
            src="aceternity.png"
            alt="aceternity"
            width={"120px"}
            height={"120px"}
            className="relative rotate-12"
          />
        </motion.div>
      </div>
      <div className="flex flex-col items-center justify-center my-10 sm:mt-20">
        <div className="font-extrabold text-4xl sm:text-6xl">
          <span className="text-green">Peerlist</span> X{" "}
          <span className="text-bl1">Aceternity</span>
        </div>
        <div className="text-pink4  text-2xl sm:text-4xl font-bold mt-4">
          UI Animation Challenge
        </div>
        <div className="text-pink3 my-10 text-lg font-semibold">
          Submission by Ramesh(ram720800)
        </div>
      </div>

      <div className="flex flex-wrap gap-2 justify-center">
        {projects.map((project) => {
          const [loaded, setLoaded] = useState(false);
          return (
            <div
              key={project.id}
              className={`relative flex flex-col justify-between w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] rounded-xl`}
            >
              <div
                className={`aspect-video rounded-xl shadow-[0_5px_15px_rgba(0,0,0,0.08),0_15px_35px_-5px_rgba(25,28,33,0.2)] ring-1 ring-gray-950/5 hover:ring-[#fc75b2]/5 transition overflow-hidden pb-16 bg-pink ${
                  project.height
                } ${project.id === 4 ? "sm:-mt-32" : ""} ${
                  project.id === 5 ? "sm:-mt-4" : ""
                } `}
              >
                <video
                  src={project.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className={`w-full h-full object-cover transition duration-700 ${
                    loaded ? "opacity-100" : "opacity-0"
                  }`}
                  onLoadedData={() => setLoaded(true)}
                />
                {project.id !== 6 ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-gray-200 shadow-2xl border border-[#f7f7f7] my-3 mx-1 p-2 rounded-md"
                  >
                    <div className=" text-pink4 text-center">
                      Live Prototype
                    </div>
                    <ArrowRight size={18} className="text-pink4" />
                  </a>
                ) : (
                  ""
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
