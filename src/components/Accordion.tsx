import { useState } from "react";
import { motion } from "framer-motion";

export const Accordion = () => {
    const [isOpen, setOpen] = useState(false)
  
    return (
      <motion.div
        className="w-[300px] bg-white rounded-lg"
        layout
        style={{ height: isOpen ? "100px" : "500px" }}
        onClick={() => setOpen(!isOpen)}
      />
    )
}
