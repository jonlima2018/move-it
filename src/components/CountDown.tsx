import { useContext } from "react";
import { CountDownContext } from "../contexts/CountDownContext";
import IconClose from "../../public/icons/close.svg";
import styles from "../style/components/CountDown.module.css";

export function CountDown() {
  const {
    porcentTime,
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown,
  } = useContext(CountDownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button disabled className={styles.countdownButton}>
          Ciclo encerrado <img src="icons/check.svg" alt="Ciclo encerrado" />
        </button>
      ) : isActive ? (
        <div className={styles.countdownButtonContainer}>
          <button
            onClick={resetCountdown}
            type="button"
            className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
          >
            Abandonar Ciclo <IconClose />
          </button>
          <span>
            <span style={{ width: `${porcentTime}%` }}></span>
          </span>
        </div>
      ) : (
        <button
          onClick={startCountdown}
          type="button"
          className={styles.countdownButton}
        >
          Iniciar um ciclo <img src="icons/start.svg" alt="Iniciar um ciclo" />
        </button>
      )}
    </div>
  );
}
