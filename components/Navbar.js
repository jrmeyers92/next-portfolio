import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center mx-2">
      <span className={`${styles.logo} text-5xl p-2`}>J</span>
      <ul className="flex">
        <li
          className={`${styles.link} p-[10px] text-[13px] uppercase font-firaCode`}
        >
          <a href="#">About</a>
        </li>
        <li
          className={`${styles.link} p-[10px] text-[13px] uppercase font-firaCode`}
        >
          <a href="#">Projects</a>
        </li>
        <li
          className={`${styles.link} p-[10px] text-[13px] uppercase font-firaCode`}
        >
          <a href="#">Experience</a>
        </li>
        <li
          className={`${styles.link} p-[10px] text-[13px] uppercase font-firaCode`}
        >
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
