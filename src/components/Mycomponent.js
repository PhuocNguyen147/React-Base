import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

class Mycomponent extends React.Component {
    state = {
        listUser: [
            { id: 1, name: 'Nguyen Huu Phuoc', age: '22' },
            { id: 2, name: 'sarigan', age: '17' },
            { id: 3, name: 'Chidori', age: '16' }
        ]
    }
    handleAddUser = (NewUser) => {
        this.setState({
            listUser: [NewUser, ...this.state.listUser]
        })
    }
    handleDeleteUser = (userId) => {
        let listUserClone = [...this.state.listUser];
        listUserClone = listUserClone.filter(item => item.id !== userId)
        this.setState({
            listUser: listUserClone
        })
        console.log(">>>check user clone", userId)
    }
    render() {
        return (
            <div>
                <AddUserInfor
                    handleAddUser={this.handleAddUser}
                />
                <DisplayInfor
                    handleDeleteUser={this.handleDeleteUser}
                    listUser={this.state.listUser}
                />
                <br />
            </div>


        );

    }
}



export default Mycomponent;