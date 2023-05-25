import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import style from "./NavBar.module.css";
import logo from "./logo_henry.png";
const NavBar = () => {
  return (
    <div className={style.containerNav}>
      <div className={style.divlogo}>
        <img src={logo} height="45px" alt="" />
        <span>PI Countries</span>
      </div>
      <div className={style.divNav}>
        <Link className={style.link} to="/home">
          Inicio
        </Link>
        <SearchBar />
        <Link className={style.link} to="/create">
          Nueva actividad
        </Link>
      </div>
    </div>
  );
};
export default NavBar;
