import { motion } from "framer-motion";

function Bottom() {
  return (
    <div className="w-full max-w-4xl px-6 py-16 text-center">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="border-t border-primary/20 pt-8"
      >
        <h3 className="text-2xl font-semibold text-primary mb-4">
          Want to collaborate?
        </h3>
        <p className="text-primary/70 mb-6 max-w-2xl mx-auto">
          I'm always open to discussing new projects and opportunities. Let's
          build something amazing together.
        </p>
        <button className="group px-6 py-3 bg-primary text-background rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105">
          Get in Touch
        </button>
      </motion.div>
    </div>
  );
}

export default Bottom;
