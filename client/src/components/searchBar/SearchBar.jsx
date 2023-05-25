import { useDispatch, useSelector } from "react-redux";
import lupa from "./lupamundo.png";
import style from "./SearchBar.module.css";
import { getByName } from "../../redux/actions";
import { useState } from "react";
const SearchBar = () => {
  const [searchName, setSearchName] = useState("");
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      getByName(searchName.charAt(0).toUpperCase() + searchName.slice(1))
    );
  };
  const handleChange = (e) => {
    const name = e.target.value;
    setSearchName(name);
  };

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit} action="">
        <input
          onChange={handleChange}
          placeholder="Buscar por nombre"
          className={style.input}
          type="text"
        />
        <button className={style.button} type="submit">
          <img src={lupa} className={style.img} alt="" />
        </button>
      </form>
    </div>
  );
};
export default SearchBar;
