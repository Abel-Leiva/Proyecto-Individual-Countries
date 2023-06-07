import style from "./Detail.module.css";
import { getIdCountry } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import {
  useParams,
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";

const Detail = () => {
  const failure = useSelector((state) => state.failure);
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
  const history = useHistory();

  const handleGoBack = () => {
    history.goBack();
  };
  return (
    <>
      {failure ? (
        <div className={style.failure}>{failure}</div>
      ) : (
        <div className={style.container}>
          <div className={style.detailContainer}>
            <div className={style.text}>
              <h2> {country.name}</h2>
              <div className={style.imageContainer}>
                <img
                  className={style.imagen}
                  src={country.imageFlag}
                  height=""
                  alt={`bandera de ${country.imageFlag}`}
                />
              </div>

              <p>Continente: {country.continent}</p>
              <p>Capital: {country.capital}</p>
              <p>Subregion: {country.subRegion}</p>
              <p>Area: {country.area}</p>
              <p>Población: {country.population}</p>
            </div>

            <div className={style.actContainer}>
              <h2>Actividades </h2>
              {activities?.length > 0 ? (
                activities.map((act, id) => {
                  return (
                    <div key={id}>
                      <h3>{act.name}</h3>
                      <ul>
                        <li>Dificultad: {act.difficulty}</li>
                        <li>Duración: {act.duration} hora/s</li>
                        <li>Temporada: {act.season}</li>
                      </ul>
                    </div>
                  );
                })
              ) : (
                <span>No hay actividades creadas para este pais.</span>
              )}
            </div>
          </div>
          <button onClick={handleGoBack}>Volver</button>
        </div>
      )}
    </>
  );
};
export default Detail;
