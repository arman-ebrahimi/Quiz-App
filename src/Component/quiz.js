import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";

export const Quiz = ({obj, onclick, answers, numberQues}) => {
    const [showBtn, setShowBtn] = useState(false);
    const [clicked, setClicked] = useState([]);
    const [disabled, setDisabled] = useState(false);
    const dispatch = useDispatch();
    const showResult = (item, index) => {
        setDisabled(true);
        setShowBtn(true);
        if(item === obj.correct_answer){
            setClicked([...clicked, 'clickTrue' + index]);
        }
        else{
            setClicked([...clicked, 'clickFalse' + index]);
        }
    }
    const removeClass = () => {
        setShowBtn(false);
        setDisabled(false);
        setClicked([...clicked, '']);
    }

    useEffect(() => {
        /* 19, because we push a '' to array after any click on button, for clean styles of colors. Since we want to
        items don't have any styles after show next question. As result, we finally have 10 answers and 9 spaces
         (9 space, because our answers are complete, after select the last answer and before click btn for the last time*/
        if(clicked.length === 19){
            const allAnswers = clicked.slice();
            console.log(clicked);
            const allTrueAnswers = allAnswers.filter(item => item.startsWith("clickTrue")).length;
            dispatch({type: "questions/numberOfTrueAnswers", payload: allTrueAnswers});
        }
    })

    return(
        <div className="container px-5 quiz">
            <div className="row text-center bg-primary">
                <div className="col-12 py-1 text-white">
                    <span className="d-block">Question {numberQues+1} / 10</span>
                    <h5 className="lh-lg">{obj.question}</h5>
                </div>
            </div>
            <div className="row d-flex justify-content-between">
                {answers.map((item, index) =>
                    <button disabled={disabled} onClick={() => showResult(item,index)} className={`col-5 mt-4 items
                     ${clicked[clicked.length-1] === "clickTrue" + index ? "clickTrue" : clicked[clicked.length-1] ===
                        "clickFalse" + index ? 'clickFalse' : ''}`} key={index}>
                        <div className="row">
                            <div className="col-2 bg-primary fs-2 text-white d-flex align-items-center justify-content-center">
                                {['A', 'B', 'C', 'D'][index]}
                            </div>
                            <div className="col-10 py-3">{item}</div>
                        </div>
                    </button>
                )}
            </div>
            {showBtn &&
                <div className="row mt-5">
                    <button className="col-2 btn btn-primary mx-auto fw-bold" onClick={() => {onclick();removeClass()}}>Next</button>
                </div>
            }
        </div>
    )
}