import { motion } from "framer-motion";

const parent = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const child = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const Lesson2 = () => {
  return (
    <div>
      <motion.div
        className="size-56 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5 justify-items-center justify-center"
        variants={parent}
        initial="hidden"
        animate="visible"
        transition={{
          ease: "easeInOut",
          duration: 1.5,
          delayChildren: 0.5,
          staggerChildren: 0.5,
        }}
      >
        <motion.div
          className="size-16 bg-cyan-400 rounded-sm"
          variants={child}
        ></motion.div>
        <motion.div
          className="size-16 bg-cyan-400 rounded-sm"
          variants={child}
        ></motion.div>
        <motion.div
          className="size-16 bg-cyan-400 rounded-sm"
          variants={child}
        ></motion.div>
        <motion.div
          className="size-16 bg-cyan-400 rounded-sm"
          variants={child}
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default Lesson2;
