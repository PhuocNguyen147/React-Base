import React from "react";
import Userinfor from "./Userinfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
    state = {
        listUser: [
            { id: 1, name: 'Nguyen Huu Phuoc', age: '22' },
            { id: 2, name: 'sarigan', age: '17' },
            { id: 3, name: 'Chidori', age: '18' }
        ]
    }
    render() {
        return (
            <div>
                <Userinfor />
                <DisplayInfor listUser={this.state.listUser} />
                <br />
            </div>


        );

    }
}

export default MyComponent;