import { Link } from "react-router-dom/cjs/react-router-dom.min";
import style from "./Card.module.css";
const Card = (props) => {
  return (
    <Link className={style.Link} to={`/detail/${props.id}`}>
      <div className={style.card}>
        <div>
          <h3>Nombre: {props.name}</h3>
          <h4>Continente: {props.continent}</h4>
        </div>
        <div>
          <img
            src={props.imageFlag}
            height="200px"
            width="200px"
            alt={`bandera de ${props.imageFlags}`}
          />
        </div>
      </div>
    </Link>
  );
};
export default Card;
