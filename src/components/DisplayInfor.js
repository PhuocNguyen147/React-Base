import React, { Fragment } from "react";
class DisplayInfor extends React.Component {
    state = {
        isShow: true
    }
    handleShowhide = () => {

        this.setState({
            isShow: !this.state.isShow
        })


    }


    render() {
        const { listUser } = this.props;
        // console.table(listUser);
        return (
            <Fragment>


                <div>
                    <button onClick={() => this.handleShowhide()}>
                        {this.state.isShow === true ? 'hide' : 'show'}
                    </button>
                </div>

                {this.state.isShow &&


                    <div>
                        {listUser.map((user) => {
                            return (

                                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                    my name is {user.name} <br></br>
                                    my age is {user.age} <hr></hr>
                                </div>







                            )
                            // if (+user.age > 18) {
                            //     return (
                            //         <div key={user.id} className="green">
                            //             my name is {user.name} <br></br>
                            //             my age is {user.age} <hr></hr>
                            //         </div>
                            //     )
                            // } else {
                            //     return (
                            //         <div key={user.id} className="red">
                            //             my name is {user.name} <br></br>
                            //             my age is {user.age} <hr></hr>
                            //         </div>
                            //     )
                            // }

                        })
                        }
                    </div>
                }
            </Fragment>
        )
    }
}
export default DisplayInfor;