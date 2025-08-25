import React, { createElement, useState } from "react";
import { createRoot } from "react-dom/client";
import StartScreen from "./components/StartScreen.js";
import Quiz from "./components/Quiz.js";
import Result from "./components/Result.js";

function Root() {

    const [Difficulty, setDifficulty] = useState("easy");
    const [SelectedCategory, setSelectedCategory] = useState("9");
    const [GameStart, setgameStart] = useState(false);
    const [Score, setScore] = useState(0);
    const [Finished, setFinished] = useState(false);

    return (
        <div className="flex justify-center items-center h-screen">
            {!GameStart ? (<StartScreen
                Difficulty={Difficulty}
                setDifficulty={setDifficulty}
                SelectedCategory={SelectedCategory}
                setSelectedCategory={setSelectedCategory}
                setgameStart={setgameStart}
            />) :
                (
                     !Finished ? (<Quiz
                Difficulty={Difficulty}
                SelectedCategory={SelectedCategory}
                Score={Score}
                setScore={setScore}
                setFinished={setFinished}
            />) : (
                    <Result Score={Score} />

            )
            ) }
        </div>



    )
}


const root = document.getElementById("root");
const rootContainer = createRoot(root);
rootContainer.render(<Root />);


