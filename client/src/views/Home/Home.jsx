import CardsContainer from "../../components/cardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllCountries } from "../../redux/actions";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);
  return (
    <div>
      home
      <CardsContainer />
    </div>
  );
};
export default Home;
