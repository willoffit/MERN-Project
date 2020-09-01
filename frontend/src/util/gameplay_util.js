import axios from "axios"; 

export const getGeneralCategory = () => {
  return axios.post(
    "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple"
  );
};

export const getSportsCategory = () => {
  return axios.post(
    "https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple"
  );
};

export const getFilmCategory = () => {
  return axios.post(
    "https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple"
  );
};

export const getScienceCategory = () => {
  return axios.post(
    "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple"
  );
};

export const getGeographyCategory = () => {
  return axios.post(
    "https://opentdb.com/api.php?amount=10&category=22&difficulty=medium&type=multiple"
  );
};
