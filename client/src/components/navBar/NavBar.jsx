import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import style from "./NavBar.module.css";
const NavBar = () => {
  return (
    <div className={style.containerNav}>
      <Link to="/home">Home</Link>
      <SearchBar />
      <Link to="/create">Nueva actividad</Link>
    </div>
  );
};
export default NavBar;
