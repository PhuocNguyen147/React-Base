import React from "react";

class Userinfor extends React.Component {

    state = {
        name: 'Phuoc',
        address: 'Can Tho',
        age: '24'
    }


    handleClick() {
        console.log('Click');
        console.log('My name is', this.state.name);
        this.setState({
            name: 'Nguyen',
            age: Math.floor(Math.random() * 100) + 1
        })
    }

    handleOnchaneInut = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleOnsubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
    }



    render() {
        return (
            <div>This is Component <br></br>
                My name is {this.state.name} and i'm {this.state.age}<br></br>
                <form
                    onSubmit={(event) => this.handleOnsubmit(event)}>
                    <input
                        placeholder={this.state.name}
                        type="text"

                        onChange={(event) => this.handleOnchaneInut(event)}
                    />
                    <button>Submit</button>
                </form>

            </div>
        )
    }
}
export default Userinfor;