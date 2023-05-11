import style from "./Filters.module.css";
const Filters = () => {
  return (
    <div className={style.containerFilters}>
      <span>filtro continente </span>
      <span>filtro actividad </span>
      <span>ordenar paises </span>
      <span>ordenar poblacion </span>
    </div>
  );
};
export default Filters;
