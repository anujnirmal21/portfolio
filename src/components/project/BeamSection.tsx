import { FiExternalLink, FiGithub } from "react-icons/fi";
import { TracingBeam } from "../../ui/TraceBeam";
import dummyContent from "./data";
import { motion } from "framer-motion";
import { LayoutGrid } from "../../ui/LayoutGrid";

function BeamSection() {
  return (
    <TracingBeam className="px-6 mt-[6vh] w-full">
      <div className="max-w-4xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <motion.div
            key={`content-${index}`}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2 + index * 0.2, duration: 0.6 }}
          >
            {/* Project Header */}
            <div className="mb-12 ">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <h2 className="text-4xl md:text-5xl font-bold text-primary">
                    {item.title}
                  </h2>
                  <span className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
                    {item.badge}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <FiGithub className="text-2xl cursor-pointer hover:scale-110 duration-300 text-primary/70 hover:text-primary" />
                  <FiExternalLink className="text-2xl cursor-pointer hover:scale-110 duration-300 text-primary/70 hover:text-primary" />
                </div>
              </div>

              {/* Project Description */}
              <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="prose prose-primary max-w-none">
                  {item.description}
                </div>
              </div>
            </div>

            {/* Project Gallery */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 rounded-3xl blur-xl" />
              <div className="relative bg-primary/5 border border-primary/10 rounded-3xl p-6 backdrop-blur-sm">
                <div className="h-[60vh] md:h-[70vh] w-full cursor-pointer">
                  <LayoutGrid cards={item.cards} />
                </div>
              </div>
            </div>

            {/* Project Footer */}
            <div className="mt-6 flex items-center justify-between mb-20">
              <div className="flex items-center gap-2 text-primary/60">
                <span className="text-sm">Tech Stack:</span>
                <div className="flex gap-2">
                  {/* You can add tech stack badges here */}
                  <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md">
                    React
                  </span>
                  <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md">
                    Node.js
                  </span>
                  <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md">
                    Tailwind
                  </span>
                </div>
              </div>
              <button className="group flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-all duration-300 border border-primary/20">
                <span className="text-sm font-medium">View Details</span>
                <FiExternalLink className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </TracingBeam>
  );
}

export default BeamSection;
