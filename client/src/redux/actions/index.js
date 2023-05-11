import axios from "axios";
export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
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
