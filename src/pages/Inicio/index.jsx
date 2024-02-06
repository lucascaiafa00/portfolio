import "./style.css";
import { motion } from "framer-motion";

export default function index() {
  return (
    <section id="inicio">
      <motion.h1
        initial={{ opacity: 0, filter: "blur(10px)", scale: 1.2 }}
        animate={{ opacity: 1, y: 0, filter: "blur(0)", scale: 1 }}
        exit={{ opacity: 0, y: -30, filter: "blur(10px)", scale: 1.2 }}
        transition={{ duration: 1 }}
      >
        Lucas Caiafa
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0)", scale: 1 }}
        exit={{ opacity: 0, y: -30, filter: "blur(10px)", scale: 1.2 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        Desenvolvedor FullStack
      </motion.h2>
    </section>
  );
}
