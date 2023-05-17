import CardsContainer from "../../components/cardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllCountries } from "../../redux/actions";
import style from "./Home.module.css";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);
  return (
    <div className={style.container}>
      <CardsContainer />
    </div>
  );
};
export default Home;
