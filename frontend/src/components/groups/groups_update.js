import React from "react";
import { withRouter } from "react-router-dom";
import "./group.css";

class GroupUpdate extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         selectedUserId: null,
         selectedUsersId: this.props.group.members,
         groupName: this.props.group.name
      };

      this.handleChange = this.handleChange.bind(this);
      this.onAddUser = this.onAddUser.bind(this);
      this.onConfirm = this.onConfirm.bind(this);
      this.removeUser = this.removeUser.bind(this);
      this.handleGroupNameInput = this.handleGroupNameInput.bind(this);
   }

   componentDidMount() {
      this.props.fetchUsers()
         .then(this.props.fetchGroup(this.props.groups._id));
   }

   removeUser(e) {
      let selectedUsersId = this.state.selectedUsersId;
      let idx = selectedUsersId.indexOf(e.target.value);
      let before = this.state.selectedUsersId.slice(0, idx);
      let after = this.state.selectedUsersId.slice(idx + 1, selectedUsersId.length)
      e.preventDefault();
      const updatedArray = this.state.selectedUsersId.slice(0, this.state.selectedUsersId.indexOf(e.target.value)).concat(this.state.selectedUsersId.slice(this.state.selectedUsersId.indexOf(e.target.value) + 1, this.state.selectedUsersId.length));
      this.setState({ selectedUsersId: updatedArray })
   }

   updateUser(group) {
      let users = Object.values(group.members).map(userId => {
         this.props.users[userId].group = group._id;
         return this.props.users[userId]
      })

      users.forEach(user => {
         this.props.updateUser(user);
      })
   }

   onConfirm(e) {
      e.preventDefault();

      let group = {};
      group.name = this.state.groupName
      group.members = this.state.selectedUsersId;

      this.props.createGroup(group)
         .then(action => this.updateUser(action.group))
         .then(() => this.props.history.push("/category"))
   }

   handleGroupNameInput(e) {
      e.preventDefault();
      this.setState({ groupName: e.currentTarget.value });
   };

   onAddUser(e) {
      e.preventDefault();
      if (this.state.selectedUsersId.indexOf(this.state.selectedUserId) === -1 && this.state.selectedUserId !== null && this.state.selectedUsersId.length < 4) {
         this.setState({
            selectedUsersId: this.state.selectedUsersId.concat([this.state.selectedUserId]),
         });
      }
   }

   handleChange(e) {
      e.preventDefault();
      this.setState({ selectedUserId: e.currentTarget.value });
   };

   render() {
      if (Object.values(this.props.users).length === 0) {
         return null
      }

      let memberList = this.state.selectedUsersId.map((userId, i) => {
         return (
            <div className="member">
               <div className="member-select-user">
                  {this.props.users[userId].username}
               </div>
               <div>
                  <button className="remove-user" onClick={this.removeUser} value={userId}>Remove User</button>
               </div>
            </div>
         )
      })

      let users = Object.values(this.props.users)

      const defaultOption = "_1"
      
      return (
         <div className="create-group-form">
            <h1 className="create-group-header">UPDATE GROUP</h1>
            <div className="create-group-groupname">
               <label for="GroupName">Group Name:</label>
               <input value={this.state.groupName} className="create-group-groupname-input" onChange={this.handleGroupNameInput} type="text" id="GroupName" name="GroupName" /><br></br>

            </div>
            <div className="create-group-select-members">
               <select value={this.state.selectedUserId || defaultOption} name="users" onChange={this.handleChange}>
                  <option value="_1" selected={true} disabled={true}>Select User</option>
                  {
                     users.map((user, i) => {
                        return (
                           <option value={user._id} selected>{user.username}</option>
                        )
                     })
                  }
               </select>
               <button onClick={this.onAddUser}>Add user</button>
               <button onClick={this.onConfirm}>Confirm Group</button>
            </div>
            <div>
               <div className="member-list">
                  {memberList}
               </div>
            </div>
         </div>
      );
   }
}

export default withRouter(GroupUpdate);
