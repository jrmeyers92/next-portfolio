import styles from "../styles/EmailFixedLink.module.css";
import { email } from "../data";
import { motion } from "framer-motion";

export default function EmailFixedLink() {
  return (
    <motion.div
      className={`${styles.wrapper} hidden md:flex md:flex-col fixed bottom-0 right-0 pr-[20px]`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.8 }}
    >
      <a
        href="mailto:JakeRMeyers92@gmail.com"
        className="text-lightSlate font-firaCode hover:text-green hover:-translate-y-[5px] duration-200 hover:scale-105"
        target="_blank"
      >
        {email}
      </a>
    </motion.div>
  );
}
