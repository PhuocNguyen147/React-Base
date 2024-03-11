import React from "react";
class DisplayInfor extends React.Component {
    render() {
        const { listUser } = this.props;
        console.table(listUser);
        return (
            <div>
                {listUser.map((user) => {
                    return (
                        <div key={user.id}>
                            my name is {user.name} <br></br>
                            my age is {user.age} <hr></hr>
                        </div>
                    )
                })
                }

            </div >
        )
    }
}
export default DisplayInfor;