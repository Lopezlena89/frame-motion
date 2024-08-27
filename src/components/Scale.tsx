import { motion } from "framer-motion";

export const Scale = () => {
  return (
    <motion.button
        className="w-[200px] h-[200px] rounded-xl bg-white"
        initial={{ opacity: 0.6 }}
        whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
        }}
        whileTap={{ scale: 0.9 }}
        whileInView={{ opacity: 1 }}
    />
  )
}
