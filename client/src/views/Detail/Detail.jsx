import style from "./Detail.module.css";
import { getIdCountry } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const country = useSelector((state) => state.detail);

  useEffect(() => {
    dispatch(getIdCountry(id));
  }, []);
  const activities = country.Activities?.map((e) => {
    return {
      name: e.name,
      difficulty: e.difficulty,
      duration: e.duration,
      season: e.season,
    };
  });
  console.log("existe", activities);
  return (
    <div className={style.container}>
      <div className={style.detailContainer}>
        <div>
          <p>Nombre: {country.name}</p>
          <p>{country.id}</p>
          <p>Continente: {country.continent}</p>
          <p>capital: {country.capital}</p>
          <p>Subregion: {country.subRegion}</p>
          <p>Area: {country.area}</p>
          <p>Población: {country.population}</p>
          {activities?.length > 0
            ? activities.map((act) => {
                return (
                  <div>
                    <h4>Actividades: {act.name}</h4>
                    <ul>
                      <li>Dificultad: {act.difficulty}</li>
                      <li>Duración: {act.duration}</li>
                      <li>Temporada: {act.season}</li>
                    </ul>
                  </div>
                );
              })
            : "sin actividad"}
        </div>
        <div className={style.imageContainer}>
          <img
            className={style.imagen}
            src={country.imageFlag}
            height=""
            alt={`bandera de ${country.imageFlag}`}
          />
        </div>
      </div>
    </div>
  );
};
export default Detail;
