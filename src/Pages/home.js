import {Fragment, useEffect, useState} from "react";
import {ModalStart} from "../Component/modal";
import {useDispatch, useSelector} from "react-redux";
import {fetchQuestions} from "../Component/questionsSlice";
import {Quiz} from "../Component/quiz";
import {useNavigate} from "react-router-dom";

export const Home = () => {
    const [id, setId] = useState(0);
    const [timeStart, setTiming] = useState(0);
    const dispatch = useDispatch();
    const Navigate = useNavigate();
    const obj = useSelector((state) => state.questions.data[id]);
    const fetchStatus = useSelector((state) => state.questions.status);

    let answers;
    if(obj){
        answers = obj.incorrect_answers.slice();
        answers.splice(Math.floor(Math.random()*4), 0, obj.correct_answer);
    }

    const nextId = () => {
        setId(id + 1);
        if(id === 9){
            dispatch({type: "questions/timeOfQuiz", payload: (new Date()).getTime() - timeStart});
            Navigate("/result");
        }
    }

    const startTime = () => {
        setTiming((new Date()).getTime());
    }

    useEffect(() => {
        if(fetchStatus === "idle"){
            dispatch(fetchQuestions());
        }
    }, [fetchStatus, dispatch])

    return (
        <Fragment>
            <ModalStart onclick={startTime}/>
            {obj &&
                <Quiz obj={obj} onclick={nextId} answers={answers} numberQues={id} />
            }
        </Fragment>
    );
}