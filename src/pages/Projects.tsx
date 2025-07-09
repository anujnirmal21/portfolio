import { motion } from "framer-motion";
import Transition from "../components/Transition";

function Projects() {
  return (
    <div className=" w-screen flex justify-center items-center">
      <div className="lg:w-[70%] flex flex-col gap-10 mt-[20vh] mb-10">
        <motion.h1
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className=" text-7xl mb-5"
        >
          Projects
        </motion.h1>
      </div>
    </div>
  );
}

export default Transition(Projects);
