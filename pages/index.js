// import styles from "../styles/.module.css";

// components
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SocialIcons from "../components/SocialIcons";
import EmailFixedLink from "../components/EmailFixedLink";
import { About } from "../components/About";

export default function Home() {
  return (
    <div className="font-inter mx-4 overflow-x-hidden">
      <Navbar />
      <Hero />
      <SocialIcons />
      <EmailFixedLink />
      <About />
    </div>
  );
}
