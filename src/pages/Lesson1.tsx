import { motion } from "framer-motion";

const parent = {
  first: { rotate: 0 },
  last: { rotate: 360 },
};

const Lesson1 = () => {
  return (
    <div>
      <motion.div
        className="size-56 bg-indigo-500 rounded-lg"
        variants={parent}
        initial="first"
        animate="last"
        transition={{
          ease: "linear",
          duration: 2,
        }}
      ></motion.div>
    </div>
  );
};

export default Lesson1;
