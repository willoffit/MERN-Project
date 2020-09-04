import * as UsersAPIUtil from "../util/users_api_util";

export const RECEIVE_USERS = "RECEIVE_USERS";

export const UPDATE_USER = "UPDATE_USER";

export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users,
});

export const updateUser = (user) => ({
  type: UPDATE_USER,
  user, 
});

export const fetchUsers = () => (dispatch) => (
  UsersAPIUtil.fetchUsers()
    .then(users => dispatch(receiveUsers(users.data)))
)

export const editUser = (user) => (dispatch) => (
  UsersAPIUtil.updateUser(user)
    .then(user => dispatch(updateUser(JSON.parse(user.config.data))))
  )