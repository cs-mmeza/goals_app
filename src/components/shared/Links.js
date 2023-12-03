import { Link } from "react-router-dom";
import styles from "./Links.module.css";

function Links ({Icon , text, to}) {
    return ( // render if text
        <Link to={to} className={styles.link}>
            <Icon className={styles.icon}/>
            {text &&<span className={styles.text}>{text}</span>} 
        </Link>
    );
}

export default Links;