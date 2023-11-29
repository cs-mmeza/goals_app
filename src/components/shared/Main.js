import styles from "./Main.module.css";
import Links from "./Links";
import {ReactComponent as ListSVG } from "../../img/lista.svg";
import {ReactComponent as NewSVG } from "../../img/nueva.svg";

function  Main({children}) {
    return ( // a tag without name  in html is called a fragment.
      <div className={styles.body}>  
          <aside className={styles.aside}>
            <Links 
              href="/list" 
              text='Goals list'
              Icon={ListSVG} />
            <Links 
              href="/create" 
              text='Create new goal'
              Icon={NewSVG} />
          </aside>
          <main className="main">
            {children}
          </main>
      </div>
    );
  }
  
  export default Main