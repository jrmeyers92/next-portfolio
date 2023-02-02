// import styles from "../styles/.module.css";
// components
import Head from "next/head";
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
      <Head>
        <title>Jake Meyers Portfolio</title>
        <meta charset="UTF-8" />
        <meta name="description" content="A Web Development portfolio for Jake Meyers" />
        <meta name="keywords" content="Web Development, Software Developer, JavaScript, HTML, CSS, React, Node JS, Java, CoreMedia, Web Developer, Full Stack, Tailwind CSS, Bootstrap, Jquery" />
        <meta name="author" content="Jake Meyers" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
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
