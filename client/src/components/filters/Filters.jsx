import { useDispatch, useSelector } from "react-redux";
import style from "./Filters.module.css";
import { filterCountries } from "../../redux/actions";
import { useState, useEffect } from "react";
const Filters = () => {
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activities);
  const name = useSelector((state) => state.name);
  //declaro un estado local, que luego enviare al estado global con un dispatch dentro de un useEfect

  const [filtros, setFiltros] = useState({
    continent: "",
    activity: "",
    alfab: "",
    population: "",
    name: name,
  });
  ///
  useEffect(() => {
    setFiltros((prevFiltros) => ({
      ...prevFiltros,
      name: name,
    }));
  }, [name]);
  //descomento esto y se me rompe no se por que
  useEffect(() => {
    dispatch(filterCountries(filtros));
  }, [filtros]);

  //mapeo y traigo los nombres de la actividad para renderizarlos como options

  const nameActivities = activities.map((activity) => activity.name);
  const cActivities = activities.map((activity) => activity.Countries);
  /////
  ///////
  const handleActivityChange = (e) => {
    const activity = e.target.value;
    setFiltros({ ...filtros, activity: activity });
  };
  const handleContinentChange = (e) => {
    const continent = e.target.value;
    setFiltros({ ...filtros, continent: continent });
  };
  const handlePopul = (e) => {
    const orden = e.target.value;
    setFiltros({ ...filtros, alfab: "", population: orden });
  };
  const handleAlfab = (e) => {
    const orden = e.target.value;
    setFiltros({ ...filtros, population: "", alfab: orden });
  };

  return (
    <div className={style.containerFilters}>
      <span>Filtrar</span>
      <select name="" onChange={handleContinentChange} id="">
        <option value="" selected="true">
          Por continente
        </option>
        <option value="South America">South America</option>
        <option value="North America">Nort America</option>
        <option value="Europe">Europa</option>
        <option value="Asia">Asia</option>
        <option value="Africa">Africa</option>
        <option value="Oceania">Oceania</option>
        <option value="Antarctica">Antartica</option>
      </select>

      <select name="" id="" onChange={handleActivityChange}>
        <option value="">Por actividad</option>
        {nameActivities.map((activity, id) => (
          <option value={activity} key={id}>
            {activity}
          </option>
        ))}
      </select>
      <span>Ordenar</span>
      <select name="" id="" value={filtros.alfab} onChange={handleAlfab}>
        <option value="">Orden alfabetico</option>
        <option value="asc">a-z</option>
        <option value="desc">z-a</option>
      </select>
      <select name="" id="" value={filtros.population} onChange={handlePopul}>
        <option value="">Por Poblacion</option>
        <option value="asc">asc</option>
        <option value="desc">desc</option>
      </select>
    </div>
  );
};
export default Filters;
