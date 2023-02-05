import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center mx-2">
      <motion.div
        className="text-5xl p-2 text-green logo font-extrabold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        durat
      >
        J
      </motion.div>
      <ul className="flex">
        <li className="p-[10px] text-[13px] uppercase font-firaCode text-lightestSlate duration-200 ease-in-out hover:text-green nav__item ">
          <a href="#about">About</a>
        </li>
        <li className="p-[10px] text-[13px] uppercase font-firaCode text-lightestSlate duration-200 ease-in-out hover:text-green nav__item nav__item-2 ">
          <a href="#experience">Experience</a>
        </li>
        <li className="p-[10px] text-[13px] uppercase font-firaCode text-lightestSlate duration-200 ease-in-out hover:text-green nav__item nav__item-3 ">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
