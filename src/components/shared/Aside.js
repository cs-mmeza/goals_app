import Links from "./Links";
import styles from "./Aside.module.css"
import { ReactComponent as ListSVG } from "../../img/lista.svg";
import { ReactComponent as NewSVG } from "../../img/nueva.svg";

function Aside() {
    return (
        <aside className={styles.aside}>
          <Links 
            to="/list" 
            texto="List of goals" 
            Icono={ListSVG} />
          <Links 
            to="/new" 
            texto="New Goal" 
            Icono={NewSVG} />
        </aside>
      );
}

export default Aside;