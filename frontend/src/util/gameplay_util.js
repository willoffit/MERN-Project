import axios from "axios";

export const getGame = (category) => {
  switch (category) {
    case "General":
      return axios.post(
        "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple"
      );
    case "Sports":
      return axios.post(
        "https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple"
      );
    case "Film":
      return axios.post(
        "https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple"
      );
    case "Science":
      return axios.post(
        "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple"
      );
    case "Geography":
      return axios.post(
        "https://opentdb.com/api.php?amount=10&category=22&difficulty=medium&type=multiple"
      );
    default:
      return "";
  }
};
