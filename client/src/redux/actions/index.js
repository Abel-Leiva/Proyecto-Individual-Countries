import axios from "axios";
export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const GET_ID_COUNTRY = "GET_ID_COUNTRY";
export const BY_NAME = "BY_NAME";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const FILTER_ACTIVITIES = "FILTER_ACTIVITIES";
export const FILTERED_CONTINENT = "FILTERED_CONTINENT";
export const FILTERED = "FILTERED";
export function getAllCountries() {
  return async function (dispatch) {
    const response = await axios
      .get("http://localhost:3002/countries")
      .then((data) => data.data);

    console.log("action", response);
    return dispatch({
      type: GET_ALL_COUNTRIES,
      payload: response,
    });
  };
}
export function getIdCountry(id) {
  return async function (dispatch) {
    const response = await axios
      .get(`http://localhost:3002/countries/${id}`)
      .then((data) => data.data);

    console.log("action", response);
    return dispatch({
      type: GET_ID_COUNTRY,
      payload: response,
    });
  };
}
export function getByName(name) {
  return async function (dispatch) {
    const response = await axios
      .get(`http://localhost:3002/countries/?name=${name}`)
      .then((data) => data.data);
    return dispatch({
      type: BY_NAME,
      payload: response,
    });
  };
}
export function getActivities() {
  return async function (dispatch) {
    const response = await axios
      .get(`http://localhost:3002/activities`)
      .then((data) => data.data);
    return dispatch({
      type: GET_ACTIVITIES,
      payload: response,
    });
  };
}
export function filterActivities(payload) {
  return {
    type: FILTER_ACTIVITIES,
    payload,
  };
}
export function filteredContinent(payload) {
  return {
    type: FILTERED_CONTINENT,
    payload,
  };
}

export function filtered() {
  return { type: FILTERED };
}
