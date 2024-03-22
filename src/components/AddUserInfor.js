import React, { useState } from "react";

// class AddUserInfor extends React.Component {

//     state = {
//         name: 'Phuoc',
//         address: 'Can Tho',
//         age: 24
//     }


//     handleClick() {
//         console.log('Click');
//         console.log('My name is', this.state.name);
//         this.setState({
//             name: 'Nguyen',
//             age: Math.floor(Math.random() * 100) + 1
//         })
//     }

//     handleOnchaneInut = (event) => {
//         this.setState({
//             name: event.target.value,

//         })
//     }
//     handleOnchangeInputAge = (event) => {
//         this.setState({
//             age: event.target.value
//         })

//     }
//     handleOnsubmit = (event) => {
//         event.preventDefault()
//         this.props.handleAddUser({
//             id: Math.floor(Math.random() * 100) + 1 + '-random',
//             name: this.state.name,
//             age: this.state.age
//         });
//         // console.log(this.state)
//     }
//     render() {
//         return (
//             <div>This is Component <br></br>
//                 My name is {this.state.name} and i'm {this.state.age}<br></br>
//                 <form
//                     onSubmit={(event) => this.handleOnsubmit(event)}>
//                     <input
//                         placeholder={this.state.name}
//                         type="text"
//                         onChange={(event) => this.handleOnchaneInut(event)}
//                     />
//                     <input
//                         placeholder={this.state.age}
//                         type="text"
//                         onChange={(event) => this.handleOnchangeInputAge(event)}
//                     />
//                     <button>Submit</button>
//                 </form>

//             </div>
//         )
//     }
// }

const AddUserInfor = (props) => {
    const [name, setName] = useState('')
    const [address, setAddress] = useState('Can tho')
    const [age, setAge] = useState(20)

    // const handleClick = () =>{
    //     this.setState({
    //         name: 'Nguyen',
    //         age: Math.floor(Math.random() * 100) + 1
    //     })
    // }

    const handleOnchaneInut = (event) => {
        setName(event.target.value)
        // this.setState({
        //     name: event.target.value,

        // })
    }
    const handleOnchangeInputAge = (event) => {
        setAge(event.target.value)
        // this.setState({
        //     age: event.target.value
        // })

    }
    const handleOnsubmit = (event) => {
        event.preventDefault()
        props.handleAddUser({
            id: Math.floor(Math.random() * 100) + 1 + '-random',
            name: name,
            age: age
        });
    }
    // console.log(this.state)
    return (

        <div>This is Component <br></br>
            My name is {name} and i'm {age}<br></br>
            <form
                onSubmit={(event) => handleOnsubmit(event)}>
                <input
                    placeholder={name}
                    type="text"
                    onChange={(event) => handleOnchaneInut(event)}
                />
                <input
                    placeholder={age}
                    type="text"
                    onChange={(event) => handleOnchangeInputAge(event)}
                />
                <button>Submit</button>
            </form>
        </div>
    );

}

export default AddUserInfor;