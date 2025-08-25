import React, { useEffect, useState } from "react";

export default function StartScreen({Difficulty , setDifficulty , SelectedCategory ,setSelectedCategory , setgameStart}) {

    const Categories =  [
    {
      "id": 9,
      "name": "General Knowledge"
    },
    {
      "id": 12,
      "name": "Entertainment: Music"
    },
    {
      "id": 14,
      "name": "Entertainment: Television"
    },
    {
      "id": 15,
      "name": "Entertainment: Video Games"
    },
    {
      "id": 17,
      "name": "Science & Nature"
    },
    {
      "id": 18,
      "name": "Science: Computers"
    },
    {
      "id": 21,
      "name": "Sports"
    },
    {
      "id": 22,
      "name": "Geography"
    },
    {
      "id": 23,
      "name": "History"
    },
    {
      "id": 27,
      "name": "Animals"
    },
    {
      "id": 28,
      "name": "Vehicles"
    },
    {
      "id": 29,
      "name": "Entertainment: Comics"
    },
  ]

    function difficultyClick(e) {
        setDifficulty(e.target.value);
    }

    function categoryClick(e) {
        setSelectedCategory(e.target.value);
        console.log(e.target.value);
    }

    return (
        <div className="flex justify-center items-center h-screen w-screen bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">
            <div className="bg-white bg-opacity-90 backdrop-blur-md p-12 rounded-3xl shadow-2xl w-full max-w-3xl flex flex-col gap-10">
                
                {/* Title */}
                <h1 className="text-6xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600">
                    Trivia Quiz
                </h1>

                {/* Category */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col flex-1 gap-3">
                        <label className="text-gray-700 font-semibold text-xl">Select the Category</label>
                        <select
                            onChange={categoryClick}
                            className="border-2 border-purple-300 rounded-xl p-4 text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-purple-400 hover:border-purple-500 transition"
                            value={SelectedCategory}
                        >
                            {Categories.map((value) => (
                                <option key={value.id} value={value.id}>
                                    {value.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Difficulty */}
                    <div className="flex flex-col flex-1 gap-3">
                        <label className="text-gray-700 font-semibold text-xl">Select the Difficulty</label>
                        <select
                            onChange={difficultyClick}
                            className="border-2 border-pink-300 rounded-xl p-4 text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-pink-400 hover:border-pink-500 transition"
                            value={Difficulty}
                        >
                            <option value="easy">Easy</option>
                            {/* <option value="medium">Medium</option>  API NOT AVAILBLE FOR HARD */}
                            <option value="medium">Hard</option>
                        </select>
                    </div>
                </div>

                {/* Start Button */}
                <div className="flex justify-center">
                    <button 
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-4 px-10 rounded-2xl hover:scale-105 transform transition duration-200 shadow-lg text-xl"
                    onClick={() => setgameStart(true)}
                    >
                        Start Quiz
                    </button>
                </div>
            </div>
        </div>
    );
}
