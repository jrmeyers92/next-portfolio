import styles from "../styles/EmailFixedLink.module.css";

export default function EmailFixedLink() {
  return (
    <div className={`${styles.wrapper} hidden md:flex`}>
      <a
        href="mailto:JakeRMeyers92@gmail.com"
        className="text-lightSlate font-firaCode"
        target="_blank"
      >
        Jakermeyers92@gmail.com
      </a>
    </div>
  );
}
