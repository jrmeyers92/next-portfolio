import styles from "../styles/EmailFixedLink.module.css";

export default function EmailFixedLink() {
  return (
    <div className={styles.wrapper}>
      <a
        href="mailto:webmaster@example.com"
        className="text-light-slate font-firaCode"
      >
        Jakermeyers92@gmail.com
      </a>
    </div>
  );
}
