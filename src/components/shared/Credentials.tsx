import React, {ChangeEvent, useState} from "react";
import styles from "./Credentials.module.css";

interface CredentialsProps {
    send: Function;
    title: string;
    button: string;
}

function Credentials ({send, title, button}: CredentialsProps) {
    const [form, setForm] = useState({
        username: "", 
        password: "",
    });
    const { username, password } = form;

    const onChange = (event: ChangeEvent, prop: string) => {
        const value = (event.target as HTMLInputElement).value;
        setForm((state) => ({ ...state, [prop]: value }));
    };

    const inAccess = async (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        event.preventDefault();
        send(form);
    };

    return (
        <div className={'card ' + styles.auth}>
            <h1 className={styles.head}>{title}</h1>
            <form className="p-4">
                <label className="label">
                    user
                    <input 
                        className="input"
                        placeholder="Type your Email"
                        value={username}
                        onChange={(e) => onChange(e, "username")}
                    />
                </label>
                <label className="label">
                    password
                    <input 
                        className="input"
                        placeholder="Type your password"
                        value={password}
                        onChange={(e) => onChange(e, "password")}
                    />
                </label>
            </form>
            <div className="buttons">
                <button className="button button--black" onClick={(e) => inAccess(e)}>{button}</button>
            </div>
        </div>
        );
}

export default Credentials;