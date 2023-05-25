import { useDispatch, useSelector } from "react-redux";
import style from "./Filters.module.css";

import {
  filterActivities,
  filtered,
  filteredContinent,
  getAllCountries,
} from "../../redux/actions";
import { useState } from "react";
const Filters = () => {
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activities);
  const [activityFilters, setActivityFilters] = useState([]);
  const nameActivities = activities.map((activity) => activity.name);
  const cActivities = activities.map((activity) => activity.Countries);
  console.log("los nombres", cActivities);

  const handleActivityChange = (e) => {
    const activity = e.target.value;
    // if (activity == "all") {
    dispatch(filterActivities(activity));
    dispatch(filtered());
    // } else {
    //   const paises = activities.filter((e) => e.name === activity);
    //   console.log(paises[0].Countries);
    //   dispatch(filterActivities(paises[0].Countries));
    // }
  };
  const handleContinentChange = (e) => {
    const continent = e.target.value;
    console.log(continent);
    dispatch(filteredContinent(continent));
  };
  return (
    <div className={style.containerFilters}>
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
      <select name="" id="">
        <option value="">Orden alfabetico</option>
        <option value="">a-z</option>
        <option value="">z-a</option>
      </select>
      <select name="" id="">
        <option value="">Por Poblacion</option>
        <option value="">asc</option>
        <option value="">desc</option>
      </select>
    </div>
  );
};
export default Filters;
