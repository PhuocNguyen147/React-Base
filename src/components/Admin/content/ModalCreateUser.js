import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FcPlus } from "react-icons/fc";

const ModalCreateUser = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [role, setRole] = useState("ROLE")
    const [image, setImage] = useState("")
    const [previewImage, setPreviewImage] = useState("")

    const handleUploadImage = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setPreviewImage(URL.createObjectURL(event.target.files[0]))
            setImage(event.target.files[0])
        }

        console.log(previewImage);
    }
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                animation={false}
                size='xl'
                backdrop='static'
                className='modal-add-user'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </div>
                        <div className="col-6">
                            <label className="form-label">Username</label>
                            <input type="text"
                                className="form-control"
                                placeholder="1234 Main St"
                                value={username}
                                onChange={(event) => setUsername(event.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label for="inputState" className="form-label">ROLE</label>
                            <select id="inputState" className="form-select" onChange={(event) => setRole(event.target.value)}>
                                <option value="USER">USER</option>
                                <option value="ADMIN" >ADMIN</option>
                            </select>
                        </div>
                        <div className="col-md-12">
                            <label className="form-label label-upload" htmlFor='label-upload'>
                                <FcPlus />
                                Upload file image
                            </label>
                            <input
                                type="file"
                                className="form-control"
                                hidden
                                id='label-upload'
                                onChange={(event) => handleUploadImage(event)}
                            />
                        </div>
                        <div className='col-12 img-preview'  >
                            {/* {previewImage ?
                               
                                :
                                <span>Preview image</span>
                            } */}
                            <img src={previewImage} />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalCreateUser;