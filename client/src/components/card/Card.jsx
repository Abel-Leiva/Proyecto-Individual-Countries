import { Link } from "react-router-dom/cjs/react-router-dom.min";
import style from "./Card.module.css";
const Card = (props) => {
  return (
    <Link className={style.Link} to={`/detail/${props.id}`}>
      <div className={style.card}>
        <div className={style.divInfo}>
          <span>
            <h3>{props.name}</h3>
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
