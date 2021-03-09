import { useState } from "react";
import styles from "../style/components/Input.module.css";

interface InputProps {
  onClick: React.FormEventHandler<HTMLFormElement>;
  placeholder: string;
}

type event = React.ChangeEvent<HTMLInputElement>;

export default function Input({ onClick, placeholder }: InputProps) {
  const [value, setValue] = useState("");

  const handleInput = (e: event) => setValue(e.target.value);

  const isValidLogin = () => {
    if (value.trim() === "") {
      return;
    } else if (value) {
      return styles.btnGreen;
    }
  };

  return (
    <form className={styles.container} onSubmit={onClick}>
      <input
        value={value}
        onChange={handleInput}
        type="text"
        placeholder={placeholder}
      />
      <button type="submit" className={isValidLogin()}>
        <img src="/icons/arrow-right.svg" alt="arrow-right" />
      </button>
    </form>
  );
}
