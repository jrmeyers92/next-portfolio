import Image from "next/image";

import SectionHeading from "./SectionHeading";
import ProfilePic from "../public/assets/ProfPic.jpeg";
import { aboutData } from "../data";

export const About = () => {
  return (
    <section className="my-40 lg:-ml-20" id="about">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        <div className="flex items-center justify-center flex-col text-slate text-[20px] leading-[26px] font-thin">
          <SectionHeading title="About Me" />
          {aboutData.bio.map((paragraph) => (
            <p className="mb-3">{paragraph}</p>
          ))}
        </div>
        <Image
          src={ProfilePic}
          alt="Jake Meyers"
          width={300}
          height={300}
          className="rounded-3xl"
        />
      </div>
    </section>
  );
};
