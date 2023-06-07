import { useDispatch, useSelector } from "react-redux";
import style from "./Filters.module.css";
import { filterCountries, clearFilters } from "../../redux/actions";
import { useState, useEffect } from "react";
const Filters = () => {
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activities);
  const name = useSelector((state) => state.name);
  const alfab = useSelector((state) => state.alfab);
  const continent = useSelector((state) => state.continent);
  const activity = useSelector((state) => state.activity);
  const population = useSelector((state) => state.population);
  //declaro un estado local, que luego enviare al estado global con un dispatch dentro de un useEfect

  const [filtros, setFiltros] = useState({
    continent: continent,
    activity: activity,
    alfab: alfab,
    population: population,
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
  const handleClearFilters = (e) => {
    setFiltros({
      name: "",
      activity: "",
      population: "",
      alfab: "",
      continent: "",
    });
    dispatch(clearFilters());
  };
  return (
    <div className={style.containerFilters}>
      <button onClick={handleClearFilters}>Quitar Filtros</button>
      <span>Filtrar</span>
      <p>Por continente</p>
      <select
        name=""
        onChange={handleContinentChange}
        value={filtros.continent}
        id=""
      >
        <option value="">Todos</option>
        <option value="South America">South America</option>
        <option value="North America">Nort America</option>
        <option value="Europe">Europa</option>
        <option value="Asia">Asia</option>
        <option value="Africa">Africa</option>
        <option value="Oceania">Oceania</option>
        <option value="Antarctica">Antartica</option>
      </select>
      <p>Por actividat turistica</p>
      <select
        name=""
        id=""
        onChange={handleActivityChange}
        value={filtros.activity}
      >
        <option value="">Ninguna actividad</option>
        {nameActivities.map((activity, id) => (
          <option value={activity} key={id}>
            {activity}
          </option>
        ))}
      </select>
      <span>Ordenar</span>
      <p>Alfabetico</p>
      <select name="" id="" value={filtros.alfab} onChange={handleAlfab}>
        <option value="">Indisitinto</option>
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </select>
      <p>Por poblacion</p>
      <select name="" id="" value={filtros.population} onChange={handlePopul}>
        <option value="">Indisitino</option>
        <option value="asc">Asc</option>
        <option value="desc">Desc</option>
      </select>
    </div>
  );
};
export default Filters;
