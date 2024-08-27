import { motion } from "framer-motion";

export const Hover = () => {
  return (
    <motion.div
      className="w-[200px] h-[200px] rounded-xl bg-white"
      /**
       * Setting the initial keyframe to "null" will use
       * the current value to allow for interruptable keyframes.
       */
      whileHover={{ scale: [null, 1.5, 1.4] }}
      transition={{ duration: 0.3 }}
    />
  )
}
