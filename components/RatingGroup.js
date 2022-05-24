import Circle from "./Circle";

import styles from "/styles/RatingGroup.module.css";

export default function RatingGroup({ activeIndex, setActiveIndex }) {
  const numberOfComponents = [1, 2, 3, 4, 5];

  return (
    <div className={styles.wrapper}>
      {numberOfComponents.map((item) => {
        return (
          <Circle
            key={item}
            onClick={() => setActiveIndex(item)}
            isActive={activeIndex === item}
          >
            <p>{item}</p>
          </Circle>
        );
      })}
    </div>
  );
}
