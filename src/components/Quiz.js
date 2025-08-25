import { useEffect, useState } from "react";

export default function Quiz({ Difficulty, SelectedCategory, Score, setScore, setFinished }) {
   const [Questions, setQuestions] = useState([]);
   const [currentIndex, setCurrentIndex] = useState(0);
   const [select, setSelect] = useState("");
   const [internet , setInternet] = useState(true);

   async function getQuestions() {
      try {
          const response = await fetch(
         `https://opentdb.com/api.php?amount=10&category=${SelectedCategory}&difficulty=${Difficulty}&type=boolean`
      );
      const data = await response.json();
      setQuestions(data.results);
      setInternet(true)

      } catch (err){
         setInternet(false);
         
      }
     
   }

   useEffect(() => {
      getQuestions();
   }, [Difficulty, SelectedCategory]);

   if (Questions == undefined) {
      return (
         <div className="flex justify-center items-center h-screen w-screen bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
            <h2 className="text-4xl font-bold text-white animate-pulse">Please Refresh ...</h2>
         </div>
      );
   }

   const question = Questions[currentIndex];

   function handleNext() {
      if (select === "") return alert("Please select an option!");
      if (select === question.correct_answer) {
         setScore((prev) => prev + 1);
      }
      setSelect("");

      if (currentIndex < Questions.length - 1) {
         setCurrentIndex((prev) => prev + 1);
      } else {
         setFinished(true);
      }
   }

   


   if (Questions.length === 0) {

      return (internet? 

         (<div className="flex justify-center items-center h-screen w-screen bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
            <h2 className="text-4xl font-bold text-white animate-pulse">Loading Questions...</h2>
         </div>) : (<div className="flex justify-center items-center h-screen w-screen bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
            <h2 className="text-4xl font-bold text-white animate-pulse">Check Your Internet Connection !!</h2>
         </div>
      )
      )
   }

   return (
      <div className="flex justify-center items-center h-screen w-screen bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
         <div className="bg-white bg-opacity-90 backdrop-blur-md p-10 rounded-3xl shadow-2xl w-full max-w-3xl flex flex-col gap-8">

            {/* Progress */}
            <div className="flex justify-between items-center">
               <h2 className="text-lg font-semibold text-gray-700">
                  Question {currentIndex + 1} / {Questions.length}
               </h2>
               <p className="text-lg font-bold text-purple-600">Score: {Score}</p>
            </div>

            {/* Question */}
            <h1
               className="text-2xl md:text-3xl font-bold text-center text-gray-800"
               dangerouslySetInnerHTML={{ __html: question.question }}
            />

            {/* Options */}
            <div className="flex flex-col gap-4 mt-4">
               <label className={`p-4 border-2 rounded-2xl cursor-pointer transition text-lg font-medium 
            ${select === "True" ? "bg-purple-100 border-purple-500" : "border-gray-300 hover:border-purple-400"}`}>
                  <input
                     type="radio"
                     name={`q-${currentIndex}`}
                     value="True"
                     checked={select === "True"}
                     onChange={() => setSelect("True")}
                     className="hidden"
                  />
                  ✅ True
               </label>

               <label className={`p-4 border-2 rounded-2xl cursor-pointer transition text-lg font-medium 
            ${select === "False" ? "bg-pink-100 border-pink-500" : "border-gray-300 hover:border-pink-400"}`}>
                  <input
                     type="radio"
                     name={`q-${currentIndex}`}
                     value="False"
                     checked={select === "False"}
                     onChange={() => setSelect("False")}
                     className="hidden"
                  />
                  ❌ False
               </label>
            </div>

            {/* Next Button */}
            <div className="flex justify-center mt-6">
               <button
                  onClick={handleNext}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-8 rounded-2xl hover:scale-105 transform transition duration-200 shadow-lg text-lg"
               >
                  {currentIndex === Questions.length - 1 ? "Finish Quiz" : "Next →"}
               </button>
            </div>
         </div>
      </div>
   );
}
