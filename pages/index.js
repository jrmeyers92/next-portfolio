// import styles from "../styles/.module.css";

// components
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SocialIcons from "../components/SocialIcons";
import EmailFixedLink from "../components/EmailFixedLink";

export default function Home() {
  return (
    <div className="max-w-screen font-inter">
      <Navbar />
      <Hero />
      <SocialIcons />
      <EmailFixedLink />
    </div>
  );
}
