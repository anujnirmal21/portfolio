import { useNavigate } from "react-router-dom";
import Button from "../components/home/Button";

import SideObjects from "../components/home/SideObjects";
import { motion } from "framer-motion";
import Transition from "../components/Transition";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="h-[110vh] w-screen bg-primary  relative overflow-hidden text-poppins flex justify-center items-center text-primary ">
      <SideObjects />
      <div className="w-[75%] flex justify-between h-[55%] items-end-safe">
        <div className=" z-20 flex gap-3 flex-col w-[55%]">
          <motion.h1
            className=" text-5xl font-normal "
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            Hi, I'm Anuj Nirmal
          </motion.h1>
          <motion.h2
            className=" text-7xl font-medium"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            I turn design into {"code"}
          </motion.h2>
          <motion.p
            className=" text-xl mt-5 font-normal"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.6 }}
          >
            I am a Creative Developer specializing in creating web apps with
            clean user interface and optimized user experience.
          </motion.p>
          <motion.div
            className=" pt-2.5"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.6 }}
          >
            <Button text="About Me" click={() => navigate("/main")} />
          </motion.div>
        </div>
        <motion.div
          className="w-[30%] z-10 h-full"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 10 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.img
            animate={{
              y: [-4, 4],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            src="/assets/prof1.png"
            alt="profile image"
            className="h-96 w-96"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Transition(Home);
