import { heroData } from "../data";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Hero() {
  const { name, subtitle, miniBio } = heroData;

  return (
    <section className="my-40 min-h-[90vh] flex flex-col items-start justify-center -mt-4 lg:-ml-40">
      <div>
        <motion.div
          className="text-green text-sm tracking-wider font-firaCode ml-[20px]"
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1 }}
          viewport={{ once: true }}
        >
          Hi, my name is
        </motion.div>
        <motion.h1
          className="text-lightestSlate big-heading pt-[20px]"
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1.1 }}
          viewport={{ once: true }}
        >
          {name}
        </motion.h1>
        <motion.h2
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1.2 }}
          viewport={{ once: true }}
          className="text-slate big-heading"
        >
          {subtitle}
        </motion.h2>
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1.3 }}
          viewport={{ once: true }}
          className="text-slate mt-[20px] max-w-[540px] text-[20px] leading-[26px] font-thin"
        >
          {miniBio}
        </motion.p>
      </div>
    </section>
  );
}
