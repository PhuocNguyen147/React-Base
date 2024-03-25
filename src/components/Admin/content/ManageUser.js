import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss';


const ManageUser = (props) => {
    return (
        <div classNameName="manage-user-container">
            <div classNameName="title">
                ManageUser
            </div>
            <div classNameName="users-content" >
                <button>add new user</button>
                <div>
                    table user
                </div>
                <ModalCreateUser />
            </div>

        </div>
    )
}
export default ManageUser;