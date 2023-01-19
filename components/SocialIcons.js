import styles from "../styles/SocialIcons.module.css";

import Github from "../public/assets/github.svg";
import Linkedin from "../public/assets/linkedin.svg";

import { socialLinks } from "../data";

export default function SocialIcons() {
  const { linkedin, github } = socialLinks;
  return (
    <div className={`${styles.wrapper} hidden md:flex`}>
      <ul>
        <li className="p-2">
          <a href={github} target="_blank" className="cursor-pointer">
            <Github height={25} width={25} stroke={"#a8b2d1"} />
          </a>
        </li>
        <li className="p-2">
          <a href={linkedin} target="_blank" className="cursor-pointer">
            {" "}
            <Linkedin height={25} width={25} stroke={"#a8b2d1"} />
          </a>
        </li>
      </ul>
    </div>
  );
}
