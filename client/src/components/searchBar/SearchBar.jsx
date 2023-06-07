import { useDispatch, useSelector } from "react-redux";

import style from "./SearchBar.module.css";
import { nombreAbuscar } from "../../redux/actions";
import { useEffect, useState } from "react";

const SearchBar = () => {
  const name = useSelector((state) => state.name);
  const [searchName, setSearchName] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const name = e.target.value;
    setSearchName(name.trim());
  };
  useEffect(() => {
    dispatch(
      nombreAbuscar(searchName.charAt(0).toUpperCase() + searchName.slice(1))
    );
  }, [searchName]);

  return (
    <div className={style.container}>
      <input
        onChange={handleChange}
        placeholder="Buscar por nombre"
        className={style.input}
        type="text"
        value={name}
      />
    </div>
  );
};
export default SearchBar;
