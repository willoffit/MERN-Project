import axios from "axios";

const type = { general: 9, sports: 21, film: 11, science: 18, geography: 22 }

export const getGame = (category) => {
  switch (category) {
    case "General Knowledge":
      return axios.get(`/api/categories/${type.general}`);
    case "Sports":
      return axios.get(`/api/categories/${type.sports}`);
    case "Film":
      return axios.get(`/api/categories/${type.film}`);
    case "Science":
      return axios.get(`/api/categories/${type.science}`);
    case "Geography":
      return axios.get(`/api/categories/${type.geography}`);
    default:
      return "";
  }
};

