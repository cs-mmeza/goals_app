import styles from "./Header.module.css";
import { ReactComponent as LogoSVG } from "../../img/logo.svg";
import { ReactComponent as ProfileSVG } from "../../img/perfil.svg";
import Links from "./Links";


function Header() {
  return (
    <header className={styles.Header}>
      <div className={styles.container}>
        <LogoSVG className={styles.logo} />
        <a href="/" className={styles.title}>Goals App</a>
      </div>
      <nav>
        <Links
          to="/profile"
          Icon={ProfileSVG} />
      </nav>
    </header>
  );
}

export default Header