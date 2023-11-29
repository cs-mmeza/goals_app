import styles from "./Links.module.css";

function Links ({Icon , text, href}) {
    return ( // render if text
        <a href={href} className={styles.link}>
            <Icon className={styles.icon}/>
            {text &&<span className={styles.text}>{text}</span>} 
        </a>
    );
}

export default Links;