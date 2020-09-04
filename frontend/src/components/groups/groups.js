import React from "react";
import { withRouter } from "react-router-dom";

class GroupForm extends React.Component {
    constructor(props) {
        super(props);
        // TODO: get users from database 
        this.state = {
            selectedUserId: null,
            selectedUsersId: [],
            groupName: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.onAddUser = this.onAddUser.bind(this);
        this.onConfirm = this.onConfirm.bind(this);
        this.removeUser = this.removeUser.bind(this);
        this.handleGroupNameInput = this.handleGroupNameInput.bind(this);
    }
    
    componentDidMount(){
        this.props.fetchUsers()
    }

    removeUser(e){ 
        e.preventDefault(); 
        const updatedArray = this.state.selectedUsersId.slice(0, this.state.selectedUsersId.indexOf(e.target.value)).concat(this.state.selectedUsersId.slice(this.state.selectedUsersId.indexOf(e.target.value) + 1, this.state.selectedUsersId.length));
        this.setState({selectedUsersId: updatedArray})
    }

    updateUser(group) {
        // debugger
        let users = Object.values(group.members).map(userId => {
            console.log(this.props.users[userId]);
            console.log(group._id);

            this.props.users[userId].group = group._id;

            console.log(this.props.users[userId]);
            return this.props.users[userId]
        })

        users.forEach(user => {
            this.props.updateUser(user);
        })
    }

    onConfirm(e){
        e.preventDefault();
        let members;
        let name;
        let group = {};
        group.name = this.state.groupName
        group.members = this.state.selectedUsersId
        console.log(group);
        this.props.createGroup(group)
            .then(action => this.updateUser(action.group))
            .then(() => this.props.history.push("/category"))
            // .then(group => console.log(group))
        // const formData = new FormData();
        // formData.append('group[id]', this.props.match.params.groupId);
        // formData.append('group[name]', this.state.groupName);
        // formData.append('group[members]', this.state.selectedUsersId);
        
        // this.props.createGroup(formData);
        console.log("this.state.groupName:", this.state.groupName);
        console.log("this.state.selectedUsersId:", this.state.selectedUsersId)
        // console.log("form data:", formData)


        // const formData2 = new FormData();]
        // formData2.append('user[group]', this.props.match.params.group);
        // this.props.updateUser(formData2);
    }

    handleGroupNameInput(e){
        e.preventDefault();
        this.setState({ groupName: e.currentTarget.value });
    };

    onAddUser(e){
        e.preventDefault();
       
        if( this.state.selectedUsersId.indexOf(this.state.selectedUserId) === -1 && this.state.selectedUserId !== null && this.state.selectedUsersId.length < 4){
            this.setState({
                selectedUsersId: this.state.selectedUsersId.concat(this.state.selectedUserId),
            });
        }
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({ selectedUserId: e.currentTarget.value });
    };

    render() {
        if (Object.values(this.props.users).length === 0){
            return null 
        }
        let test = Object.values(this.props.users)
        let memberList = this.state.selectedUsersId.map((userId, i) => {
            console.log(userId)
            return (
                <li>{this.props.users[userId].username}<button onClick={this.removeUser} value={userId}>remove user</button></li>
            )
        })
       
        let users = Object.values(this.props.users)

        const defaultOption = "_1"
        return (
            <div className="create-group-form">
                <h1 className="create-group-header">Create Group</h1>
                <h4>Group max size 4</h4>
                <form className="">
                <label for="GroupName">Group Name:</label>
                <input onChange={this.handleGroupNameInput} type="text" id="GroupName" name="GroupName" /><br></br>
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
                    <button onClick={this.onConfirm}>Confirm</button>
                </form>
                <div className="">
                    <ol>
                        {
                        memberList
                        }
                       
                    </ol> 
                </div>
            </div>
        );
    }
}

export default withRouter(GroupForm);
