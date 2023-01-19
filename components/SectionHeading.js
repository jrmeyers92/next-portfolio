import styles from "../styles/SectionHeading.module.css";

export default function SectionHeading({ title }) {
  return (
    <div className={styles.wrapper}>
      <h2 className="font-semibold text-[2rem] text-lightest-slate self-start">
        {title}
      </h2>
    </div>
  );
}
