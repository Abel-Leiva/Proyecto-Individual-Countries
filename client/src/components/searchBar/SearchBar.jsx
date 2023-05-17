import lupa from "./lupamundo.png";
import style from "./SearchBar.module.css";
const SearchBar = () => {
  return (
    <div className={style.container}>
      <input
        placeholder="Buscar por nombre"
        className={style.input}
        type="text"
      />
      <button className={style.button} type="button">
        <img src={lupa} className={style.img} alt="" />
      </button>
    </div>
  );
};
export default SearchBar;
