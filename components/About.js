import Image from "next/image";

import SectionHeading from "./SectionHeading";
import ProfilePic from "../public/assets/ProfPic.jpeg";

export const About = () => {
  return (
    <section
      className="w-full flex flex-col md:flex-row items-center justify-center my-20 gap-6 mx-[75px]"
      id="about"
    >
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center flex-col max-w-lg text-slate text-[20px] leading-[26px] font-thin">
          <SectionHeading title="About Me" />
          <p className="mb-3">
            Greetings, I'm a Software Developer with industry experience using
            HTML, CSS, and JavaScript, React, Vue, Sass, Tailwind, Git and more.{" "}
          </p>
          <p className="mb-3">
            I enjoy teaching myself new technologies and computer science
            concepts. I'm currently reading Grokking Algorithms and playing
            around with the JavaScript D3 library.{" "}
          </p>
          <p className="mb-3">
            When not coding, you can find me playing with my dog, reading,
            camping or backpacking, mountain biking, going on float trips, or
            hanging out with friends and family.
          </p>
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
