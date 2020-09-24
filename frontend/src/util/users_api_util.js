import axios from "axios";

export const fetchUsers = () => {
  return axios.get("/api/users/");
};

export const updateUser = user => {
  return axios.patch(`/api/users/${user._id}`, user)
}
