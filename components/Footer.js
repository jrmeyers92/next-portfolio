import Github from "../public/assets/github.svg";
import Linkedin from "../public/assets/linkedin.svg";

import { socialLinks } from "../data";

const Footer = () => {
  const { linkedin, github } = socialLinks;

  return (
    <div className="text-lightSlate font-firaCode my-12 flex flex-col items-center justify-center">
      <ul className="lg:hidden flex mb-6">
        <li className="p-2">
          <a href={github} target="_blank" className="cursor-pointer wrapper">
            <Github height={25} width={25} stroke={"#a8b2d1"} />
          </a>
        </li>
        <li className="p-2">
          <a href={linkedin} target="_blank" className="cursor-pointer wrapper">
            {" "}
            <Linkedin height={25} width={25} stroke={"#a8b2d1"} />
          </a>
        </li>
      </ul>
      <a
        href={socialLinks.github}
        target="_blank"
        className="hover:text-green duration-200"
      >
        Designed by Brittany Chiang. Built by Jake Meyers
      </a>
    </div>
  );
};

export default Footer;
