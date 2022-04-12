
import axios from "axios";
import { API_LINK } from "../config/API";

export const usePost = (text) => {
  axios.post(API_LINK, {
    text,
  });
};
export const useGet = () => {
  axios.get(API_LINK).then((response) => {
    return response.data
  });
};
