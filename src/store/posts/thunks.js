import axios from "axios";
import postsFetched from "../feed/slice";
import startLoading from "../feed/slice";
import { charsFetched } from "./slice";

const apiUrl = "https://hp-assessment-api.herokuapp.com/hp/characters";

export const fetchChars = () => async (dispatch, getState) => {
  const response = await axios.get(`${apiUrl}`);
  //   console.log("this thunk fetch:", response.data);
  dispatch(charsFetched(response.data));
};
