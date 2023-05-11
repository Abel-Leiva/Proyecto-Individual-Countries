import { Link } from "react-router-dom/cjs/react-router-dom.min";
import style from "./Card.module.css";
const Card = (props) => {
  return (
    <Link className={style.card} to={`/detail/${props.id}`}>
      <div>
        {" "}
        <img
          src={props.imageFlag}
          width="150px"
          height="auto"
          alt={`bandera de ${props.imageFlags}`}
        />{" "}
        <h3>{props.name}</h3>
        <h4>{props.continent}</h4>
      </div>
    </Link>
  );
};
export default Card;
