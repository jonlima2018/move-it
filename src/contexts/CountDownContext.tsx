import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { ChallengesContext } from "./ChallengesContext";

interface CountDownContextData {
  porcentTime: number;
  minutes: number;
  seconds: number;
  hasFinished: boolean;
  isActive: boolean;
  startCountdown: () => void;
  resetCountdown: () => void;
}

interface CountDownProviderProps {
  children: ReactNode;
}

export const CountDownContext = createContext({} as CountDownContextData);

let countdownTimeout: NodeJS.Timeout;

export function CountDownProvider({ children }: CountDownProviderProps) {
  const { startNewChallenge } = useContext(ChallengesContext);

  const INITIALTIME = 25 * 60;
  const [time, setTime] = useState(INITIALTIME);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  function startCountdown() {
    setIsActive(true);
  }

  const porcentTime = String((time / INITIALTIME) * 100 - 100)
    .padStart(2, "-")
    .split("-")[1];

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setHasFinished(false);
    setTime(INITIALTIME);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);

  return (
    <CountDownContext.Provider
      value={{
        porcentTime: Number(porcentTime),
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountdown,
        resetCountdown,
      }}
    >
      {children}
    </CountDownContext.Provider>
  );
}
