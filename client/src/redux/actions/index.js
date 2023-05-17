import axios from "axios";
export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const GET_ID_COUNTRY = "GET_ID_COUNTRY";

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
