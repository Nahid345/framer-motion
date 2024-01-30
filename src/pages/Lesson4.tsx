import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const Lesson4 = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  console.log(inView);
  return (
    <div className="border border-red-500 size-[600px] flex flex-col justify-center items-center">
      <motion.div
        className="size-64 bg-indigo-400 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-center"
        ref={ref}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 1, x: -500 }}
      ></motion.div>
    </div>
  );
};

export default Lesson4;
