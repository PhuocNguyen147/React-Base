import ModalCreateUser from "./ModalCreateUser";



const ManageUser = (props) => {
    return (
        <div classNameName="manage-user-container">
            <div classNameName="title">
                ManageUser
            </div>
            <div classNameName="user-content" >
                <button>add new user</button>
            </div>
            <div>
                table user
                <ModalCreateUser />
            </div>
        </div>
    )
}
export default ManageUser;