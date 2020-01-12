import React from "react";
import "./style.css";

function Result(props) {
    if (props.correct === null) {
        return (
            <div className="result">
                <div className="spans">
                    <span className="guessGame">
                        Try not to select the same image twice.
                    </span>
                </div>
            </div>
        );
    } else if (props.correct === "win") {
        return (
            <div className="result">
                <div className="spans">
                    <span className="win">YWinner!</span>
                    <span>Click an image to play again!</span>
                </div>
            </div>
        );
    } else {
        return (
            <div className="result">
                {props.correct ? (
                    <div className="spans">
                        <span className="correct">Awesome!</span>
                    </div>
                ) : (
                    <div className="spans">
                        <span className="wrong">Play again</span>
                    </div>
                )}
            </div>
        );
    }
}

export default Result;