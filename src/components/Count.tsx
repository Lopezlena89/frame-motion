import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export const Count = () => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, Math.round);

    useEffect(() => {
        const animation = animate(count, 100, { duration: 10 });

        return animation.stop;
    }, []);
  return (
    <motion.h1 className="text-3xl font-bold">{rounded}</motion.h1>
  )
}
