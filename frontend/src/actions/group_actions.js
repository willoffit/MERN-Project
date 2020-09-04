import * as GroupAPIUtil from '../util/group_api_util';

export const addUsersToGroup = (userIds) => {
    console.log("userIds in group action", userIds);
    // TODO: either pass userIDs to another page or pass to db
}
    

export const RECEIVE_GROUPS = 'RECEIVE_GROUPS';
export const RECEIVE_GROUP = 'RECEIVE_GROUP';
export const REMOVE_GROUP = 'REMOVE_GROUP';

export const receiveGroups = groups => ({
   type: RECEIVE_GROUPS,
   groups
});

export const receiveGroup = groupId => ({
   type: RECEIVE_GROUP,
   groupId
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
      .then(createdGroup => dispatch(receiveGroup(createdGroup)))
};

export const updateGroup = group => dispatch => {
   return GroupAPIUtil.updateGroup(group)
      .then(updatedGroup => dispatch(receiveGroup(updatedGroup)))
};

export const deleteGroup = groupId => dispatch => {
   return GroupAPIUtil.deleteGroup(groupId)
      .then((deletedGroup) => dispatch(removeGroup(deletedGroup)))
};
