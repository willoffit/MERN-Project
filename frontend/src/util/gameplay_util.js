import axios from "axios";

const type = { 
  general: 9, 
  sports: 21, 
  film: 11, 
  science: 18, 
  geography: 22, 
  history: 23, 
  politics: 24,
  art: 25,
  animals: 27,
  vehicles: 28,
  mythology: 20
}

export const getGame = category => {
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
    case "History":
      return axios.get(`/api/categories/${type.history}`);
    case "Politics":
      return axios.get(`/api/categories/${type.politics}`);
    case "Art":
      return axios.get(`/api/categories/${type.art}`);
    case "Animals":
      return axios.get(`/api/categories/${type.animals}`);
    case "Vehicles":
      return axios.get(`/api/categories/${type.vehicles}`);
    case "Mythology":
      return axios.get(`/api/categories/${type.mythology}`);
    default:
      return "";
  }
};

