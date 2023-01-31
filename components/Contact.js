const Contact = () => {
  return (
    <section className="my-40 text-center" id="contact">
      <h2 className="contact-heading text-lightestSlate mb-[10px]">
        Get in Touch
      </h2>
      <p className="text-slate">
        Although I’m not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I’ll
        try my best to get back to you!
      </p>
      <a
        href="mailto:jakermeyers92@gmail.com"
        className="text-green inline-block border border-green rounded-[4px] py-5 px-7 mt-[50px] font-firaCode text-[14px] duration-200 contact-button"
      >
        Say Hello
      </a>
    </section>
  );
};

export default Contact;
