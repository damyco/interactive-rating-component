import styles from "/styles/Button.module.css";

export default function Button({ text, onClick }) {
  return (
    <button onClick={onClick} className={styles.buttonPrimary}>
      {text}
    </button>
  );
}
