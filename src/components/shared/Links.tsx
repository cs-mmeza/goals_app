import { Link } from "react-router-dom";
import styles from "./Links.module.css";

interface LinkProps{
    Icon: any;
    text: string;
    to: string;
}
function Links ({Icon , text, to}: LinkProps) {
    return ( // render if text
        <Link to={to} className={styles.link}>
            <Icon className={styles.icon}/>
            {text &&<span className={styles.text}>{text}</span>} 
        </Link>
    );
}

export default Links;