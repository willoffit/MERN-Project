import React from "react";
import { withRouter } from "react-router-dom";
import { addUsersToGroup } from "../../actions/group_actions";
// import './form.css';

class GroupForm extends React.Component {
    constructor(props) {
        super(props);
        // TODO: get users from database 
        this.state = {
            selectedUserId: null,
            selectedUsersId: []
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.onAddUser = this.onAddUser.bind(this);
        this.onConfirm = this.onConfirm.bind(this);
        this.removeUser = this.removeUser.bind(this);
        // this.selectedUsersIdDuplicate = this.selectedUsersIdDuplicate(this);
    }
    

    // selectedUsersIdDuplicate = () => {
    //     this.state.selectedUsersId.map((user, i) => {
    //         return (
    //             <li>{user}<button onClick={this.removeUser} value={user}>remove user</button></li>
    //         )
    //     })
    // };

    // Once the user has been authenticated, redirect to the Tweets page
    componentWillReceiveProps(nextProps) {
        // if (nextProps.currentUser === true) {
        //     this.props.history.push("/tweets");
        // }

        // Set or clear errors
        // this.setState({ errors: nextProps.errors });
    }

    componentDidUpdate(prevProps, prevState){
       

    }



    // Handle field updates (called in the render method)
    // 
    // update(field) {
    //     return (e) =>
    //         this.setState({
    //             [field]: e.currentTarget.value,
    //         });
    // }

    // Handle form submission
    // handleSubmit(e) {
    //     e.preventDefault();

    //     let user = {
    //         email: this.state.email,
    //         password: this.state.password,
    //     };

    //     this.props.login(user);
    // }

    // Render the session errors if there are any
    // renderErrors() {
    //     return (
    //         <ul className="errors">
    //             {Object.keys(this.state.errors).map((error, i) => (
    //                 <li key={`error-${i}`}>{this.state.errors[error]}</li>
    //             ))}
    //         </ul>
    //     );
    // }

    // handleDemoUser() {
    //     this.props.login({
    //         email: 'user@user.com',
    //         password: '0123456789'
    //     })
    // }
    removeUser(e){ 
        e.preventDefault(); 
       

        const updatedArray = this.state.selectedUsersId.slice(0, this.state.selectedUsersId.indexOf(e.target.value)).concat(this.state.selectedUsersId.slice(this.state.selectedUsersId.indexOf(e.target.value) + 1, this.state.selectedUsersId.length));

        this.setState({selectedUsersId: updatedArray})
    }

    onConfirm(e){
        addUsersToGroup(this.state.selectedUsersId);
    }

    onAddUser(e){
        // TODO: check if user is already in array, 
        e.preventDefault();
      
        if( this.state.selectedUsersId.indexOf(this.state.selectedUserId) === -1 && this.state.selectedUserId !== null){
            this.setState({
                selectedUsersId: this.state.selectedUsersId.concat(this.state.selectedUserId),
            });
        }
    }

    handleChange(e) {
        // let { name, value } = e.target;
        this.setState({
            selectedUserId: e.target.value,
        });
      
    }

    render() {
        let memberList = this.state.selectedUsersId.map((user, i) => {
            return (
                <li>{user}<button onClick={this.removeUser} value={user}>remove user</button></li>
            )
        })
        // TODO: replace with users from db. Adjust option value={userId}
        // display users in the array 
        // add remove button for each function 
        let users = ["jamaal", "steve", "doug", "willie", "ralph"];
        const defaultOption = "_1"
        return (
            <div class="group-container">
                <select value={this.state.selectedUserId || defaultOption} name="users" onChange={this.handleChange}>
                    <option value="_1" selected={true} disabled={true}>Select User</option>
                    {
                        users.map((user, i) => {
                            return (
                                <option value={i} selected>{user}</option>
                            )
                        })
                    }
                </select>
                <button onClick={this.onAddUser}>Add user</button>
                <div>
                    <button onClick={this.onConfirm}>Confirm</button>
                </div>
                <div className="add-member-list">
                    <ol>
                        {
                        //   this.selectedUsersIdDuplicate()
                        memberList
                        }
                       
                    </ol> 
                </div>
            </div>
        );
    }
}

export default withRouter(GroupForm);
