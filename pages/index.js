// import styles from "../styles/.module.css";

// components
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SocialIcons from "../components/SocialIcons";
import EmailFixedLink from "../components/EmailFixedLink";
import { About } from "../components/About";
import Experience from "../components/Experience";

export default function Home() {
  return (
    <div className="font-inter mx-4 overflow-x-hidden">
      <Navbar />
      <Hero />
      <SocialIcons />
      <EmailFixedLink />
      <div className="flex flex-col items-center justify-center">
        <About />
        <Experience />
      </div>
    </div>
  );
}
