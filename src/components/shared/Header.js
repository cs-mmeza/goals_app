import "./Header.css";
import { ReactComponent as Logo} from "../../img/logo.svg";
import { ReactComponent as Perfil} from "../../img/perfil.svg";


function  Header() {
  return (
    <div className="Header">
        <div className="container">
          <Logo className="logo"/>
          <a href="/" className="title">Goals App</a>
        </div>
        <nav>
          <a href="perfil" className="link">
            <Perfil className="icon"/>
          </a>
        </nav>
    </div>
  );
}

export default Header