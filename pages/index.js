// import styles from "../styles/.module.css";

// components
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SocialIcons from "../components/SocialIcons";
import EmailFixedLink from "../components/EmailFixedLink";
import { About } from "../components/About";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="font-inter mx-4">
      <Navbar />
      <SocialIcons />
      <EmailFixedLink />
      <div className="mx-4 md:mx-20  lg:flex lg:flex-col lg:items-center lg:justify-center">
        <div className="lg:max-w-2xl">
          <Hero />
          <About />
          <Experience />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}
