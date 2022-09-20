import {useSelector} from "react-redux";
import Modal from "react-bootstrap/Modal";
import ProgressBar from "react-bootstrap/ProgressBar";
import Badge from "react-bootstrap/Badge";


export const Result = () => {
    const numberTrues = useSelector(state => state.questions.numberOfTrueAnswers);
    const timeOfQuiz = useSelector(state => state.questions.timeOfQuiz);
    return(
            <Modal centered show={true} className="result-page" dialogClassName="text-center">
                <Modal.Header className="h-modal-result">
                    <Modal.Title style={{color: numberTrues >= 7 && "green"}}>{numberTrues >= 7 ? "Congratulations" : "Sorry!"}</Modal.Title>
                </Modal.Header>
                <Modal.Body><br />
                    <ProgressBar>
                        <ProgressBar now={numberTrues*10} label={`${numberTrues*10}%`} variant={numberTrues >= 7 ? "success" : "danger"} />
                    </ProgressBar><br />
                </Modal.Body>
                <Modal.Footer className="foo-modal-result">
                    <div>Your true answers: <Badge bg="success">{numberTrues}</Badge></div>
                    <div>Your time: {Math.floor(timeOfQuiz / 60)} minute(s) and {timeOfQuiz % 60} seconds</div>
                </Modal.Footer>
            </Modal>
    )
}