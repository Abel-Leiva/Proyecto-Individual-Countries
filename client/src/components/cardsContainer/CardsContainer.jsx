import style from "./CardsContainer.module.css";
import Card from "../card/Card";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Pagination } from "../pagination/pagination";

const CardsContainer = () => {
  const countries = useSelector((state) => state.countries);
  console.log("estos son los paises", countries);
  const [pagina, setPagina] = useState(1);
  const [porPagina, setPorPagina] = useState(10);
  const maximo = countries.length / porPagina;

  return (
    <div className={style.container}>
      <Pagination pagina={pagina} setPagina={setPagina} maximo={maximo} />
      <div>
        <div className={style.containerCards}>
          {countries
            .slice(
              (pagina - 1) * porPagina,
              (pagina - 1) * porPagina + porPagina
            )
            .map((c, i) => {
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
      </div>
    </div>
  );
};
export default CardsContainer;
