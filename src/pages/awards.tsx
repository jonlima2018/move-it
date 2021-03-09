import Head from "next/head";

import styles from "../style/pages/Home.module.css";

import SideBar from "../components/SideBar";

export default function Awards() {
  return (
    <div className={styles.container}>
      <SideBar />
      <Head>
        <title>Awards | move.it</title>
      </Head>
    </div>
  );
}
