// const countries = [
//   {
//     id: "AND",
//     name: "Andorra",
//     imageFlag: "https://flagcdn.com/ad.svg",
//     continent: "Europe",
//   },
//   {
//     id: "AND",
//     name: "Andorra",
//     imageFlag: "https://flagcdn.com/ad.svg",
//     continent: "Europe",
//   },
//   {
//     id: "AND",
//     name: "Andorra",
//     imageFlag: "https://flagcdn.com/ad.svg",
//     continent: "Europe",
//   },
//   {
//     id: "AND",
//     name: "Andorra",
//     imageFlag: "https://flagcdn.com/ad.svg",
//     continent: "Europe",
//     capital: "Andorra la Vella",
//     subRegion: "Southern Europe",
//     area: 468,
//     population: 77265,
//   },
//   {
//     id: "AND",
//     name: "Andorra",
//     imageFlag: "https://flagcdn.com/ad.svg",
//     continent: "Europe",
//     capital: "Andorra la Vella",
//     subRegion: "Southern Europe",
//     area: 468,
//     population: 77265,
//   },
//   {
//     id: "AND",
//     name: "Andorra",
//     imageFlag: "https://flagcdn.com/ad.svg",
//     continent: "Europe",
//     capital: "Andorra la Vella",
//     subRegion: "Southern Europe",
//     area: 468,
//     population: 77265,
//   },
//   {
//     id: "AND",
//     name: "Andorra",
//     imageFlag: "https://flagcdn.com/ad.svg",
//     continent: "Europe",
//     capital: "Andorra la Vella",
//     subRegion: "Southern Europe",
//     area: 468,
//     population: 77265,
//   },
// ];
import style from "./CardsContainer.module.css";
import Card from "../card/Card";
import { useSelector } from "react-redux";

const CardsContainer = () => {
  const countries = useSelector((state) => state.allCountries);

  return (
    <div className={style.container}>
      {countries.map((c, i) => {
        return (
          <Card
            key={i}
            imageFlag={c.imageFlag}
            name={c.name}
            continent={c.continent}
            id={c.id}
          />
        );
      })}
    </div>
  );
};
export default CardsContainer;
