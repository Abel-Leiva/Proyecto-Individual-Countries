import CardsContainer from "../../components/cardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getActivities, getAllCountries } from "../../redux/actions";
import style from "./Home.module.css";
import Filters from "../../components/filters/Filters";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCountries());
    dispatch(getActivities());
  }, []);
  return (
    <div className={style.container}>
      <Filters />
      <CardsContainer />
    </div>
  );
};
export default Home;
