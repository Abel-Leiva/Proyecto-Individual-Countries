import style from "./Landing.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllCountries, getActivities } from "../../redux/actions";
const Landing = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCountries());
    dispatch(getActivities());
  }, [dispatch]);
  return (
    <div className={style.container}>
      <div className={style.divWelcome}>
        <span>
          <img
            src="https://www.soyhenry.com/_next/image?url=https%3A%2F%2Fassets.soyhenry.com%2Fhenry-landing%2Fassets%2FHenry%2Flogo-white.png&w=128&q=75"
            alt="henry"
          />
        </span>
        <span>Bienvenido a mi Proyecto Indiviual "Countries"</span>

        <Link to="/home" className={style.button}>
          Ingresar
        </Link>
      </div>
      <div className={style.divimg}>
        <img
          src="https://images7.alphacoders.com/347/347216.jpg"
          alt="Mapa del mundoo"
        />
      </div>
    </div>
  );
};
export default Landing;
