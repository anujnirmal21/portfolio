import { motion } from "framer-motion";
import Transition from "../components/Transition";

function About() {
  return (
    <div className=" w-screen flex justify-center items-center text-primary">
      <div className=" w-[90%] lg:w-[70%] flex flex-col gap-10 mt-[15vh] lg:mt-[20vh] mb-10 ">
        <motion.h1
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className=" text-6xl lg:text-[9rem] mb-5  text-center lg:text-start"
        >
          Anuj Nirmal
        </motion.h1>
        <motion.h2
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className=" text-xl lg:text-3xl"
        >
          I am creative Web developer based in Amravati, Maharashtra, India. I
          am a Computer Engineering graduate and later switched to the awesome
          world of web development.
        </motion.h2>
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className=" text-xl"
        >
          I believe in creating experiences that are interactive, clean and
          responsive. I enjoy using my skill-set to empower people to accomplish
          their goals.
        </motion.p>
        <motion.p
          className=" text-xl"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          My development stack is focused on performance & accessibility with
          delightful interactions. I create blazing fast web experience using
          MERN stack
        </motion.p>
        <motion.div
          className=" text-xl"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
        >
          <h3 className=" font-medium mb-2.5">Services i offer include :</h3>
          <ul className=" list-disc py-2 px-3.5 flex gap-3 flex-col">
            <li>Front end web development</li>
            <li>Full-stack web development</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

export default Transition(About);
