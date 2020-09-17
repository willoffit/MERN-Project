import * as GroupAPIUtil from '../util/group_api_util';

export const RECEIVE_GROUPS = 'RECEIVE_GROUPS';
export const RECEIVE_GROUP = 'RECEIVE_GROUP';
export const REMOVE_GROUP = 'REMOVE_GROUP';

export const receiveGroups = groups => ({
   type: RECEIVE_GROUPS,
   groups
});

export const receiveGroup = group => ({
   type: RECEIVE_GROUP,
   group
});

export const removeGroup = groupId => ({
   type: REMOVE_GROUP,
   groupId
});

export const fetchGroups = () => dispatch => {
   return GroupAPIUtil.fetchGroups()
      .then(groups => dispatch(receiveGroups(groups)))
};

export const fetchGroup = groupId => dispatch => {
   return GroupAPIUtil.fetchGroup(groupId)
      .then(group => dispatch(receiveGroup(group)))
};

export const createGroup = group => dispatch => {
   return GroupAPIUtil.createGroup(group)
      .then(createdGroup => dispatch(receiveGroup(createdGroup.data)))
};

export const updateGroup = group => dispatch => {
   return GroupAPIUtil.updateGroup(group)
      .then(group => dispatch(receiveGroup(JSON.parse(group.config.data))))
};

export const deleteGroup = groupId => dispatch => {
   return GroupAPIUtil.deleteGroup(groupId)
      .then((deletedGroup) => dispatch(removeGroup(deletedGroup)))
};
