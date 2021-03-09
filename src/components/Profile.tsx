import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import { LoginContext } from "../contexts/LoginContext";
import styles from "../style/components/Profile.module.css";

export function Profile() {
  const { level } = useContext(ChallengesContext);
  const { name, avatar_url } = useContext(LoginContext);
  return (
    <div className={styles.profileContainer}>
      <img src={avatar_url} alt="Jonathan Martins" />
      <div>
        <strong>{name}</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
