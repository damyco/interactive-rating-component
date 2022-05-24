import { useState } from "react";

import Circle from "./Circle";
import RatingGroup from "./RatingGroup";
import Button from "./Button";

import styles from "/styles/Card.module.css";

export default function Card() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    if (activeIndex > 0) {
      setIsSubmitted(true);
    }
  };

  const centerContent = isSubmitted ? styles.centerCard : "";

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.card} ${centerContent}`}>
        {isSubmitted ? (
          <>
            <img
              className={styles.illustration}
              src="/illustration-thank-you.svg"
              alt="Thank you illustration"
              width="150"
              height="100"
            />
            <p className={styles.selectedRatingText}>
              You selected {activeIndex} out of 5
            </p>
            <h2 className={styles.heading}>Thank you!</h2>
            <p className={styles.text}>
              We appreciate you taking the time to give a rating. If you ever
              need more support, don&apos;t hesitate to get in touch!
            </p>
          </>
        ) : (
          <>
            <Circle>
              <img src="/icon-star.svg" alt="Star icon" />
            </Circle>
            <h2 className={styles.heading}>How did we do?</h2>
            <p className={styles.text}>
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>
            <RatingGroup
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
            <Button text="submit" onClick={handleSubmit} />
          </>
        )}
      </div>
    </div>
  );
}
