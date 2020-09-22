import axios from "axios";

export const fetchUsers = () => {
  return axios.get("/api/users/");
};

export const updateUser = user => {
  console.log('api util update')
  console.log(user)
  return axios.patch(`/api/users/${user._id}`, user)
}
