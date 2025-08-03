import { motion } from "framer-motion";
import { itemVariants } from "../../lib/variants";

const achievements = [
  "Developed 2+ responsive dashboards and a marketing landing page in Next.js, reducing load time to under 1.5s.",
  "Converted 20+ Figma designs into WCAG-compliant React components, boosting frontend velocity by 40%.",
  "Collaborated in 5+ agile sprints, streamlining UI revision cycles by 30%.",
  "Independently shipped 6+ production-ready features, resulting in a freelance contract extension.",
];

const AchievementsList = () => (
  <div className="space-y-8">
    <div className="flex items-center gap-4 mb-8">
      <motion.div
        className="w-2 h-16 bg-gradient-to-b from-orange-400 to-yellow-400 rounded-full"
        initial={{ height: 0 }}
        animate={{ height: 64 }}
        transition={{ delay: 2, duration: 0.8 }}
      />
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-poppins">
          Key Achievements
        </h2>
      </div>
    </div>
    {achievements.map((achievement, index) => (
      <motion.div
        key={index}
        variants={itemVariants}
        whileHover={{ x: 10, backgroundColor: "#fff" }}
        className="flex items-start gap-4 p-4 rounded-2xl transition-colors cursor-pointer group"
      >
        <motion.div
          className="w-3 h-3 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full mt-2 flex-shrink-0"
          whileHover={{ scale: 1.5 }}
        />
        <p className="text-gray-700 leading-relaxed text-poppins group-hover:text-gray-900 transition-colors">
          {achievement}
        </p>
      </motion.div>
    ))}
  </div>
);

export default AchievementsList;
