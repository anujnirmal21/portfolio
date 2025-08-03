import { motion } from "framer-motion";
import { itemVariants } from "../../lib/variants";

const skills = [
  "Hands-on with Git, TypeScript, Tailwind CSS, and modern frontend tooling.",
  "Strong grasp of Agile workflows and cross-functional team collaboration.",
  "Proficient in translating Figma designs into clean, scalable components.",
  "Skilled in building performance-optimized web apps with Next.js and React.",
];

const SkillsList = () => (
  <div className="space-y-8">
    <div className="flex items-center gap-4 mb-8">
      <motion.div
        className="w-2 h-16 bg-gradient-to-b from-blue-400 to-green-400 rounded-full"
        initial={{ height: 0 }}
        animate={{ height: 64 }}
        transition={{ delay: 2.5, duration: 0.8 }}
      />
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-poppins">
          Abilities and Skills
        </h2>
      </div>
    </div>
    {skills.map((skill, index) => (
      <motion.div
        key={index}
        variants={itemVariants}
        whileHover={{ x: 10, backgroundColor: "#fff" }}
        className="flex items-start gap-4 p-4 rounded-2xl transition-colors cursor-pointer group"
      >
        <motion.div
          className="w-3 h-3 bg-gradient-to-br from-blue-400 to-green-400 rounded-full mt-2 flex-shrink-0"
          whileHover={{ scale: 1.5 }}
        />
        <p className="text-gray-700 leading-relaxed text-poppins group-hover:text-gray-900 transition-colors">
          {skill}
        </p>
      </motion.div>
    ))}
  </div>
);

export default SkillsList;
