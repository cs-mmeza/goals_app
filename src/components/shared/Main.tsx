import styles from "./Main.module.css";
import Links from "./Links";
import { ReactComponent as ListSVG } from "../../img/lista.svg";
import { ReactComponent as NewSVG } from "../../img/nueva.svg";

interface MainProps{
  children: React.ReactNode;
}

function Main({ children }: MainProps) {
  return ( // a tag without name  in html is called a fragment.
    <div className={styles.body}>
      <aside className={styles.aside}>
        <Links
          to="/list"
          text='Goals list'
          Icon={ListSVG} />
        <Links
          to="/new"
          text='Create new goal'
          Icon={NewSVG} />
      </aside>
      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
}

export default Main