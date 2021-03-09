import Head from "next/head";
import { useContext } from "react";
import Logo from "../../public/logo-full.svg";
import Input from "../components/Input";
import { LoginContext } from "../contexts/LoginContext";
import styles from "../style/pages/Login.module.css";

export default function Login() {
  const { handleLogin } = useContext(LoginContext);

  const handleClick = async (e) => {
    e.preventDefault();
    const login = e.target[0].value;
    handleLogin(login);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Login | move.it</title>
      </Head>
      <div className={styles.containerBG}>
        <img src="/bg-login.svg" alt="bg" />
      </div>
      <div className={styles.containerLogin}>
        <span className={styles.logo}>
          <Logo />
        </span>
        <h1>Bem-vindo</h1>
        <div>
          <img src="/icons/github.svg" alt="github" />
          <p>Faça login com seu Github para começar</p>
        </div>
        <Input onClick={handleClick} placeholder="Digite seu username" />
      </div>
    </div>
  );
}
