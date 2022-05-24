import styles from "/styles/Circle.module.css";

export default function Circle({ children, onClick, isActive }) {
  const activeClass = isActive ? styles.active : "";

  return (
    <div onClick={onClick} className={`${styles.circle} ${activeClass}`}>
      {children}
    </div>
  );
}
