import {
  FILTERS,
  FILTERS_FAILURE,
  GET_ACTIVITIES,
  GET_ALL_COUNTRIES,
  GET_COUNTRIES_FAILURE,
  GET_ID_COUNTRY,
  GET_ID_COUNTRY_FAILURE,
  SEARCH_NAME,
  CLEAR_FILTERS,
} from "../actions";

let initialState = {
  countries: [],
  copyAllcountries: [],
  filterActivity: [],
  activities: [],
  detail: {},
  name: "",
  activity: "",
  alfab: "",
  population: "",
  continent: "",
  failure: null,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    // case GET_ALL_COUNTRIES:
    //   return {
    //     ...state,
    //     countries: action.payload,
    //     copyAllcountries: action.payload,
    //     failure: null,
    //   };
    case GET_ALL_COUNTRIES:
      const randomizedCountries = action.payload
        .slice()
        .sort(() => Math.random() - 0.5);
      return {
        ...state,
        countries: randomizedCountries,
        copyAllcountries: randomizedCountries,
        failure: null,
      };
    //
    case GET_ID_COUNTRY:
      return { ...state, detail: action.payload, failure: null };
    //
    case SEARCH_NAME:
      return {
        ...state,

        name: action.payload,
      };
    //
    case GET_ACTIVITIES:
      return { ...state, activities: action.payload };

    //
    case FILTERS:
      let { paisesFiltrados, activity, alfab, population, continent } =
        action.payload;

      if (continent && continent !== "") {
        paisesFiltrados = paisesFiltrados.filter(
          (pais) => pais.continent === continent
        );
      }

      if (activity && activity !== "") {
        let arrayFilters = [];
        paisesFiltrados.forEach((country) => {
          country.Activities.forEach((e) => {
            if (e.name === activity) {
              arrayFilters.push(country);
            }
          });
        });
        paisesFiltrados = arrayFilters;
      }
      ///
      if (population && population !== "") {
        paisesFiltrados =
          population === "asc"
            ? paisesFiltrados.sort((a, b) => a.population - b.population)
            : paisesFiltrados.sort((a, b) => b.population - a.population);
      }
      ////
      if (alfab && alfab !== "") {
        alfab === "asc"
          ? (paisesFiltrados = paisesFiltrados.sort((a, b) =>
              a.name.localeCompare(b.name)
            ))
          : (paisesFiltrados = paisesFiltrados.sort((a, b) =>
              b.name.localeCompare(a.name)
            ));
      }

      return {
        ...state,
        countries: paisesFiltrados,
        failure: null,
        activity: activity,
        population: population,
        alfab: alfab,
        continent: continent,
      };
    case GET_COUNTRIES_FAILURE:
      return { ...state, failure: action.payload };
    case GET_ID_COUNTRY_FAILURE:
      return { ...state, failure: action.payload };
    case FILTERS_FAILURE:
      return { ...state, failure: action.payload };
    case CLEAR_FILTERS:
      return {
        ...state,
        name: "",
        activity: "",
        population: "",
        alfab: "",
        continent: "",
      };

    default:
      return state;
  }
}
export default rootReducer;
