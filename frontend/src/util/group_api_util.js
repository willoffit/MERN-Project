import axios from 'axios';

export const fetchGroups = () => {
   return axios.get('/api/groups')
};

export const fetchGroup = groupId => {
   return axios.get(`/api/groups/${groupId}`)
};

export const createGroup = group => {
   return axios.post(`/api/groups/`, group)
};

export const updateGroup = group => {
   return axios.patch(`/api/groups/${group._id}`, group)
};

export const deleteGroup = groupId => {
   return axios.delete(`/api/groups/${groupId}`)
};
