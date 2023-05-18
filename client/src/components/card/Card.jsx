import { Link } from "react-router-dom/cjs/react-router-dom.min";
import style from "./Card.module.css";
const Card = (props) => {
  return (
    <Link className={style.Link} to={`/detail/${props.id}`}>
      <div className={style.card}>
        <div className={style.divInfo}>
          <span>
            <p>Nombre </p> <br />
            <span>{props.name}</span>
          </span>
          <span>
            <p>Continente</p> <br />
            <span>{props.continent}</span>
          </span>
        </div>
        <div className={style.divImg}>
          <img src={props.imageFlag} alt={`bandera de ${props.imageFlags}`} />
        </div>
      </div>
    </Link>
  );
};
export default Card;
