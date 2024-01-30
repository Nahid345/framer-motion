import { motion } from "framer-motion";

const parent = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.5,
    },
  },
  hover: {
    scale: 1.1,
    transition: {
      scale: 1.1,
      duration: 0.5,
    },
  },
  tap: { scale: 1.1, rotate: 45 },
};

const Lesson3 = () => {
  return (
    <div>
      <motion.div
        className="size-56 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5 justify-items-center justify-center"
        variants={parent}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        whileTap="tap"
      ></motion.div>
    </div>
  );
};

export default Lesson3;
