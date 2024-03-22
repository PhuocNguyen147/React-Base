import React, { Fragment, useEffect, useState } from "react";
import './DisplayInfor.scss';
import logo1 from './../logo.svg';
// class DisplayInfor extends React.Component {
// constructor(props) {
//     console.log("hello contructor")
//     super(props);
//     this.state = {
//         isShow: true
//     }
// }



// componentDidMount() {
//     console.log("helllo mount");
//     setTimeout(() => {
//         document.title = "Phuoc Nguyen"
//     }, 3000)
// }
// componentDidUpdate(prevProps, prevState, snapshot) {
//     console.log("hello update");
//     if (this.props.listUser !== prevProps.listUser) {
//         if (this.props.listUser.length === 5) {
//             alert("you got 5")
//         }
//     }
// }
// handleShowhide = () => {
//     this.setState({
//         isShow: !this.state.isShow
//     })
// }

const DisplayInfor = (props) => {

    const { listUser } = props;
    // const listUser = props.listUser
    const [isShowlistUser, setShowListUser] = useState(true)
    const handleShowhide = () => {
        setShowListUser(!isShowlistUser)
    }

    useEffect(() => {
        if (listUser.length === 0) {
            alert('no users')
        }
    }, [listUser])
    return (
        <div className="display-infor-container">
            <img src={logo1}></img>
            <div >
                <button onClick={() => handleShowhide()}>
                    {isShowlistUser === true ? 'hide' : 'show'}
                </button>
            </div>
            {isShowlistUser &&
                <>
                    {listUser.map((user) => {
                        return (
                            <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                my name is {user.name} <br></br>
                                my age is {user.age} <br></br>
                                <button onClick={() => props.handleDeleteUser(user.id)}>Delete</button>
                                <hr></hr>
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
                </>
            }

        </div>
    )

}
export default DisplayInfor;