import {useState} from "react";
import Modal from "react-bootstrap/Modal";
import {ModalBody} from "react-bootstrap";

export const ModalStart = ({onclick}) => {
    const [isOpen, setIsOpen] = useState(true);
    const hideModal = () => {
        setIsOpen(false);
    }
    return(
            <Modal size="lg" centered show={isOpen} className="Modal">
                <Modal.Header className="h-modal">
                    <Modal.Title>Start Quiz</Modal.Title>
                </Modal.Header>
                <ModalBody>
                    This is a quiz application built using ReactJS.

                    Currently it's loaded with CSS questions from W3Scools, but you can easily load any type of questions into it.

                    It will dynamically load the question->answers pair and upload them into the components.
                </ModalBody>
                <Modal.Footer className="foo-modal">
                    <button className="py-2 px-5" onClick={() => {hideModal();onclick()}}>Start</button>
                </Modal.Footer>
            </Modal>
    )
}