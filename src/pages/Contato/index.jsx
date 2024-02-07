import "./style.css";
import { MdArrowOutward } from "react-icons/md";
import {motion} from "framer-motion"

export default function Contato() {
  return (
    <section id="contato">
      <motion.h1 className="titulo"
      initial={{opacity:0, y:-20}}
      animate={{opacity:1, y:0}}
      exit={{opacity:0, y:-20}}
      transition={{duration: 1}}
      >Contato</motion.h1>
      <motion.div className="links-container"
      initial={{opacity:0, y:-20}}
      animate={{opacity:1, y:0}}
      exit={{opacity:0, y:-20}}
      transition={{duration: 1, delay: .4}}>
        <div className="email">
          Email <a target="_blank" href="mailto:lucascaiafa00@gmail.com">lucascaiafa00@gmail.com</a>

        </div>
        <div className="link-contato">
          <MdArrowOutward />
          <a target="_blank" href="https://www.linkedin.com/in/lucas-caiafa-08398a232/?originalSubdomain=br">Linkedin</a>
        </div>
        <div className="link-contato">
          <MdArrowOutward />
          <a target="_blank" href="https://github.com/lucascaiafa00">Github</a>
        </div>
        <div className="link-contato">
          <MdArrowOutward />
          <a target="_blank" href="https://www.instagram.com/lucascaiafa00?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">Instagram</a>
        </div>
      </motion.div>
    </section>
  );
}
