import {useState} from "react";
import Modal from "react-bootstrap/Modal";

export const ModalStart = ({onclick}) => {
    const [isOpen, setIsOpen] = useState(true);
    const hideModal = () => {
        setIsOpen(false);
    }
    return(
            <Modal size="lg" centered show={isOpen} className="Modal">
                <Modal.Header>
                    <Modal.Title>Start Quiz</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <button onClick={() => {hideModal();onclick()}}>Start</button>
                </Modal.Footer>
            </Modal>
    )
}