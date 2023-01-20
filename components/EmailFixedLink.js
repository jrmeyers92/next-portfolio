import styles from "../styles/EmailFixedLink.module.css";

export default function EmailFixedLink() {
  return (
    <div
      className={`${styles.wrapper} hidden md:flex md:flex-col fixed bottom-0 right-0 pr-[20px]`}
    >
      <a
        href="mailto:JakeRMeyers92@gmail.com"
        className="text-lightSlate font-firaCode hover:text-green hover:-translate-y-[5px] duration-200 hover:scale-105"
        target="_blank"
      >
        Jakermeyers92@gmail.com
      </a>
    </div>
  );
}
