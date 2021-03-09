import Logo from "../../public/logo.svg";
import styles from "../style/components/SideBar.module.css";
import Home from "../../public/icons/home.svg";
import Award from "../../public/icons/award.svg";
import { useRouter } from "next/router";

type event = React.MouseEvent<HTMLAnchorElement>;

export default function SideBar() {
  const router = useRouter();

  const activeLink = (href: string) => {
    return router.pathname === href ? styles.navbarActive : "";
  };

  const handleClick = (e: event, href: string) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <div className={styles.container}>
      <Logo />
      <nav className={styles.navbar}>
        <ul>
          <a href="/home" onClick={(e) => handleClick(e, "/home")}>
            <li className={activeLink("/home")}>
              <Home />
            </li>
          </a>
          <a href="/awards" onClick={(e) => handleClick(e, "/awards")}>
            <li className={activeLink("/awards")}>
              <Award />
            </li>
          </a>
        </ul>
      </nav>
    </div>
  );
}
